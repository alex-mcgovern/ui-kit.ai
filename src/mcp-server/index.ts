import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import AvailableComponents from "./data/available-components.json";
import ComponentUsage from "./data/component-usage.json";
import { z } from "zod";

const componentNameSchema = z.custom<
    keyof typeof ComponentUsage
>((v) => {
    if (v in ComponentUsage) return v;
    else return false;
});

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
    async ({ componentName }) => {
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
                    text: example ?? "No example found.",
                },
            ],
        };
    },
);

const transport = new StdioServerTransport();
await server.connect(transport);
