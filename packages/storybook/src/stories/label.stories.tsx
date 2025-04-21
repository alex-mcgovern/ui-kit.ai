import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Label } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Label>) {
    return <Label {...args}>This is a label</Label>
}

const meta = {
    component: Label,
    render: Template,
    title: 'Components/Label',
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'This is a label for a field',
    },
    parameters: {
        displayName: 'Default',
    },
}
