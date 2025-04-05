import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Alert, Button } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Alert>) {
  return (
    <Alert
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
      description='Description'
      title='Title'
    />
  )
}

const meta = {
  args: {
    title: 'Account verification required',
  },
  component: Alert,
  render: Template,
  title: 'Components/Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    displayName: 'Default',
  },
}
export const IntentError: Story = {
  args: {
    intent: 'error',
  },
  parameters: {
    displayName: 'Intent: Error',
  },
}
export const IntentWarning: Story = {
  args: {
    intent: 'warning',
  },
  parameters: {
    displayName: 'Intent: Warning',
  },
}
export const IntentSuccess: Story = {
  args: {
    intent: 'success',
  },
  parameters: {
    displayName: 'Intent: Success',
  },
}
