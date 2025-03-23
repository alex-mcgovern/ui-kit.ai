import type { Meta, StoryObj } from '@storybook/react'

import {
  ComboBox,
  ComboBoxButton,
  ComboBoxClearButton,
  ComboBoxFieldGroup,
  ComboBoxInput,
  Description,
  Label,
  type OptionsSchema,
} from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { SearchIcon } from 'lucide-react'
import React, { type ComponentProps } from 'react'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(
  props: ComponentProps<typeof ComboBox<OptionsSchema<'listbox'>>>
) {
  return (
    <ComboBox {...props}>
      <Label {...LabelStories.Default.args} />
      <ComboBoxFieldGroup>
        <ComboBoxInput
          icon={<SearchIcon />}
          isBorderless
          placeholder='Type to search...'
        />
        <ComboBoxClearButton />
        <ComboBoxButton />
      </ComboBoxFieldGroup>
      <Description {...DescriptionStories.Default.args} />
    </ComboBox>
  )
}

const meta: Meta<typeof ComboBox<OptionsSchema<'listbox'>>> = {
  component: ComboBox,
  decorators: [(Story) => <div className='mx-auto w-96'>{Story()}</div>],
  title: 'Components/ComboBox',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: getMockOptions({ withIcon: true }) },
  parameters: {
    displayName: 'Default',
  },
  render: Template,
}
export const WithSections: Story = {
  args: {
    items: getMockOptions({
      withIcon: true,
      withSections: true,
    }),
  },
  parameters: {
    displayName: 'Sections',
  },
  render: Template,
}
export const IsInvalid: Story = {
  args: {
    isInvalid: true,
    items: getMockOptions({
      withIcon: true,
      withSections: true,
    }),
  },
  parameters: {
    displayName: 'Invalid',
  },
  render: Template,
}
export const IsDisabled: Story = {
  args: {
    isDisabled: true,
    items: getMockOptions({
      withIcon: true,
      withSections: true,
    }),
  },
  parameters: {
    displayName: 'Disabled',
  },
  render: Template,
}
export const IsBorderless: Story = {
  args: {
    isDisabled: true,
    items: getMockOptions({
      withIcon: true,
      withSections: true,
    }),
  },
  parameters: {
    displayName: 'Borderless',
  },
  render: Template,
}
export const DisabledKeys: Story = {
  args: {
    disabledKeys: ['carrot', 'spinach'],
    items: getMockOptions({
      withIcon: true,
      withSections: true,
    }),
  },
  parameters: {
    displayName: 'With disabled keys',
  },
  render: Template,
}
