import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { FieldError } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof FieldError>) {
    return <FieldError {...args} />
}

const meta = {
    component: FieldError,
    render: Template,
    title: 'FieldError',
} satisfies Meta<typeof FieldError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'This field is required',
    },
    parameters: {
        displayName: 'Default',
    },
}

export const LongMessage: Story = {
    args: {
        children:
            'This is a longer error message that might wrap to multiple lines. It should still be readable and not cause any layout issues.',
    },
    parameters: {
        displayName: 'Long Message',
    },
}
