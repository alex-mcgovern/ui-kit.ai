import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    Tag,
    TagButton as TagButtonComponent,
    TagLink as TagLinkComponent,
} from '@ui-kit.ai/components'
import { CircleDot } from 'lucide-react'

const VARIANTS = ['default', 'success', 'warning', 'error'] as const satisfies ComponentProps<
    typeof Tag
>['variant'][]

function TagButtonTemplate({ children, ...args }: ComponentProps<typeof TagButtonComponent>) {
    return (
        <div className='grid grid-cols-5 gap-4'>
            {VARIANTS.map((variant) => (
                <TagButtonComponent
                    key={variant}
                    {...args}
                    className='capitalize'
                    variant={variant}
                >
                    {children ?? variant}
                </TagButtonComponent>
            ))}
        </div>
    )
}

function TagLinkTemplate({ children, ...args }: ComponentProps<typeof TagLinkComponent>) {
    return (
        <div className='grid grid-cols-5 gap-4'>
            {VARIANTS.map((variant) => (
                <TagLinkComponent
                    key={variant}
                    {...args}
                    className='capitalize'
                    href='#'
                    variant={variant}
                >
                    {children ?? variant}
                </TagLinkComponent>
            ))}
        </div>
    )
}

function TagTemplate({ children, ...args }: ComponentProps<typeof Tag>) {
    return (
        <div className='grid grid-cols-5 gap-4'>
            {VARIANTS.map((variant) => (
                <Tag
                    key={variant}
                    {...args}
                    className='capitalize'
                    variant={variant}
                >
                    {children ?? variant}
                </Tag>
            ))}
        </div>
    )
}

const meta = {
    component: Tag,
    render: TagTemplate,
    title: 'Components/Tag',
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
