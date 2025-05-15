#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import usage from '@ui-kit.ai/metadata/usage-examples.json' with { type: 'json' }
import { z } from 'zod'

import packageJson from '../package.json' with { type: 'json' }

const server = new McpServer({
    name: '@ui-kit.ai/components usage',
    version: packageJson.version,
})

server.tool('all_components', {}, () => {
    return {
        content: [
            {
                text: JSON.stringify(Object.keys(usage), null, 2),
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
        const example = component in usage ? usage[component] : null

        return {
            content: [
                {
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    text: example ? JSON.stringify(example, null, 2) : 'No example found.',
                    type: 'text',
                },
            ],
        }
    }
)

const transport = new StdioServerTransport()
await server.connect(transport)
