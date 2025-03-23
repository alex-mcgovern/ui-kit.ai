import type { Meta, StoryObj } from '@storybook/react'

import { CodeBlock } from '@ui-kit.ai/components'

const meta = {
  args: {
    children: `console.log("Hello, world!");`,
    language: 'typescript',
  },
  component: CodeBlock,
  title: 'Components/CodeBlock',
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Python: Story = {
  args: {
    children: `def greet():\n    print("Hello, world!")\n\ngreet()`,
    language: 'python',
  },
  parameters: {
    displayName: 'Python',
  },
  tags: ['language-python'],
}

export const TypeScript: Story = {
  args: {
    children: `const greet = (): void => {\n    console.log("Hello, world!");\n};\n\ngreet();`,
    language: 'typescript',
  },
  parameters: {
    displayName: 'TypeScript',
  },
  tags: ['language-typescript'],
}

export const Rust: Story = {
  args: {
    children: `fn main() {\n    println!("Hello, world!");\n}`,
    language: 'rust',
  },
  parameters: {
    displayName: 'Rust',
  },
  tags: ['language-rust'],
}
