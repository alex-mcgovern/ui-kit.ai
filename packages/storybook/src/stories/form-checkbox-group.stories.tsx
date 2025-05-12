import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Checkbox, Description, Form, FormCheckboxGroup, Label } from '@ui-kit.ai/components'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(props: ComponentProps<typeof FormCheckboxGroup>) {
    return (
        <Form onSubmit={() => {}}>
            <FormCheckboxGroup {...props}>
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
            </FormCheckboxGroup>
        </Form>
    )
}

const meta: Meta<typeof FormCheckboxGroup> = {
    component: FormCheckboxGroup,
    title: 'FormCheckboxGroup',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'preferences',
    },
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

export const Disabled: Story = {
    args: {
        isDisabled: true,
        name: 'preferences',
    },
    parameters: {
        displayName: 'Disabled',
    },
    render: Template,
}

export const Invalid: Story = {
    args: {
        isInvalid: true,
        name: 'preferences',
    },
    parameters: {
        displayName: 'Invalid',
    },
    render: Template,
}
