import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Button, DialogTrigger, Heading, Popover, PopoverDialog } from '@ui-kit.ai/components'

type Placement = Exclude<ComponentProps<typeof Popover>['placement'], undefined>

import {
    ArrowUp,
    ArrowUpLeft,
    ArrowUpRight,
    MoveDownIcon,
    MoveDownLeftIcon,
    MoveDownRightIcon,
    MoveLeftIcon,
    MoveRightIcon,
    MoveUpLeftIcon,
    MoveUpRightIcon,
} from 'lucide-react'

const PLACEMENTS = [
    'bottom',
    'bottom left',
    'bottom right',
    'top',
    'top left',
    'top right',
    'left',
    'left top',
    'left bottom',
    'right',
    'right top',
    'right bottom',
] as const satisfies Placement[]

type KnownPlacement = (typeof PLACEMENTS)[number]

const PLACEMENT_ICONS = {
    bottom: MoveDownIcon,
    'bottom left': MoveDownLeftIcon,
    'bottom right': MoveDownRightIcon,
    left: MoveLeftIcon,
    'left bottom': MoveDownLeftIcon,
    'left top': MoveUpLeftIcon,
    right: MoveRightIcon,
    'right bottom': MoveDownRightIcon,
    'right top': MoveUpRightIcon,
    top: ArrowUp,
    'top left': ArrowUpLeft,
    'top right': ArrowUpRight,
} satisfies Record<KnownPlacement, React.ComponentType>

const getPlacementIcon = (placement: KnownPlacement) => {
    const Icon = PLACEMENT_ICONS[placement]
    return <Icon className='h-4 w-4' />
}

function PlacementTemplate(args: ComponentProps<typeof Popover>) {
    return (
        <>
            {PLACEMENTS.map((placement) => (
                <DialogTrigger>
                    <Button>{getPlacementIcon(placement)}</Button>
                    <Popover
                        {...args}
                        placement={placement}
                    />
                </DialogTrigger>
            ))}
        </>
    )
}

function Template(args: ComponentProps<typeof Popover>) {
    return (
        <DialogTrigger>
            <Button>Show popover</Button>
            <Popover {...args} />
        </DialogTrigger>
    )
}

const meta = {
    args: {
        children: (
            <PopoverDialog>
                <Heading
                    className='mb-2 text-base'
                    level={3}
                    slot='title'
                >
                    Help
                </Heading>
                <p className='text-sm'>For help accessing your account, please contact support.</p>
            </PopoverDialog>
        ),
    },
    component: Popover,
    render: Template,
    title: 'Components/Popover',
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

/**
 * react-aria supports a pretty comprehensive range of placement options, some
 * of which are shown here. It is important to note that the Popover may flip
 * when it detects a collision with a parent or window edge.
 */
export const Placement: Story = {
    decorators: [
        (Story) => (
            <div className='grid grid-cols-3 gap-2'>
                <Story />
            </div>
        ),
    ],
    parameters: {
        displayName: 'Placement',
    },
    render: PlacementTemplate,
}
