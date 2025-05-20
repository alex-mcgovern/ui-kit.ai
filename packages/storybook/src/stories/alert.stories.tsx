import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Alert, Button } from '@ui-kit.ai/components'
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon } from 'lucide-react'

function Template(args: ComponentProps<typeof Alert>) {
    return (
        <Alert
            {...args}
            icon={<InfoIcon />}
            text='You do not have any active subscriptions.'
        />
    )
}

const meta = {
    component: Alert,
    render: Template,
    title: 'Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        icon: <InfoIcon />,
        text: 'You do not have any active subscriptions.',
    },
    parameters: {
        displayName: 'Default',
    },
}

export const WithActions: Story = {
    args: {
        actions: [
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
        ],
        icon: <InfoIcon />,
        text: 'You do not have any active subscriptions.',
    },
    parameters: {
        displayName: 'Default',
    },
}

export const IntentError: Story = {
    args: {
        icon: <AlertTriangleIcon />,
        intent: 'error',
        text: 'Your last payment was unsuccessful.',
    },
    parameters: {
        displayName: 'Intent: Error',
    },
}
export const IntentWarning: Story = {
    args: {
        icon: <AlertTriangleIcon />,
        intent: 'warning',
        text: 'Your subscription will expire in 3 days.',
    },
    parameters: {
        displayName: 'Intent: Warning',
    },
}
export const IntentSuccess: Story = {
    args: {
        icon: <CheckCircleIcon />,
        intent: 'success',
        text: 'Your payment was successful.',
    },
    parameters: {
        displayName: 'Intent: Success',
    },
}
