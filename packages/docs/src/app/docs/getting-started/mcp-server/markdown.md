# @ui-kit.ai/mcp-server

The `@ui-kit.ai/mcp-server` is a Model Context Protocol (MCP) server that allows
AI coding assistants to access detailed usage examples for ui-kit.ai components.

## What is an MCP Server?

[Model Context Protocol](https://modelcontextprotocol.io/introduction) **(MCP)** is an open standard that defines how applications share context with large language models (LLMs). MCP servers act as a bridge between LLMs and specific data or functionality, allowing AI assistants to access specialized information without requiring the knowledge to be embedded in the model itself.

## What is this for?

The ui-kit.ai MCP server is designed to enhance the capabilities of AI assistants by providing them with detailed, up-to-date information about ui-kit.ai components. This allows the AI to generate accurate and relevant code snippets, usage examples, and documentation for developers using ui-kit.ai.

## Why use this?

- **Accurate codegen**: Get concise, accurate examples straight from our docs, ensuring your
  AI agent knows how to built with ui-kit.ai — minimizing hallucinations or catastrophic forgetting.
- **Optimize context**: The MCP server provides tools that allow the agent to
  ask for exactly what it needs, without overwhelming it with unnecessary information.
- **No network connection**: The MCP server serves static content over
  [stdio](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio),
  and is [open
  source](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/mcp-server),
  so you can rest easy knowing that there is nothing fishy going on under-the-hood.

## Integration with AI Assistants

**Note: You will need [Node.js](https://nodejs.org/) on your computer to
use this MCP server.**

You can integrate this MCP server with various AI assistants. Below are configuration examples for the most popular platforms.

### GitHub Copilot

To configure GitHub Copilot to use the **@ui-kit.ai/mcp-server**, add the
following config to `mcp.servers` in you User Settings JSON:

```json
{
    "mcp": {
        "servers": {
            "ui-kit.ai": {
                "command": "npx",
                "args": ["@ui-kit.ai/mcp-server"]
            }
        }
    }
}
```

You should now be ready to use the MCP server with GitHub Copilot's Agent Mode.

For more information, refer to the [GitHub Copilot MCP documentation](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp).

### Claude (Desktop & Code)

#### Claude Desktop

To use the ui-kit MCP server with Claude Desktop, update your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following configuration:

```json
{
    "mcp": {
        "servers": {
            "ui-kit": {
                "command": "npx",
                "args": ["@ui-kit.ai/mcp-server"]
            }
        },
        "allowed_paths": [
            // Add paths to your project directories here
            "/path/to/your/project"
        ]
    }
}
```

Remember to restart Claude Desktop after updating the configuration.

#### Claude Code

For Claude Code, you can add the MCP server using the following command:

```bash
claude mcp add "ui-kit" npx @ui-kit.ai/mcp-server
```

For more details, refer to the [Claude MCP documentation](https://docs.anthropic.com/en/docs/claude-code/tutorials#set-up-model-context-protocol-mcp).

### Cursor

To integrate the ui-kit MCP server with Cursor, add the following configuration to your Cursor settings:

1. Go to Settings > MCP
2. Click "Add MCP Server"
3. Configure with these settings:

```json
{
    "name": "ui-kit",
    "transport": "stdio",
    "command": "npx @ui-kit.ai/mcp-server"
}
```

For more information, see the [Cursor MCP documentation](https://docs.cursor.com/context/model-context-protocol).
