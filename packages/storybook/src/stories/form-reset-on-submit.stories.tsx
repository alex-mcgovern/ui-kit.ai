import type { Meta, StoryObj } from '@storybook/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormResetOnSubmit, FormTextField } from '@ui-kit.ai/components'
import { z } from 'zod'

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
})

type FieldValues = z.infer<typeof schema>

function Template() {
    return (
        <Form<FieldValues>
            onSubmit={async (data) => {
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000))
                alert(`Submitted: ${JSON.stringify(data, null, 2)}`)
            }}
            options={{
                resolver: zodResolver(schema),
            }}
        >
            <FormTextField
                className='mb-4'
                name='name'
            >
                <input placeholder='Enter your name' />
            </FormTextField>

            <button type='submit'>Submit</button>

            {/* The FormResetOnSubmit component will clear the form after successful submission */}
            <FormResetOnSubmit />
        </Form>
    )
}

const meta = {
    component: FormResetOnSubmit,
    render: Template,
    title: 'FormResetOnSubmit',
} satisfies Meta<typeof FormResetOnSubmit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}
