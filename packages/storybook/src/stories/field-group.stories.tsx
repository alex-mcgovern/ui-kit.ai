import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    FieldGroup,
    Input,
    Kbd,
    SearchField,
    Select,
    SelectButton,
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from '@ui-kit.ai/components'
import { SearchIcon } from 'lucide-react'

const meta: Meta<typeof FieldGroup> = {
    args: {},
    component: FieldGroup,
    title: 'Components/FieldGroup',
}

export default meta
type Story = StoryObj<typeof meta>

function DefaultTemplate(props: ComponentProps<typeof FieldGroup>) {
    return (
        <FieldGroup {...props}>
            <TextField aria-label='City'>
                <Input
                    isBorderless
                    placeholder='Enter your city...'
                />
            </TextField>
            <TextFieldClearButton />
            <TextFieldVisibilityButton />
            <TextFieldCopyButton />
        </FieldGroup>
    )
}

function SearchFieldKbdTemplate(props: ComponentProps<typeof FieldGroup>) {
    return (
        <FieldGroup {...props}>
            <SearchField aria-label='Search'>
                <Input
                    icon={<SearchIcon />}
                    isBorderless
                    placeholder='Search...'
                />
            </SearchField>
            <Kbd className='mr-1.5'>/</Kbd>
        </FieldGroup>
    )
}

function SelectTextFieldTemplate(props: ComponentProps<typeof FieldGroup>) {
    return (
        <FieldGroup {...props}>
            <Select
                aria-label='Country'
                className='border-r-tint-dark border-r'
                items={[
                    {
                        id: 'ireland',
                        textValue: 'Ireland',
                    },
                    {
                        id: 'united-kingdom',
                        textValue: 'United Kingdom',
                    },
                ]}
                name='country'
            >
                {(rp) => (
                    <SelectButton
                        {...rp}
                        isBorderless
                    />
                )}
            </Select>

            <TextField aria-label='City'>
                <Input
                    isBorderless
                    placeholder='Enter your city...'
                />
            </TextField>
        </FieldGroup>
    )
}

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: DefaultTemplate,
}

export const SelectTextField: Story = {
    parameters: {
        displayName: 'Select + TextField',
    },
    render: SelectTextFieldTemplate,
}

export const TextFieldKbd: Story = {
    parameters: {
        displayName: 'SearchField + Kbd',
    },
    render: SearchFieldKbdTemplate,
}
