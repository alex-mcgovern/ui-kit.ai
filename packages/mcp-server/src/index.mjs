#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import usage from '@ui-kit.ai/metadata/usage-examples.json' with { type: 'json' }
import { z } from 'zod'

import packageJson from '../package.json' with { type: 'json' }

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

server.tool('all_components', {}, () => {
    // Create a markdown list of all available components
    const componentsList = Object.keys(usage)
        .sort()
        .map((componentName) => `- ${componentName}`)
        .join('\n')

    return {
        content: [
            {
                text: `# Available Components\n\n${componentsList}`,
                type: 'text',
            },
        ],
    }
})

server.tool(
    'usage',
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
