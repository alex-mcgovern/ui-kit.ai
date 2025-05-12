import type { Meta, StoryObj } from '@storybook/react'

import { Markdown } from '@ui-kit.ai/components'

import long from '../markdown-samples/long.md?raw'
import short from '../markdown-samples/short.md?raw'

const meta = {
    component: Markdown,
    title: 'Markdown',
} satisfies Meta<typeof Markdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: short,
    },
    parameters: {
        displayName: 'Default',
    },
}

export const KitchenSink: Story = {
    args: {
        children: long,
    },
    parameters: {
        displayName: 'Kitchen sink',
    },
}
