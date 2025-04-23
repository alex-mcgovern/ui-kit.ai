import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { ColorSlider } from '@ui-kit.ai/components'

function HSLATemplate(args: ComponentProps<typeof ColorSlider>) {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <ColorSlider
                {...args}
                channel='hue'
            />
            <ColorSlider
                {...args}
                channel='saturation'
            />
            <ColorSlider
                {...args}
                channel='lightness'
            />
            <ColorSlider
                {...args}
                channel='alpha'
            />
        </div>
    )
}

function RGBATemplate(args: ComponentProps<typeof ColorSlider>) {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <ColorSlider
                {...args}
                channel='red'
            />
            <ColorSlider
                {...args}
                channel='green'
            />
            <ColorSlider
                {...args}
                channel='blue'
            />
            <ColorSlider
                {...args}
                channel='alpha'
            />
        </div>
    )
}

function Template(args: ComponentProps<typeof ColorSlider>) {
    return <ColorSlider {...args} />
}

const meta = {
    component: ColorSlider,
    title: 'Components/ColorSlider',
} satisfies Meta<typeof ColorSlider>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default color slider with standard configurations.
 */
export const Default: Story = {
    args: {
        channel: 'blue',
        defaultValue: '#5B5BD6',
    },
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

/**
 * Slider for adjusting the saturation of a color.
 */
export const RGBA: Story = {
    // @ts-expect-error - intentionally omitting channel
    args: {
        defaultValue: '#5B5BD6',
    },
    parameters: {
        displayName: 'RGBA',
    },
    render: RGBATemplate,
}

/**
 * Slider for adjusting the brightness/value of a color.
 */
export const HSLA: Story = {
    args: {
        channel: 'brightness',
        defaultValue: 'hsl(240, 60%, 60%)',
    },
    parameters: {
        displayName: 'HSLA',
    },
    render: HSLATemplate,
}

/**
 * Example showing a disabled color slider.
 */
export const DisabledSlider: Story = {
    args: {
        channel: 'alpha',
        defaultValue: '#5B5BD6',
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
}
