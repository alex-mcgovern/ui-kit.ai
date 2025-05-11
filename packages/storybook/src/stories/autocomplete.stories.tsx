import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Autocomplete, Input, Menu, TextField } from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { SearchIcon } from 'lucide-react'

const meta = {
    component: Autocomplete,
    tags: ['autodocs'],
    title: 'Components/Autocomplete',
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof Autocomplete>

function Template(args: ComponentProps<typeof Autocomplete>) {
    return (
        <div className='flex w-full flex-col gap-2'>
            <Autocomplete {...args}>
                <TextField aria-label='Search'>
                    <Input
                        icon={<SearchIcon />}
                        placeholder='Search...'
                    />
                </TextField>
                <Menu items={getMockOptions({ withIcon: true })} />
            </Autocomplete>
        </div>
    )
}

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}
