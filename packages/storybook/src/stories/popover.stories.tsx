import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ComponentType } from 'react'

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
} from 'lucide-react'

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
} satisfies Record<KnownPlacement, ComponentType>

const getPlacementIcon = (placement: KnownPlacement) => {
    const Icon = PLACEMENT_ICONS[placement]
    return <Icon className='h-4 w-4' />
}

function PlacementTemplate(args: ComponentProps<typeof Popover>) {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {PLACEMENTS.map((placement) =>
                placement === null ? (
                    <div />
                ) : (
                    <DialogTrigger>
                        <Button
                            isIcon
                            variant='secondary'
                        >
                            {getPlacementIcon(placement)}
                        </Button>
                        <Popover
                            {...args}
                            placement={placement}
                        />
                    </DialogTrigger>
                )
            )}
        </div>
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
