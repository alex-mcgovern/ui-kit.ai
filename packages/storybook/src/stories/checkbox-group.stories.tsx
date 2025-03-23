import type { Meta, StoryObj } from '@storybook/react'

import {
  Checkbox,
  CheckboxGroup,
  Description,
  Label,
} from '@ui-kit.ai/components'
import React, { type ComponentProps } from 'react'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(args: ComponentProps<typeof CheckboxGroup>) {
  return (
    <CheckboxGroup {...args}>
      <Label {...LabelStories.Default.args} />
      <Checkbox
        description='Optional description'
        label='Item A'
        value='item-a'
      />
      <Checkbox
        description='Optional description'
        label='Item B'
        value='item-b'
      />
      <Description {...DescriptionStories.Default.args} />
    </CheckboxGroup>
  )
}

const meta = {
  component: CheckboxGroup,
  render: Template,
  title: 'Components/CheckboxGroup',
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    displayName: 'Default',
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
export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    displayName: 'Disabled',
  },
}
