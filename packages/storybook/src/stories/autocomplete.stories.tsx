import type { Meta, StoryObj } from '@storybook/react'

import {
    Autocomplete,
    FieldGroup,
    Input,
    Menu,
    SearchField,
    SearchFieldClearButton,
} from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const meta = {
    component: Autocomplete,
    tags: ['autodocs'],
    title: 'Components/Autocomplete',
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof Autocomplete>

const Template = (args: React.ComponentProps<typeof Autocomplete>) => (
    <Autocomplete {...args}>
        <SearchField aria-label='Search'>
            <FieldGroup>
                <Input
                    icon={<SearchIcon />}
                    isBorderless
                    placeholder='Search...'
                />
                <SearchFieldClearButton />
            </FieldGroup>
        </SearchField>
        <Menu items={getMockOptions({ withIcon: true })} />
    </Autocomplete>
)

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}
