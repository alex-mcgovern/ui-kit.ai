import type { Meta, StoryObj } from '@storybook/react'
import type { OptionsSchema } from '@ui-kit.ai/components'
import type { ComponentProps } from 'react'

import { Button, Menu, MenuTrigger, Popover } from '@ui-kit.ai/components'
import { getMockOptions } from '@ui-kit.ai/mocks'
import { MenuIcon } from 'lucide-react'

function Template(args: ComponentProps<typeof Menu>) {
    return (
        <MenuTrigger>
            <Button
                className='px-2'
                isIcon
                variant='secondary'
            >
                <MenuIcon />
            </Button>
            <Popover>
                <Menu {...args} />
            </Popover>
        </MenuTrigger>
    )
}

function TemplateDefault(args: ComponentProps<typeof Menu>) {
    return (
        <MenuTrigger defaultOpen>
            <Button
                className='px-2'
                isIcon
                variant='secondary'
            >
                <MenuIcon />
            </Button>
            <Popover placement='right'>
                <Menu {...args} />
            </Popover>
        </MenuTrigger>
    )
}

const meta = {
    component: Menu,
    title: 'Menu',
} satisfies Meta<typeof Menu<OptionsSchema<'listbox'>>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: false,
        }),
    },
    parameters: {
        displayName: 'Default',
    },
    render: TemplateDefault,
}

export const WithSections: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    parameters: {
        displayName: 'Sections',
    },
    render: Template,
}
export const DisabledKeys: Story = {
    args: {
        disabledKeys: ['carrot', 'spinach'],
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    parameters: {
        displayName: 'Disabled keys',
    },
    render: Template,
}
