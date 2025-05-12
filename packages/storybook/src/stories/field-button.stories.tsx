import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { FieldButton } from '@ui-kit.ai/components'
import { ClipboardCopyIcon, EyeIcon, XIcon } from 'lucide-react'

function Template(args: ComponentProps<typeof FieldButton>) {
    return (
        <div className='flex gap-2'>
            <FieldButton
                {...args}
                aria-label='Clear field'
            >
                <XIcon />
            </FieldButton>
            <FieldButton
                {...args}
                aria-label='Toggle visibility'
            >
                <EyeIcon />
            </FieldButton>
            <FieldButton
                {...args}
                aria-label='Copy to clipboard'
            >
                <ClipboardCopyIcon />
            </FieldButton>
        </div>
    )
}

const meta = {
    component: FieldButton,
    title: 'FieldButton',
} satisfies Meta<typeof FieldButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * FieldButton is designed to be used inside field components to provide additional
 * functionality like clearing, copying, or toggling visibility.
 */
export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

/**
 * The `isDisabled` prop will "gray out" the button and prevent interaction.
 */
export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
    render: Template,
}

/**
 * Example showing how the FieldButton appears in an invalid field state.
 */
export const InvalidFieldContext: Story = {
    parameters: {
        displayName: 'In Invalid Field',
    },
    render: (args) => (
        <div className='error'>
            <Template {...args} />
        </div>
    ),
}
