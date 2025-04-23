import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Button, Kbd, Tooltip, TooltipTrigger } from '@ui-kit.ai/components'
import { PlusIcon } from 'lucide-react'

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

function InButtonTemplate(args: ComponentProps<typeof Kbd>) {
    return <Button slotRight={<Kbd {...args} />}>Create</Button>
}

export const InButton: Story = {
    args: {
        children: 'C',
    },
    parameters: {
        displayName: 'In a button',
    },
    render: InButtonTemplate,
}

function InTooltipTemplate(args: ComponentProps<typeof Kbd>) {
    return (
        <TooltipTrigger>
            <Button
                aria-label='Create'
                isIcon
            >
                <PlusIcon />
            </Button>
            <Tooltip
                defaultOpen
                isOpen
                placement='right'
            >
                Create
                <Kbd {...args} />
            </Tooltip>
        </TooltipTrigger>
    )
}

export const InTooltip: Story = {
    args: {
        children: 'C',
    },
    parameters: {
        displayName: 'In a tooltip',
    },
    render: InTooltipTemplate,
}
