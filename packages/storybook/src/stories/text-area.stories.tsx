import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '@ui-kit.ai/components'

const meta: Meta<typeof TextArea> = {
    args: {
        placeholder: 'This is a placeholder',
    },
    component: TextArea,
    title: 'TextArea',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
}

export const Disabled: Story = {
    args: {
        ['aria-disabled']: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
}

export const Invalid: Story = {
    args: {
        ['aria-invalid']: true,
    },
    parameters: {
        displayName: 'Invalid',
    },
}

export const Borderless: Story = {
    args: {
        isBorderless: true,
    },
    parameters: {
        displayName: 'Borderless',
    },
}
