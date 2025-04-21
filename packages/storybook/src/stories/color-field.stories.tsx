import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    ColorField,
    ColorSlider,
    ColorSwatch,
    DialogTrigger,
    FieldButton,
    FieldGroup,
    Input,
    Label,
    Popover,
    PopoverDialog,
} from '@ui-kit.ai/components'
import { PipetteIcon } from 'lucide-react'
import { useState } from 'react'

import * as LabelStories from './label.stories'

function Template(args: ComponentProps<typeof ColorField>) {
    return (
        <ColorField {...args}>
            <Label {...LabelStories.Default.args} />
            <Input />
        </ColorField>
    )
}

const meta = {
    component: ColorField,
    render: Template,
    title: 'Components/ColorField',
} satisfies Meta<typeof ColorField>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default color field with standard configurations.
 */
export const Default: Story = {
    args: {
        defaultValue: '#5000ff',
    },
    parameters: {
        displayName: 'Default',
    },
}

/**
 * Example of a disabled color field.
 */
export const Disabled: Story = {
    args: {
        defaultValue: '#5000ff',
        isDisabled: true,
    },
    parameters: {
        displayName: 'Disabled',
    },
}

function ThemeColorPickerStory() {
    const [value, setValue] = useState('#5000ff')

    const onChange = (v: ComponentProps<typeof ColorField>['value']) => {
        setValue(v != null ? v.toString('hex') : '#ffffff')
    }

    return (
        <div className='w-64'>
            <ColorField
                className='mb-2'
                onChange={onChange}
                value={value}
            >
                <div className='flex items-center justify-between'>
                    <Label>Accent Color</Label>
                </div>
                <FieldGroup>
                    <Input
                        icon={
                            <ColorSwatch
                                className='size-5'
                                color={value}
                            />
                        }
                        isBorderless
                    />
                    <DialogTrigger>
                        <FieldButton>
                            <PipetteIcon />
                        </FieldButton>
                        <Popover>
                            <PopoverDialog className='min-w-64'>
                                <ColorSlider
                                    channel='hue'
                                    className='mb-4'
                                    colorSpace='hsl'
                                    onChange={onChange}
                                    value={value}
                                >
                                    <Label>Hue</Label>
                                </ColorSlider>
                                <ColorSlider
                                    channel='saturation'
                                    className='mb-4'
                                    colorSpace='hsl'
                                    onChange={onChange}
                                    value={value}
                                >
                                    <Label>Saturation</Label>
                                </ColorSlider>
                                <ColorSlider
                                    channel='lightness'
                                    className='mb-4'
                                    colorSpace='hsl'
                                    onChange={onChange}
                                    value={value}
                                >
                                    <Label>Lightness</Label>
                                </ColorSlider>
                            </PopoverDialog>
                        </Popover>
                    </DialogTrigger>
                </FieldGroup>
            </ColorField>
        </div>
    )
}

/**
 * A more complex example replicating the ThemeColorPicker from the docs.
 */
export const ThemePicker: StoryObj<typeof meta> = {
    parameters: {
        displayName: 'Composed with ColorSwatch, Popover, DialogTrigger, and ColorSlider',
    },
    render: () => <ThemeColorPickerStory />,
}
