import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Button } from '@ui-kit.ai/components'
import { StarIcon } from 'lucide-react'
import * as React from 'react'

const VARIANTS = ['primary', 'secondary', 'tertiary'] as const satisfies Array<
  ComponentProps<typeof Button>['variant']
>

function Template(args: Parameters<typeof Button>[0]) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {VARIANTS.map((variant) => (
        <Button
          key={variant}
          {...args}
          className='capitalize'
          variant={variant}
        >
          {args.children ?? variant}
        </Button>
      ))}
    </div>
  )
}

const meta = {
  component: Button,
  render: Template,
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    displayName: 'Default',
  },
}
/**
 * The `isDestructive` prop will style the button in red, to denote a
 * potentially destructive action the user should consider carefully.
 */
export const Destructive: Story = {
  args: {
    isDestructive: true,
  },
  parameters: {
    displayName: 'Destructive',
  },
}
/**
 * The `isDisabled` prop will "gray out" the button, and prevent focus and interaction.
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    displayName: 'Disabled',
  },
}
/**
 * The `isIcon` prop will make the button square. Use it when you are only
 * passing an icon as children.
 *
 * Note that you should set an `aria-label` to give the button an accessible
 * name when you do this.
 */
export const IconButton: Story = {
  args: {
    'aria-label': 'button',
    children: <StarIcon />,
    isIcon: true,
  },
  parameters: {
    displayName: 'Icon button',
  },
}
/**
 * The `slotLeft` prop accepts a react node rendered on the left side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotLeft: Story = {
  args: {
    slotLeft: <StarIcon />,
  },
  parameters: {
    displayName: 'Slot (left)',
  },
}
/**
 * The `slotRight` prop accepts a react node rendered on the right side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotRight: Story = {
  args: {
    slotRight: <StarIcon />,
  },
  parameters: {
    displayName: 'Slot (right)',
  },
}
