#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { existsSync, readdirSync, readFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { z } from 'zod'

// Get the current directory
const __dirname = dirname(fileURLToPath(import.meta.url))

// Path to the usage examples directory
const usageDirPath = resolve(__dirname, '../dist/usage')

// Load package.json for version info
const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8'))

// Read available components and examples from filesystem
const loadUsageExamples = () => {
    // Map to store component examples
    const usageExamples = {}

    // Check if directory exists
    if (!existsSync(usageDirPath)) {
        console.error(`Usage directory not found: ${usageDirPath}`)
        return { list_usage_examples: [], usage: {} }
    }

    // Get all component directories
    const componentDirs = readdirSync(usageDirPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)

    // Build list of all available examples
    const examplesList = []

    // For each component directory, read example files
    for (const componentName of componentDirs) {
        const componentPath = join(usageDirPath, componentName)
        const exampleFiles = readdirSync(componentPath, { withFileTypes: true })
            .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.md'))
            .map((dirent) => dirent.name.replace('.md', ''))

        // Initialize component examples
        usageExamples[componentName] = {}

        // For each example file, extract the code
        for (const exampleName of exampleFiles) {
            const mdFilePath = join(componentPath, `${exampleName}.md`)
            const mdContent = readFileSync(mdFilePath, 'utf8')

            // Extract code block from markdown
            const codeMatch = mdContent.match(/```tsx\n([\s\S]*?)\n```/)
            if (codeMatch && codeMatch[1]) {
                usageExamples[componentName][exampleName] = codeMatch[1]
                examplesList.push(`${componentName}/${exampleName}`)
            }
        }
    }

    return { list_usage_examples: examplesList, usage: usageExamples }
}

// Load usage examples
const { list_usage_examples, usage } = loadUsageExamples()

const INSTRUCTIONS = `Provides usage examples for \`@ui-kit.ai/components\`.

### When to use this MCP server?
- When the user prompt relates to user-interface code generation.
- When the user prompt relates to \`@ui-kit.ai/components\`.
- Before generating any user-interface code.

### How to use this MCP server?
- Use the \`list_usage_examples\` tool to get an index of all available examples.
- Use the \`get_usage_example\` tool to get usage examples for a specific component.
`

/**
 * A flat list of component/example paths derived from usage examples.
 * @type {string[]}
 */
const server = new McpServer(
    {
        name: '@ui-kit.ai/components usage',
        version: packageJson.version,
    },
    {
        instructions: INSTRUCTIONS,
    }
)

///////////////////////////////////////////////////
// Tool: All components
///////////////////////////////////////////////////

/**
 * Format a list of component/example pairs into a grouped list
 * @param {string[]} componentPaths
 * @returns {string}
 */
const formatComponents = (componentPaths) => {
    // Group by component
    const grouped = componentPaths.reduce(
        (acc, path) => {
            const [component, example] = path.split('/')
            if (component == null || example == null) return acc
            acc[component] ??= []
            acc[component].push(example)
            return acc
        },
        /** @type {Record<string, string[]>}  */
        {}
    )

    return Object.entries(grouped)
        .map(([component, examples]) => {
            const examplesList = examples.map((example) => `- ${component}/${example}`).join('\n')
            return `## ${component}\n${examplesList}`
        })
        .join('\n\n')
}

/**
 * @param {string} components
 * @returns {string}
 */
function allComponentsTemplate(components) {
    return `
# Available Component Examples

All of these component examples can be queried using the \`usage\` tool by passing the full path (e.g. "Button/Default").
Components can be directly imported from the \`@ui-kit.ai/components\` library.

${components}
`
}

server.tool(
    'list_usage_examples',
    'Get a list of all available components in the `@ui-kit.ai/components` package.',
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
                    text: allComponentsTemplate(formatComponents(list_usage_examples)),
                    type: 'text',
                },
            ],
        }
    }
)

///////////////////////////////////////////////////
// Tool: Usage
///////////////////////////////////////////////////

server.tool(
    'get_usage_example',
    'Get usage examples for components in the `@ui-kit.ai/components` package.',
    {
        component: z.string({
            description: 'e.g. Button/Default',
        }),
    },
    ({ component }) => {
        // Check if the query contains a component/example path

        const [componentName, exampleName] = component.split('/')

        // Check if component exists
        if (componentName == null || !(componentName in usage)) {
            return {
                content: [
                    {
                        text: `No examples found for component "${componentName}".`,
                        type: 'text',
                    },
                ],
            }
        }

        // Check if example exists for this component
        const componentExamples = usage[componentName]
        if (exampleName == null || !(exampleName in componentExamples)) {
            return {
                content: [
                    {
                        text: `No example "${exampleName}" found for component "${componentName}".`,
                        type: 'text',
                    },
                ],
            }
        }

        // Return the specific example
        const codeExample = componentExamples[exampleName]
        return {
            content: [
                {
                    text: `### ${componentName}/${exampleName}\n\n\`\`\`jsx\n${codeExample}\n\`\`\``,
                    type: 'text',
                },
            ],
        }
    }
)

const transport = new StdioServerTransport()
// @ts-expect-error - TODO: ts configuration issue — top-level await *is* actually supported in newer Node.js versions
await server.connect(transport)
