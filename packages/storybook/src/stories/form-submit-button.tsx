import type { Meta, StoryObj } from '@storybook/react'

import { zodResolver } from '@hookform/resolvers/zod'
import {
    FieldGroup,
    Form,
    FormSubmitButton,
    FormTextField,
    Input,
    Label,
    TextFieldClearButton,
} from '@ui-kit.ai/components'
import { AtSignIcon } from 'lucide-react'
import { z } from 'zod'

import * as LabelStories from './label.stories'

const schema = z.object({
    example: z.string(),
})

type FieldValues = z.input<typeof schema>

const Template = (args: React.ComponentProps<typeof FormSubmitButton>) => (
    <Form<FieldValues>
        onSubmit={async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }}
        options={{
            // @ts-expect-error - TODO: Infinitely deep type in form
            resolver: zodResolver(schema),
        }}
    >
        <FormTextField>
            <Label {...LabelStories.Default.args} />
            <FieldGroup>
                <Input
                    icon={<AtSignIcon />}
                    isBorderless
                    placeholder='Enter your email address'
                />
                <TextFieldClearButton />
            </FieldGroup>
        </FormTextField>
        <FormSubmitButton {...args} />
    </Form>
)

const meta: Meta<typeof FormSubmitButton> = {
    component: FormSubmitButton,
    parameters: {
        layout: 'centered',
    },
    render: Template,
    title: 'Components/Form/FormSubmitButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Submit',
    },
}

export const Loading: Story = {
    args: {
        children: 'Submit',
    },
    parameters: {
        docs: {
            description: {
                story: 'The button automatically shows a loading state while the form is submitting.',
            },
        },
    },
}

export const CustomLabel: Story = {
    args: {
        children: 'Save Changes',
    },
}
