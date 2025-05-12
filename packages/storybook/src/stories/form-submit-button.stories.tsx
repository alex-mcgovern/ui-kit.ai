import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

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
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

import * as LabelStories from './label.stories'

const schema = z.object({
    example: z.string(),
})

type FieldValues = z.input<typeof schema>

const Template = (args: ComponentProps<typeof FormSubmitButton>) => (
    <Form<FieldValues>
        className='flex flex-col'
        onSubmit={async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }}
        options={{
            resolver: zodResolver(schema),
        }}
    >
        <FormTextField
            className='mb-4'
            name='email_address'
        >
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
        <FormSubmitButton
            {...args}
            className={(rp) =>
                twMerge(
                    typeof args.className === 'function' ? args.className(rp) : args.className,
                    'ml-auto'
                )
            }
        />
    </Form>
)

const meta: Meta<typeof FormSubmitButton> = {
    component: FormSubmitButton,
    render: Template,
    title: 'FormSubmitButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Submit',
    },
    parameters: {
        displayName: 'Default',
    },
}

export const CustomLabel: Story = {
    args: {
        children: 'Save Changes',
    },
    parameters: {
        displayName: 'With Custom Label',
    },
}
