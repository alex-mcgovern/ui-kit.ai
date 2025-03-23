import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Description } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof Description>) {
  return <Description {...args}>This is a description</Description>
}

const meta = {
  component: Description,
  render: Template,
  title: 'Components/Description',
} satisfies Meta<typeof Description>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a description for a field',
  },
  parameters: {
    displayName: 'Default',
  },
  storyName: 'Description',
}
