import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    Tag,
    TagButton as TagButtonComponent,
    TagLink as TagLinkComponent,
} from '@ui-kit.ai/components'
import { CircleDot } from 'lucide-react'

const INTENTS = [undefined, 'success', 'warning', 'error'] as const satisfies (
    | ComponentProps<typeof Tag>['intent']
    | undefined
)[]

function TagButtonTemplate({ children, ...args }: ComponentProps<typeof TagButtonComponent>) {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {INTENTS.map((intent) => (
                <TagButtonComponent
                    key={`${intent}-default`}
                    {...args}
                    className='capitalize'
                    intent={intent}
                >
                    {children ?? intent ?? 'default'}
                </TagButtonComponent>
            ))}
            {INTENTS.map((intent) => (
                <TagButtonComponent
                    key={`${intent}-solid`}
                    {...args}
                    className='capitalize'
                    intent={intent}
                    variant='solid'
                >
                    {children ?? intent ?? 'default'}
                </TagButtonComponent>
            ))}
        </div>
    )
}

function TagLinkTemplate({ children, ...args }: ComponentProps<typeof TagLinkComponent>) {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {INTENTS.map((intent) => (
                <TagLinkComponent
                    key={`${intent}-default`}
                    {...args}
                    className='capitalize'
                    intent={intent}
                >
                    {children ?? intent ?? 'default'}
                </TagLinkComponent>
            ))}
            {INTENTS.map((intent) => (
                <TagLinkComponent
                    key={`${intent}-solid`}
                    {...args}
                    className='capitalize'
                    intent={intent}
                    variant='solid'
                >
                    {children ?? intent ?? 'default'}
                </TagLinkComponent>
            ))}
        </div>
    )
}

function TagTemplate({ children, ...args }: ComponentProps<typeof Tag>) {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {INTENTS.map((intent) => (
                <Tag
                    key={`${intent}-default`}
                    {...args}
                    className='capitalize'
                    intent={intent}
                >
                    {children ?? intent ?? 'default'}
                </Tag>
            ))}
            {INTENTS.map((intent) => (
                <Tag
                    key={`${intent}-solid`}
                    {...args}
                    className='capitalize'
                    intent={intent}
                    variant='solid'
                >
                    {children ?? intent ?? 'default'}
                </Tag>
            ))}
        </div>
    )
}

const meta = {
    component: Tag,
    render: TagTemplate,
    title: 'Tag',
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}
export const SlotLeft: Story = {
    args: {
        slotLeft: <CircleDot />,
    },
    parameters: {
        displayName: 'Slot (left)',
    },
}
export const SlotRight: Story = {
    args: {
        slotRight: <CircleDot />,
    },
    parameters: {
        displayName: 'Slot (right)',
    },
}
export const TagButton: Story = {
    parameters: {
        displayName: 'TagButton',
    },
    // @ts-expect-error - intentionally passing the wrong type
    render: TagButtonTemplate,
}
export const TagLink: Story = {
    parameters: {
        displayName: 'TagLink',
    },
    // @ts-expect-error - intentionally passing the wrong type
    render: TagLinkTemplate,
}
