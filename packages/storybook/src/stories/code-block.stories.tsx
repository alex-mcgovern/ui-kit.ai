import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Card, CardBody, CodeBlock } from '@ui-kit.ai/components'

function TemplateCard(args: ComponentProps<typeof CodeBlock>) {
    return (
        <Card>
            <CardBody>
                <CodeBlock {...args} />
            </CardBody>
        </Card>
    )
}

const meta = {
    args: {
        children: `const greet = (): void => {\n    console.log("Hello, world!");\n};\n\ngreet();`,
        language: 'typescript',
    },
    component: CodeBlock,
    title: 'CodeBlock',
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
    render: TemplateCard,
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
