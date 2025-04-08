import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Checkbox, Description, FormCheckboxGroup, Label } from '@ui-kit.ai/components'
import { Form } from '@ui-kit.ai/components'
import React from 'react'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(props: ComponentProps<typeof FormCheckboxGroup>) {
    return (
        <Form onSubmit={() => {}}>
            <FormCheckboxGroup
                name='preferences'
                {...props}
            >
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
    decorators: [(Story) => <div className='mx-auto w-96'>{Story()}</div>],
    title: 'Forms/FormCheckboxGroup',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
    render: Template,
}

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
    parameters: {
        displayName: 'Invalid',
    },
    render: Template,
}
