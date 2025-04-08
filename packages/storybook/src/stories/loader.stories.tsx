import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Loader } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Loader>) {
    return <Loader {...args} />
}

const meta = {
    component: Loader,
    render: Template,
    title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

export const CustomSize: Story = {
    args: {
        className: 'size-20',
    },
    parameters: {
        displayName: 'Custom Size',
    },
}

export const CustomColor: Story = {
    args: {
        className: 'text-mid-contrast',
    },
    parameters: {
        displayName: 'Custom Color',
    },
}
