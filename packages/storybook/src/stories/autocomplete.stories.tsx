import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

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

const meta = {
    component: Autocomplete,
    tags: ['autodocs'],
    title: 'Components/Autocomplete',
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof Autocomplete>

const Template = (args: ComponentProps<typeof Autocomplete>) => (
    <div className='flex flex-col gap-2 w-full'>
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
    </div>
)

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}
