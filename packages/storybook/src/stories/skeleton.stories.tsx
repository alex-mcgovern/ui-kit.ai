import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardBody, CardHeader, Skeleton } from '@ui-kit.ai/components'

const meta = {
    component: Skeleton,
    title: 'Skeleton',
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

function Template(_args: React.ComponentProps<typeof Skeleton>) {
    return (
        <Card className='w-80'>
            <CardHeader className='flex items-center justify-start gap-2'>
                <Skeleton className='size-10 rounded-full' />
                <Skeleton className='h-6 w-24 rounded-sm' />
            </CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Skeleton className='h-4 w-full rounded-sm' />
                <Skeleton className='h-4 w-full rounded-sm' />
                <Skeleton className='h-4 w-1/3 rounded-sm' />
            </CardBody>
        </Card>
    )
}

/**
 * Default skeleton with default height and width
 */
export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}
