import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    Description,
    FieldGroup,
    Input,
    Label,
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from '@ui-kit.ai/components'

import * as DescriptionStories from './description.stories'
import * as LabelStories from './label.stories'

function Template(props: ComponentProps<typeof TextField>) {
    return (
        <TextField {...props}>
            <Label {...LabelStories.Default.args} />
            <FieldGroup>
                <Input
                    isBorderless
                    placeholder='This is a placeholder'
                />
                <TextFieldClearButton />
                <TextFieldVisibilityButton />
                <TextFieldCopyButton />
            </FieldGroup>
            <Description {...DescriptionStories.Default.args} />
        </TextField>
    )
}

const meta: Meta<typeof TextField> = {
    component: TextField,
    render: Template,
    title: 'TextField',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
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

export const IsInvalid: Story = {
    args: {
        isInvalid: true,
    },
    parameters: {
        displayName: 'Invalid',
    },
}

export const IsReadOnly: Story = {
    args: {
        isReadOnly: true,
    },
    parameters: {
        displayName: 'Read only',
    },
}
