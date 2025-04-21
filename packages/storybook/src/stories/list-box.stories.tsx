import type { Meta, StoryObj } from '@storybook/react'

import { ListBox, type OptionsSchema } from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'

const meta = {
    component: ListBox,
    title: 'Components/ListBox',
} satisfies Meta<typeof ListBox<OptionsSchema<'listbox'>>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
    parameters: {
        displayName: 'Default',
    },
}
export const Sections: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    parameters: {
        displayName: 'Sections',
    },
}
export const Invalid: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    parameters: {
        displayName: 'Invalid',
    },
}
export const IsDisabled: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    parameters: {
        displayName: 'Disabled',
    },
}
export const IsBorderless: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    parameters: {
        displayName: 'Borderless',
    },
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
}
