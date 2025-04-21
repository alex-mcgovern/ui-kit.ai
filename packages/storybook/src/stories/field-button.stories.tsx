import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { FieldButton } from '@ui-kit.ai/components'
import { CheckIcon, ClipboardCopyIcon, EyeIcon, XIcon } from 'lucide-react'

function Template(args: ComponentProps<typeof FieldButton>) {
    return (
        <div className='border-low-contrast flex items-center gap-2 rounded border p-2'>
            <FieldButton {...args} />
        </div>
    )
}

const meta = {
    component: FieldButton,
    render: Template,
    title: 'Components/FieldButton',
} satisfies Meta<typeof FieldButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * FieldButton is designed to be used inside field components to provide additional
 * functionality like clearing, copying, or toggling visibility.
 */
export const Default: Story = {
    args: {
        'aria-label': 'Default field button',
        children: <XIcon />,
    },
    parameters: {
        displayName: 'Default',
    },
}

/**
 * Use FieldButton with a clear icon to allow users to clear the field contents.
 */
export const Clear: Story = {
    args: {
        'aria-label': 'Clear field',
        children: <XIcon />,
    },
    parameters: {
        displayName: 'Clear Button',
    },
}

/**
 * Use FieldButton with an eye icon to toggle visibility of sensitive field contents.
 */
export const Visibility: Story = {
    args: {
        'aria-label': 'Toggle visibility',
        children: <EyeIcon />,
    },
    parameters: {
        displayName: 'Visibility Toggle',
    },
}

/**
 * Use FieldButton with a clipboard icon to copy field contents.
 */
export const Copy: Story = {
    args: {
        'aria-label': 'Copy to clipboard',
        children: <ClipboardCopyIcon />,
    },
    parameters: {
        displayName: 'Copy Button',
    },
}

/**
 * The `isDisabled` prop will "gray out" the button and prevent interaction.
 */
export const Disabled: Story = {
    args: {
        'aria-label': 'Disabled field button',
        children: <CheckIcon />,
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
}

/**
 * Example showing how the FieldButton appears in an invalid field state.
 */
export const InvalidFieldContext: Story = {
    args: {
        'aria-label': 'Field button in invalid context',
        children: <XIcon />,
    },
    parameters: {
        displayName: 'In Invalid Field',
    },
    render: (args) => (
        <div className='border-error group invalid flex items-center gap-2 rounded border p-2'>
            <FieldButton {...args} />
        </div>
    ),
}
