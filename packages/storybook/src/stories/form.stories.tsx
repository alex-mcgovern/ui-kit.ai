import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@ui-kit.ai/components'
import {
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
    Description,
    FieldGroup,
    Form,
    FormCheckboxGroup,
    FormComboBox,
    FormSubmitButton,
    FormTextField,
    Input,
    Label,
    TextFieldClearButton,
} from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { AtSignIcon, GlobeIcon } from 'lucide-react'
import { z } from 'zod'

import * as DescriptionStories from './description.stories'

const communicationPreferencesSchema = z.enum(['account_updates', 'newsletter', 'advertising'])

const schema = z.object({
    communication_preference: z.array(communicationPreferencesSchema),
    country_of_birth: z.string().nonempty(),
    country_of_residence: z.string().nonempty(),
    email: z.string().email().nonempty(),
    immigration_status: z.enum(['citizen', 'permanent_resident', 'visa_holder']),
})

/** You can infer the type of your field values from the schema, and pass it as
 * a type param to the Form component. This adds the correct type to argument
 * provided to the `onSubmit` callback. */
type FieldValues = z.infer<typeof schema>

/** You can dynamically create an enum from your zod schema, which can be used
 * to name fields and ensure that they stay in sync with the schema. */
const FIELD_NAME = schema.keyof().Enum
// const IMMIGRATION_STATUS =
//     schema.shape.immigration_status.Enum;
const COMMUNICATION_PREFERENCE = communicationPreferencesSchema.Enum

function Template(props: ComponentProps<typeof Form<FieldValues>>) {
    return (
        <Form<FieldValues>
            {...props}
            onError={(errors) => {
                alert(`Errors:\n\n${JSON.stringify(errors, null, 4)}`)
            }}
            options={{
                resolver: zodResolver(schema),
            }}
        >
            <FormTextField
                className='mb-4'
                isRequired
                name={FIELD_NAME.email}
                type='email'
            >
                <Label>Email address</Label>
                <FieldGroup>
                    <Input
                        icon={<AtSignIcon />}
                        isBorderless
                        placeholder='Enter your email address'
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>

            {/* <FormSelect
                className='mb-4'
                items={getMockOptions({
                    withIcon: true,
                })}
                name={FIELD_NAME.country_of_birth}
            >
                <Label>Country of birth (Select)</Label>
                <SelectButton slotLeft={<GlobeIcon />} />
            </FormSelect> */}

            <FormComboBox
                className='mb-4'
                items={getMockOptions()}
                name={FIELD_NAME.country_of_residence}
            >
                <Label>Country of residence</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput
                        icon={<GlobeIcon />}
                        isBorderless
                        placeholder='Type to search...'
                    />
                    <ComboBoxClearButton />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </FormComboBox>

            <FormCheckboxGroup
                className='mb-4'
                defaultValue={[COMMUNICATION_PREFERENCE.account_updates]}
                name={FIELD_NAME.communication_preference}
            >
                <Label>Communication preferences</Label>
                <Checkbox
                    description='Necessary emails about your account & security.'
                    isDisabled
                    isRequired
                    label='Account updates'
                    value='account-updates'
                />
                <Checkbox
                    description='Max 1 email per month with updates from our team.'
                    label='Newsletter'
                    value='newsletter'
                />
                <Checkbox
                    description="Deals, discounts and suggestions we think you'll love."
                    label='Promotions and Offers'
                    value='promotions'
                />
                <Description {...DescriptionStories.Default.args} />
            </FormCheckboxGroup>

            <FormSubmitButton />
        </Form>
    )
}

const meta: Meta<typeof Form<FieldValues>> = {
    // args: {
    //     onError: (errors) => {
    //         alert(`Errors:\n\n${JSON.stringify(errors, null, 4)}`)
    //     },
    //     onSubmit: async (data) => {
    //         await new Promise((resolve) => setTimeout(resolve, 1_000))
    //         alert(`Submitted:\n\n${JSON.stringify(data, null, 4)}`)
    //     },
    //     options: {
    //         resolver: zodResolver(schema),
    //     },
    // },
    component: Form,
    title: 'Form',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        // @ts-expect-error - TODO: Fix this

        onSubmit: async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 1_000))
            alert(`Submitted:\n\n${JSON.stringify(data, null, 4)}`)
        },
        // options: {
        //     resolver: zodResolver(schema),
        // },
    },
    parameters: {
        displayName: 'Default',
    },
    // @ts-expect-error - TODO: Fix this
    render: Template,
}
