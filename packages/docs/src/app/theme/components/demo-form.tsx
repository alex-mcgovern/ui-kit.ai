'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import {
    Button,
    Checkbox,
    CheckboxGroup,
    ComboBox,
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
    FieldGroup,
    Input,
    Label,
    Select,
    SelectButton,
    TextField,
    TextFieldClearButton,
} from '@ui-kit.ai/components'
import { GlobeIcon, MailIcon } from 'lucide-react'

import { DemoContainer } from './demo-container'

export function DemoForm() {
    return (
        <DemoContainer>
            <div className='grid grid-cols-2 gap-4'>
                <TextField
                    className='mb-4'
                    name='first_name'
                >
                    <Label>First name</Label>
                    <FieldGroup data-focus-within={true}>
                        <Input
                            isBorderless
                            placeholder='e.g. John'
                        />
                        <TextFieldClearButton />
                    </FieldGroup>
                </TextField>

                <TextField
                    className='mb-4'
                    name='last_name'
                >
                    <Label>Last name</Label>
                    <FieldGroup data-focus-within={true}>
                        <Input
                            isBorderless
                            placeholder='e.g. Doe'
                        />
                        <TextFieldClearButton />
                    </FieldGroup>
                </TextField>
            </div>

            <TextField
                className='mb-4'
                isInvalid
                name='email'
                type='email'
            >
                <Label>Email address</Label>
                <FieldGroup>
                    <Input
                        icon={<MailIcon />}
                        isBorderless
                        placeholder='e.g. john@doe.com'
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </TextField>

            <Select
                className='mb-4'
                items={[
                    {
                        id: 'ireland',
                        textValue: 'Ireland',
                    },
                ]}
                name='country_of_birth'
            >
                <Label>Country of birth (Select)</Label>
                <SelectButton slotLeft={<GlobeIcon />} />
            </Select>

            <ComboBox
                className='mb-4'
                items={[
                    {
                        id: 'ireland',
                        textValue: 'Ireland',
                    },
                ]}
                name='country_of_residence'
            >
                <Label>Country of residence (ComboBox)</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput
                        icon={<GlobeIcon />}
                        isBorderless
                        placeholder='Type to search...'
                    />
                    <ComboBoxClearButton />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </ComboBox>

            <CheckboxGroup
                className='mb-4'
                defaultValue={['account-updates']}
                name='communication_preference'
            >
                <Label>Communication preferences</Label>
                <Checkbox
                    description='Necessary emails about your account & security.'
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
            </CheckboxGroup>
            <Button>Submit</Button>
        </DemoContainer>
    )
}
