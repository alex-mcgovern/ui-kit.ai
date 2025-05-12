import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { CodeInline } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof CodeInline>) {
    return <CodeInline {...args} />
}

const meta = {
    args: {
        children: 'console.log("Hello")',
        language: 'typescript',
    },
    component: CodeInline,
    render: Template,
    title: 'CodeInline',
} satisfies Meta<typeof CodeInline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
}

export const TypeScript: Story = {
    args: {
        children: 'const greeting: string = "Hello"',
        language: 'typescript',
    },
    parameters: {
        displayName: 'TypeScript',
    },
}

export const Python: Story = {
    args: {
        children: 'greeting = "Hello"',
        language: 'python',
    },
    parameters: {
        displayName: 'Python',
    },
}

export const Rust: Story = {
    args: {
        children: 'let greeting = "Hello";',
        language: 'rust',
    },
    parameters: {
        displayName: 'Rust',
    },
}
