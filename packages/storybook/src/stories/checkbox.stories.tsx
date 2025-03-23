import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Checkbox } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Checkbox>) {
  return <Checkbox {...args} />
}

const meta = {
  args: {
    label: 'This is the label',
  },
  component: Checkbox,
  render: Template,
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    textPosition: 'right',
  },
  parameters: {
    displayName: 'Default',
  },
}
export const TextPositionRight: Story = {
  args: {
    textPosition: 'right',
  },
  parameters: {
    displayName: 'Right',
  },
}
export const TextPositionLeft: Story = {
  args: {
    textPosition: 'left',
  },
  parameters: {
    displayName: 'Left',
  },
}
export const IsInvalid: Story = {
  args: {
    isInvalid: true,
  },
  parameters: {
    displayName: 'Invalid',
  },
}
