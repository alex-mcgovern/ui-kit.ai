import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@ui-kit.ai/components'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Input> = {
  args: {
    placeholder: 'This is a placeholder',
  },
  component: Input,
  decorators: [
    (Story) => (
      <div className='w-96'>
        <Story />
      </div>
    ),
  ],
  title: 'Components/Input',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <SearchIcon />,
  },
  parameters: {
    displayName: 'Default',
  },
}
export const Icon: Story = {
  args: {
    icon: <SearchIcon />,
  },
  parameters: {
    displayName: 'With Icon',
  },
}
export const Disabled: Story = {
  args: {
    ['aria-disabled']: true,
  },
  parameters: {
    displayName: 'Disabled',
  },
}
export const Invalid: Story = {
  args: {
    ['aria-invalid']: true,
  },
  parameters: {
    displayName: 'Invalid',
  },
}
export const Borderless: Story = {
  args: {
    isBorderless: true,
  },
  parameters: {
    displayName: 'Borderless',
  },
}
