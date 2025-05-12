import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { ColorSwatch } from '@ui-kit.ai/components'
import { DEFAULT_COLOR_PALETTE_INPUT } from '@ui-kit.ai/theme'

function Template(args: ComponentProps<typeof ColorSwatch>) {
    return (
        <div className='flex items-center gap-2'>
            {Object.entries(DEFAULT_COLOR_PALETTE_INPUT).map(([name, color]) => (
                <ColorSwatch
                    {...args}
                    color={color}
                    key={name}
                />
            ))}
        </div>
    )
}

const meta = {
    component: ColorSwatch,
    render: Template,
    title: 'ColorSwatch',
} satisfies Meta<typeof ColorSwatch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
}

export const CustomSize: Story = {
    args: {
        className: 'size-16',
    },
    parameters: {
        displayName: 'Custom Size',
    },
}

export const WithBorder: Story = {
    args: {
        className: 'border-2 border-black',
    },
    parameters: {
        displayName: 'With Custom Border',
    },
}
