#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import propTypes from '@ui-kit.ai/metadata/prop-types.json' with { type: 'json' }
import usage from '@ui-kit.ai/metadata/usage-examples.json' with { type: 'json' }
import { z } from 'zod'

import packageJson from '../package.json' with { type: 'json' }

/**
 * A list of component summaries derived from prop types documentation.
 * @type {{
 *   name: string;
 *   description: string;
 * }[]}
 */
const ALL_COMPONENTS = Object.keys(usage).map((componentName) => {
    if (!Array.isArray(propTypes)) throw new Error('propTypes is not an array')
    const docs = propTypes.find((prop) => prop.displayName === componentName)
    return {
        description: docs.description,
        name: componentName,
    }
})

const server = new McpServer(
    {
        name: '@ui-kit.ai/components usage',
        version: packageJson.version,
    },
    {
        instructions:
            'Use this server to get usage examples for the `@ui-kit.ai/components` package. You can use the `all_components` tool to get a list of all components, or the `usage` tool to get usage examples for a specific component.',
    }
)

///////////////////////////////////////////////////
// Tool: All components
///////////////////////////////////////////////////

/**
 * Format a list of components into a header-description sections.
 * @param {{
 *   name: string;
 *   description: string;
 * }[]} components
 * @returns {string}
 */
const formatComponents = (components) =>
    components
        .map((component) => {
            return `## ${component.name}\n${component.description}`
        })
        .join('\n\n')

/**
 * @param {string} components
 * @returns {string}
 */
function allComponentsTemplate(components) {
    return `
# Available Components

All of these components can be directly imported from the \`@ui-kit.ai/components\` library.

${components}
`
}

server.tool(
    'all_components',
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
                    text: allComponentsTemplate(formatComponents(ALL_COMPONENTS)),
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
    'usage',
    'Get usage examples for a specific component in the `@ui-kit.ai/components` package.',
    {
        component: z.string({
            description: 'The name of the component to get usage examples for.',
        }),
    },
    ({ component }) => {
        // @ts-expect-error - we lose some type information here
        const componentExamples = component in usage ? usage[component] : null

        if (componentExamples == null) {
            return {
                content: [
                    {
                        text: 'No examples found for this component.',
                        type: 'text',
                    },
                ],
            }
        }

        // Format examples as markdown with H3 headings and code blocks
        const formattedExamples = Object.entries(componentExamples)
            .map(([exampleName, codeExample]) => {
                return `### ${exampleName}\n\n\`\`\`jsx\n${codeExample}\n\`\`\``
            })
            .join('\n\n')

        return {
            content: [
                {
                    text: formattedExamples || `No examples found for ${component}.`,
                    type: 'text',
                },
            ],
        }
    }
)

const transport = new StdioServerTransport()
// @ts-expect-error - TODO: ts configuration issue — top-level await *is* actually supported in newer Node.js versions
await server.connect(transport)
