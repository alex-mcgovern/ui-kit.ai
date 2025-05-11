import type { Meta, StoryObj } from '@storybook/react'

import { CodeBlock } from '@ui-kit.ai/components'

const meta = {
    args: {
        children: `const greet = (): void => {\n    console.log("Hello, world!");\n};\n\ngreet();`,
        language: 'typescript',
    },
    component: CodeBlock,
    title: 'Components/CodeBlock',
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
}
export const Python: Story = {
    args: {
        children: `def greet():\n    print("Hello, world!")\n\ngreet()`,
        language: 'python',
    },
    parameters: {
        displayName: 'Python',
    },
}

export const TypeScript: Story = {
    args: {
        children: `const greet = (): void => {\n    console.log("Hello, world!");\n};\n\ngreet();`,
        language: 'typescript',
    },
    parameters: {
        displayName: 'TypeScript',
    },
}

export const Rust: Story = {
    args: {
        children: `fn main() {\n    println!("Hello, world!");\n}`,
        language: 'rust',
    },
    parameters: {
        displayName: 'Rust',
    },
}
