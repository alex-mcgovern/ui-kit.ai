import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import AvailableComponents from "./data/available-components.json";
import ComponentUsage from "./data/component-usage.json";
import { z } from "zod";

const server = new McpServer({
    name: "Boondoggle component library assistant",
    version: "1.0.0",
});

server.tool("getComponentIndex", {}, async () => {
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(
                    AvailableComponents,
                    null,
                    2,
                ),
            },
        ],
    };
});

server.tool(
    "getComponentImplementation",
    {
        componentName: z.string(),
    },
    ({ componentName }) => {
        const example =
            componentName in ComponentUsage
                ? ComponentUsage[
                      componentName as keyof typeof ComponentUsage
                  ]
                : null;

        return {
            content: [
                {
                    type: "text",
                    text: example
                        ? JSON.stringify(example, null, 2)
                        : "No example found.",
                },
            ],
        };
    },
);

const transport = new StdioServerTransport();
await server.connect(transport);
