import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ComponentType } from 'react'

import { Description, Label, type OptionsSchema, Select, SelectButton } from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(props: ComponentProps<typeof Select<OptionsSchema<'listbox'>>>) {
    return (
        <Select {...props}>
            <Label {...LabelStories.Default.args} />
            <SelectButton />
            <Description {...DescriptionStories.Default.args} />
        </Select>
    )
}

const meta: Meta<typeof Select<OptionsSchema<'listbox'>>> = {
    args: {
        items: getMockOptions({ withIcon: true }),
    },
    component: Select,
    render: Template,
    subcomponents: {
        SelectButton: SelectButton as ComponentType<unknown>,
    },
    title: 'Select',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: getMockOptions({ withIcon: true }),
    },
    parameters: {
        displayName: 'Default',
    },
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
    render: (props) => (
        <Select {...props}>
            <Label {...LabelStories.Default.args} />
            <SelectButton />
            <Description {...DescriptionStories.Default.args} />
        </Select>
    ),
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
        displayName: 'Disabled keys',
    },
}
