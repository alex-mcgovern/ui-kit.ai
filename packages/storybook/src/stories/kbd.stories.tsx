import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Kbd } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Kbd>) {
    return <Kbd {...args} />
}

const meta = {
    component: Kbd,
    render: Template,
    title: 'Components/Kbd',
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: '⌘K',
    },
    parameters: {
        displayName: 'Default',
    },
}

export const KeyCombination: Story = {
    args: {
        children: '⌥⇧⌘K',
    },
    parameters: {
        displayName: 'Key Combination',
    },
}
