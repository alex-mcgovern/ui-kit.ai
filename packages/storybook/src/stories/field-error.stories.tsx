import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { FieldError, Form, FormTextField, Input, Label } from '@ui-kit.ai/components'

function Template(_args: ComponentProps<typeof FieldError>) {
    return (
        <Form
            onSubmit={() => {}}
            options={{
                errors: {
                    name: {
                        message: 'Full name is required',
                        type: 'invalid_type',
                    },
                },
            }}
        >
            <FormTextField name='name'>
                <Label className='opacity-50'>Full Name</Label>
                <Input
                    className='opacity-50'
                    placeholder='e.g. John Doe'
                />
            </FormTextField>
        </Form>
    )
}

const meta = {
    component: FieldError,
    title: 'FieldError',
} satisfies Meta<typeof FieldError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'This field is required',
    },
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

export const LongMessage: Story = {
    args: {
        children:
            'This is a longer error message that might wrap to multiple lines. It should still be readable and not cause any layout issues.',
    },
    parameters: {
        displayName: 'Long Message',
    },
    render: Template,
}
