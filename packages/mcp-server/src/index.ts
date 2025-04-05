import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

import AvailableComponents from '../data/available-components.json'
import ComponentUsage from '../data/component-usage.json'

const server = new McpServer({
    name: 'ui-kit.ai component library assistant',
    version: '1.0.0',
})

server.tool('getComponentIndex', {}, () => {
    return {
        content: [
            {
                text: JSON.stringify(AvailableComponents, null, 2),
                type: 'text',
            },
        ],
    }
})

server.tool(
    'getComponentImplementation',
    {
        componentName: z.string(),
    },
    ({ componentName }) => {
        const example =
            componentName in ComponentUsage
                ? ComponentUsage[componentName as keyof typeof ComponentUsage]
                : null

        return {
            content: [
                {
                    text: example ? JSON.stringify(example, null, 2) : 'No example found.',
                    type: 'text',
                },
            ],
        }
    }
)

const transport = new StdioServerTransport()
await server.connect(transport)
