# Introduction

A clean, minimal UI library that works right out of the box with thoughtful defaults and powerful customization options.

## Why Another UI Library?

We built this library with a clear vision: to create a UI toolkit that enables
rich, interactive experiences without the configuration headaches.

While we've drawn inspiration from excellent projects like shadcn/ui, Radix UI Themes, and HeroUI (which we deeply respect), we saw an opportunity to build something that prioritizes both developer experience and end-user delight.

## Everything You Need

### 🎨 Themeable

Quickly customize your application's look and feel with our intuitive theme editor. Our theming system is powered by CSS variables and Tailwind CSS v4, giving you the flexibility to create unique designs without writing complex CSS.

```bash
# Customize your theme with ease
npm run theme
```

### 🧩 Composable

We believe in the power of composition. Our library provides simple component APIs that can be combined into powerful recipes. Build complex UI patterns from fundamental building blocks, all with consistent behavior and accessibility.

```jsx
// Compose components with ease
import { Card, Button, Avatar } from '@our-ui/react'

function UserCard({ user }) {
    return (
        <Card>
            <Card.Header>
                <Avatar src={user.avatar} />
                <Card.Title>{user.name}</Card.Title>
            </Card.Header>
            <Card.Content>{user.bio}</Card.Content>
            <Card.Footer>
                <Button>Follow</Button>
            </Card.Footer>
        </Card>
    )
}
```

### ♿ Accessible

Built with [React Aria](https://react-spectrum.adobe.com/react-aria/), the foremost accessibility-first UI primitives library. Every component follows WAI-ARIA guidelines and best practices, ensuring your applications are usable by everyone, regardless of ability.

### 🚀 Performant

Tree-shakeable architecture means you only ship what you use. With a small footprint and minimal runtime overhead, your applications stay fast and responsive, even as they grow in complexity.

### 🌙 Dark Mode

Automatic light/dark mode support for all custom themes, right out of the box. No extra configuration required.

### 📦 Simple Installation

Start building straight away with a single command:

```bash
npm install @our-ui/react
```

## The MCP Server (Beta)

One of our most exciting features is the MCP server. This powerful addition gives your assistant UI superpowers, enabling rich, AI-powered experiences in your applications.

### LLM Integration

The MCP server allows LLMs to provide detailed code examples that work seamlessly with our component library. This means you can:

- Generate functional UI components on demand
- Get intelligent suggestions for layout and design
- Receive working code snippets that use our components correctly

### Coming Soon

We're actively working on several exciting additions to the MCP server:

- **Provider Adapters**: Seamlessly integrate with major LLM providers by translating their message formats automatically, making it simple to build chat interfaces against them.

- **Google A2A Integration**: First-party support for the Google A2A specification, allowing you to build UIs around this spec with minimal hassle.

## Getting Started

Ready to build beautiful, accessible, and performant UIs? Let's get started:

```bash
# Install the library
npm install @our-ui/react

# Optional: Install the MCP server for AI-powered UI assistance
npm install @our-ui/mcp-server
```

## Community and Support

We believe in building this library together with our community. Join us on [GitHub](https://github.com/your-library) to contribute, report issues, or just say hello!

For commercial support options or enterprise features, please reach out to our [team](mailto:support@your-library.com).

---

_This library is developed with love and respect for the broader UI component ecosystem. Special thanks to the creators and contributors of shadcn/ui, Radix UI, and HeroUI for their inspiring work._
