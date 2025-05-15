import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Breadcrumb, Breadcrumbs } from '@ui-kit.ai/components'

function Template(props: ComponentProps<typeof Breadcrumbs>) {
    return (
        <Breadcrumbs {...props}>
            <Breadcrumb href='#'>Home</Breadcrumb>
            <Breadcrumb href='#'>Products</Breadcrumb>
            <Breadcrumb>Current Page</Breadcrumb>
        </Breadcrumbs>
    )
}

const meta = {
    component: Breadcrumbs,
    render: Template,
    title: 'Breadcrumbs',
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default breadcrumbs display a hierarchy of links to the current page.
 * The last item is typically not a link and represents the current page.
 */
export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

/**
 * Breadcrumbs can be disabled, which prevents interaction with the links.
 */
export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
}

/**
 * Custom breadcrumb items can be created by providing different content to the Breadcrumb components.
 */
export const CustomItems: Story = {
    parameters: {
        displayName: 'Custom Items',
    },
    render: () => (
        <Breadcrumbs>
            <Breadcrumb href='#'>
                <span className='flex items-center gap-1'>
                    <span className='text-blue-500'>🏠</span>
                    <span>Home</span>
                </span>
            </Breadcrumb>
            <Breadcrumb href='#'>
                <span className='flex items-center gap-1'>
                    <span className='text-green-500'>📦</span>
                    <span>Products</span>
                </span>
            </Breadcrumb>
            <Breadcrumb>
                <span className='flex items-center gap-1'>
                    <span className='text-purple-500'>📄</span>
                    <span>Current Page</span>
                </span>
            </Breadcrumb>
        </Breadcrumbs>
    ),
}

/**
 * A more complex breadcrumb example with additional items.
 */
export const LongPath: Story = {
    parameters: {
        displayName: 'Long Path',
    },
    render: () => (
        <Breadcrumbs>
            <Breadcrumb href='#'>Home</Breadcrumb>
            <Breadcrumb href='#'>Category</Breadcrumb>
            <Breadcrumb href='#'>Subcategory</Breadcrumb>
            <Breadcrumb href='#'>Section</Breadcrumb>
            <Breadcrumb>Current Page</Breadcrumb>
        </Breadcrumbs>
    ),
}
