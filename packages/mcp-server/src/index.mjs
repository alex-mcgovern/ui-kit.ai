#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { existsSync, readdirSync, readFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { z } from 'zod'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * The path to the directory containing the usage examples, e.g.:
 * @example
 * dist/
 * └── usage
 *     ├── ComponentA
 *     │   ├── ExampleA.md
 *     │   └── ExampleB.md
 *     └── ComponentB
 *         ├── ExampleA.md
 *         └── ExampleB.md
 */
const USAGE_DIR = resolve(__dirname, '../dist/usage')

// For simplicity, we validate the existence of the usage directory at startup
// and throw an error if it doesn't exist
if (!existsSync(USAGE_DIR)) throw new Error(`Usage directory not found: ${USAGE_DIR}`)

///////////////////////////////////////////////////
// Text
///////////////////////////////////////////////////

const SERVER_INSTRUCTIONS = `Provides usage examples for \`@ui-kit.ai/components\`.

### When to use this MCP server?
- When the user prompt relates to user-interface code generation.
- When the user prompt relates to \`@ui-kit.ai/components\`.
- Before generating any user-interface code.

### How to use this MCP server?
- Use the \`usageExampleIds\` tool to get an index of all available examples.
- Use the \`get_usage_example\` tool to get usage examples for a specific component.
`

const LIST_USAGE_EXAMPLES_DESCRIPTION =
    'Get a list of all available components in the `@ui-kit.ai/components` package.'

const GET_USAGE_EXAMPLE_DESCRIPTION =
    'Get usage examples for components in the `@ui-kit.ai/components` package.'

///////////////////////////////////////////////////
// Utils
///////////////////////////////////////////////////

/**
 * Retrieves a list of directory names within the specified directory path.
 * NOTE: This function only returns direct child directories (depth=1)
 * and does not traverse subdirectories recursively.
 *
 * @param {string} dirPath - The path to the directory whose subdirectories should be retrieved
 * @returns {string[]} An array of directory names (not full paths)
 */
function _listDirectoriesByPath(dirPath) {
    return readdirSync(dirPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
}

/**
 * Retrieves a list of markdown file names within the specified directory path.
 * NOTE: This function only returns direct child files (depth=1)
 * and does not traverse subdirectories recursively.
 *
 * @param {string} dirPath - The path to the directory where markdown files should be retrieved
 * @returns {string[]} An array of markdown file names (not full paths)
 */
function _listMarkdownFilesInPath(dirPath) {
    return readdirSync(dirPath, { withFileTypes: true })
        .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.md'))
        .map((dirent) => dirent.name)
}

/**
 * Get the MCP server version of from package.json
 * @returns {string} The version of the MCP server
 */
function getMcpServerVersion() {
    const packageJsonPath = resolve(__dirname, '../package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
    return packageJson.version
}

/**
 * Loads all component usage examples from the USAGE_DIR.
 *
 * @returns {{
 *   usageExamples: Object<string, string>  // Map of component/example IDs to their content
 * }}
 * @example
 * ```
 * // Directory structure:
 * dist/usage/
 * ├── ComponentA/
 * │   ├── ExampleA.md
 * │   └── ExampleB.md
 * └── ComponentB/
 *     ├── ExampleA.md
 *     └── ExampleB.md
 * // Example return value:
 * {
 *     "ComponentA/ExampleA": "{CODE_CONTENT}",
 *     "ComponentA/ExampleB": "{CODE_CONTENT}",
 *     "ComponentB/ExampleA": "{CODE_CONTENT}",
 *     "ComponentB/ExampleB": "{CODE_CONTENT}"
 * }
 * ```
 */
function loadUsageExamples() {
    // Get all component directories (e.g., Button, Card)
    const componentNames = _listDirectoriesByPath(USAGE_DIR)

    /** @type {Object<string, string>} - Map of fully qualified IDs to their code content */
    const usageExamples = {}

    for (const componentName of componentNames) {
        const componentPath = join(USAGE_DIR, componentName)
        const markdownFilenames = _listMarkdownFilesInPath(componentPath)

        // Process each markdown file to extract code examples
        for (const markdownFilename of markdownFilenames) {
            const usageExampleName = markdownFilename.replace('.md', '')
            const content = readFileSync(join(componentPath, markdownFilename), 'utf8')

            // Create fully qualified ID: "ComponentName/ExampleName"
            const fullyQualifiedId = `${componentName}/${usageExampleName}`
            usageExamples[fullyQualifiedId] = content
        }
    }

    return { usageExamples }
}

const { usageExamples } = loadUsageExamples()
const usageExampleIds = Object.keys(usageExamples)

///////////////////////////////////////////////////
// MCP Server
///////////////////////////////////////////////////

const server = new McpServer(
    {
        name: '@ui-kit.ai/components usage',
        version: getMcpServerVersion(),
    },
    {
        instructions: SERVER_INSTRUCTIONS,
    }
)

///////////////////////////////////////////////////
// Tool: All components
///////////////////////////////////////////////////

server.tool(
    'list_usage_examples',
    LIST_USAGE_EXAMPLES_DESCRIPTION,
    {
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
        readOnlyHint: true,
        title: 'All components',
    },
    () => {
        return {
            content: [
                {
                    text: usageExampleIds.join('\n'),
                    type: 'text',
                },
            ],
        }
    }
)

///////////////////////////////////////////////////
// Tool: Usage
///////////////////////////////////////////////////

// @ts-expect-error - TODO: something wrong with function overload in the SDK
server.tool(
    'get_usage_example',
    GET_USAGE_EXAMPLE_DESCRIPTION,
    {
        usageExampleId: z.string({
            description: 'e.g. Button/Default',
        }),
    },
    ({ usageExampleId }) => {
        if (usageExampleId in usageExamples === false) {
            return {
                content: [
                    {
                        text: `No examples found for "${usageExampleId}".`,
                        type: 'text',
                    },
                ],
            }
        }

        const codeExample = usageExamples[usageExampleId]

        return {
            content: [
                {
                    text: codeExample,
                    type: 'text',
                },
            ],
        }
    }
)

const transport = new StdioServerTransport()
// @ts-expect-error - TODO: ts configuration issue — top-level await *is* actually supported in newer Node.js versions
await server.connect(transport)
