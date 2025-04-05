import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Button, Tooltip, TooltipInfoButton, TooltipTrigger } from '@ui-kit.ai/components'
import {
    ArrowUp,
    ArrowUpLeft,
    ArrowUpRight,
    MoveDownIcon,
    MoveDownLeftIcon,
    MoveDownRightIcon,
    MoveLeftIcon,
    MoveRightIcon,
} from 'lucide-react'
import React from 'react'

type Placement = ComponentProps<typeof Tooltip>['placement']

const PLACEMENTS = [
    'top left',
    'top',
    'top right',
    'left',
    null,
    'right',
    'bottom left',
    'bottom',
    'bottom right',
] as const satisfies (null | Placement)[]

type KnownPlacement = Exclude<(typeof PLACEMENTS)[number], null>

const PLACEMENT_ICONS = {
    bottom: MoveDownIcon,
    'bottom left': MoveDownLeftIcon,
    'bottom right': MoveDownRightIcon,
    left: MoveLeftIcon,
    right: MoveRightIcon,
    top: ArrowUp,
    'top left': ArrowUpLeft,
    'top right': ArrowUpRight,
} satisfies Record<KnownPlacement, React.ComponentType>

const getPlacementIcon = (placement: KnownPlacement) => {
    const Icon = PLACEMENT_ICONS[placement]
    return <Icon className='h-4 w-4' />
}
function PlacementTemplate(args: ComponentProps<typeof Tooltip>) {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {PLACEMENTS.map((placement) =>
                placement === null ? (
                    <div />
                ) : (
                    <TooltipTrigger>
                        <Button
                            isIcon
                            variant='secondary'
                        >
                            {getPlacementIcon(placement)}
                        </Button>
                        <Tooltip
                            {...args}
                            placement={placement}
                        >
                            {placement}
                        </Tooltip>
                    </TooltipTrigger>
                )
            )}
        </div>
    )
}

function Template(args: ComponentProps<typeof Tooltip>) {
    return (
        <TooltipTrigger>
            <TooltipInfoButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    )
}

const meta = {
    args: {
        children: 'This is the tooltip',
    },
    component: Tooltip,
    render: Template,
    title: 'Components/Tooltip',
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}
/**
 * react-aria supports a pretty comprehensive range of placement options, some
 * of which are shown here. It is important to note that the Tooltip may flip
 * when it detects a collision with a parent or window edge.
 */
export const Placement: Story = {
    decorators: [
        (Story) => (
            <div className='grid grid-cols-4 gap-2'>
                <Story />
            </div>
        ),
    ],
    parameters: {
        displayName: 'Placement',
    },
    render: PlacementTemplate,
}
/**
 * The Tooltip can be composed with a number of different components,
 * like `Button`, `Link`, `Tab` and more. The element that triggers the tooltip
 * must be able to receive focus.
 */
export const Trigger: Story = {
    parameters: {
        displayName: 'Trigger',
    },
    render: (args) => (
        <TooltipTrigger>
            <Button>Hover me</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
}
