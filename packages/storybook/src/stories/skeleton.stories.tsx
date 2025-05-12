import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '@ui-kit.ai/components'

const meta = {
    component: Skeleton,
    title: 'Skeleton',
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default skeleton with default height and width
 */
export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

/**
 * Custom width skeleton
 */
export const CustomWidth: Story = {
    args: {
        className: 'w-32',
    },
    parameters: {
        displayName: 'Custom Width',
    },
}

/**
 * Custom height skeleton
 */
export const CustomHeight: Story = {
    args: {
        className: 'h-12',
    },
    parameters: {
        displayName: 'Custom Height',
    },
}

/**
 * Example of multiple skeletons arranged to simulate a loading content block
 */
export const ContentBlock: Story = {
    parameters: {
        displayName: 'Content Block',
    },
    render: () => (
        <div className='space-y-4'>
            <Skeleton className='h-8 w-3/4' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-2/3' />
        </div>
    ),
}

/**
 * Circle shaped skeleton, useful for avatars or icons
 */
export const Circle: Story = {
    args: {
        className: 'h-12 w-12 rounded-full',
    },
    parameters: {
        displayName: 'Circle',
    },
}
