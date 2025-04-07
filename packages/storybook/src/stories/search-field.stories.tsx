import type { Meta, StoryObj } from '@storybook/react'

import { FieldGroup, Input, SearchField, SearchFieldClearButton } from '@ui-kit.ai/components'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const meta = {
    component: SearchField,
    tags: ['autodocs'],
    title: 'Components/SearchField',
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof SearchField>

const Template = (args: React.ComponentProps<typeof SearchField>) => (
    <SearchField {...args}>
        <FieldGroup>
            <Input
                icon={<SearchIcon />}
                isBorderless
                placeholder='Search...'
            />
            <SearchFieldClearButton />
        </FieldGroup>
    </SearchField>
)

export const Default: Story = {
    args: {
        'aria-label': 'Search',
    },
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

export const Disabled: Story = {
    args: {
        'aria-label': 'Search',
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
    render: Template,
}

export const WithDefaultValue: Story = {
    args: {
        'aria-label': 'Search',
        defaultValue: 'Initial search term',
    },
    parameters: {
        displayName: 'With default value',
    },
    render: Template,
}

export const ReadOnly: Story = {
    args: {
        'aria-label': 'Search',
        defaultValue: 'Read only search field',
        isReadOnly: true,
    },
    parameters: {
        displayName: 'Read only',
    },
    render: Template,
}

export const WithCustomWidth: Story = {
    args: {
        'aria-label': 'Search',
        className: 'w-[300px]',
    },
    parameters: {
        displayName: 'With custom width',
    },
    render: Template,
}
