import type { Meta, StoryObj } from '@storybook/react'

import {
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
    Description,
    Form,
    FormComboBox,
    Label,
    type OptionsSchema,
} from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { SearchIcon } from 'lucide-react'
import React, { type ComponentProps } from 'react'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(props: ComponentProps<typeof FormComboBox<OptionsSchema<'listbox'>>>) {
    return (
        <Form onSubmit={() => {}}>
            <FormComboBox {...props}>
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
            </FormComboBox>
        </Form>
    )
}

const meta: Meta<typeof FormComboBox<OptionsSchema<'listbox'>>> = {
    component: FormComboBox,
    decorators: [(Story) => <div className='mx-auto w-96'>{Story()}</div>],
    title: 'Components/FormComboBox',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: getMockOptions({ withIcon: true }),
        name: 'combobox',
    },
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
        name: 'combobox',
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
        name: 'combobox',
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
        name: 'combobox',
    },
    parameters: {
        displayName: 'Disabled',
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
        name: 'combobox',
    },
    parameters: {
        displayName: 'With disabled keys',
    },
    render: Template,
}
