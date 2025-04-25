import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Card, CardBody, CardHeader, CardTitle } from '@ui-kit.ai/components'
import { Zap } from 'lucide-react'

function Template(args: ComponentProps<typeof Card>) {
    return (
        <Card {...args}>
            <CardHeader>
                <Zap className='bg-muted-100 text-mid-contrast -ml-1.5 size-3 rounded-full p-1.5' />
                <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardBody>
                <p className='text-mid-contrast'>
                    This is an example card with a header, title, and body content. Cards are
                    containers that group and organize content in a consistent manner.
                </p>
            </CardBody>
        </Card>
    )
}

const meta = {
    component: Card,
    render: Template,
    title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
}

export const WithoutHeader: Story = {
    parameters: {
        displayName: 'Without Header',
    },
    render: () => (
        <Card>
            <CardBody>
                <p className='text-mid-contrast'>A simple card with just body content.</p>
            </CardBody>
        </Card>
    ),
}

export const CustomClassName: Story = {
    args: {
        className: 'max-w-sm',
    },
    parameters: {
        displayName: 'Custom ClassName',
    },
}
