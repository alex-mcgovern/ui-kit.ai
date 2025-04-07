import type { Meta, StoryObj } from '@storybook/react'

import { Markdown } from '@ui-kit.ai/components'

const meta = {
    component: Markdown,
    title: 'Components/Markdown',
} satisfies Meta<typeof Markdown>

export default meta
type Story = StoryObj<typeof meta>

const markdownExample = `
# Markdown Component Example

This component renders **markdown** content with support for *various* features including \`inline code\`.

## Basic Text Formatting

You can use **bold**, *italic*, or ***both***. You can also use ~~strikethrough~~ text.

## Lists and Tasks

1. First ordered item
2. Second ordered item
   * Nested unordered item
   * Another nested item

- [x] Completed task
- [ ] Pending task

## Code Examples

Inline code: \`const greeting = "Hello, World!"\`

\`\`\`typescript
interface User {
    name: string;
    age: number;
}

function greet(user: User) {
    return \`Hello, \${user.name}!\`;
}
\`\`\`

## Tables and Quotes

| Feature | Support |
|---------|---------|
| Tables  | ✅      |
| Lists   | ✅      |
| Code    | ✅      |

> This is a blockquote that can contain
> multiple lines of text.

### Links and Images

[Visit our website](https://example.com)
`

export const Default: Story = {
    args: {
        children: markdownExample,
    },
    parameters: {
        displayName: 'Default',
    },
}
