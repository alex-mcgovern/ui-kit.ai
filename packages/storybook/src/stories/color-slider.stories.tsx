import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { ColorSlider } from '@ui-kit.ai/components'

function Template(args: ComponentProps<typeof ColorSlider>) {
    return (
        <div className='flex w-64 flex-col gap-8'>
            <ColorSlider {...args} />
        </div>
    )
}

const meta = {
    component: ColorSlider,
    render: Template,
    title: 'Components/ColorSlider',
} satisfies Meta<typeof ColorSlider>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default color slider with standard configurations.
 */
export const Default: Story = {
    args: {
        channel: 'hue',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Default',
    },
}

/**
 * Slider for adjusting the saturation of a color.
 */
export const SaturationSlider: Story = {
    args: {
        channel: 'saturation',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Saturation',
    },
}

/**
 * Slider for adjusting the brightness/value of a color.
 */
export const BrightnessSlider: Story = {
    args: {
        channel: 'brightness',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Brightness',
    },
}

/**
 * Slider for adjusting the red channel of a color.
 */
export const RedChannelSlider: Story = {
    args: {
        channel: 'red',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Red Channel',
    },
}

/**
 * Slider for adjusting the green channel of a color.
 */
export const GreenChannelSlider: Story = {
    args: {
        channel: 'green',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Green Channel',
    },
}

/**
 * Slider for adjusting the blue channel of a color.
 */
export const BlueChannelSlider: Story = {
    args: {
        channel: 'blue',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Blue Channel',
    },
}

/**
 * Slider for adjusting the alpha (transparency) of a color.
 */
export const AlphaSlider: Story = {
    args: {
        channel: 'alpha',
        defaultValue: 'rgba(80, 0, 255, 0.5)',
    },
    parameters: {
        displayName: 'Alpha',
    },
}

/**
 * Example showing a disabled color slider.
 */
export const DisabledSlider: Story = {
    args: {
        channel: 'hue',
        defaultValue: '#5000ff',
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
}

/**
 * Custom width example for the color slider.
 */
export const CustomWidth: Story = {
    args: {
        channel: 'hue',
        className: 'w-96',
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Custom Width',
    },
}
