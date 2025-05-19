import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Button, EmptyState } from '@ui-kit.ai/components'
import { SearchXIcon } from 'lucide-react'

function Template(args: ComponentProps<typeof EmptyState>) {
    return (
        <EmptyState
            {...args}
            actions={[
                <Button
                    key='secondary'
                    variant='secondary'
                >
                    Secondary
                </Button>,
                <Button
                    key='primary'
                    variant='primary'
                >
                    Primary
                </Button>,
            ]}
            body='This is the body'
            icon={<SearchXIcon />}
            title='This is the title'
        />
    )
}

const meta = {
    args: {
        title: 'This is the title',
    },
    component: EmptyState,
    render: Template,
    title: 'EmptyState',
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'This is the title',
    },
    parameters: {
        displayName: 'Default',
    },
}
