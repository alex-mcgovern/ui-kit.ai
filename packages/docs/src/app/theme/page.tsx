'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import {
    CodeInline,
    ColorField,
    ColorSlider,
    ColorSwatch,
    DialogTrigger,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    FieldButton,
    FieldGroup,
    Heading,
    Input,
    Label,
    Popover,
    PopoverDialog,
    Table,
} from '@ui-kit.ai/components'
import { ColorPalette, DEFAULT_COLOR_PALETTE_INPUT } from '@ui-kit.ai/theme'
import { PipetteIcon } from 'lucide-react'
import { type ComponentProps, type Dispatch, type SetStateAction, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Sidebar } from '../../components/sidebar'
import { ColorTableBg, ColorTableBorder, ColorTableText } from './components/color-table'
import { Demo } from './components/demo'

export default function Page() {
    const [accent, setAccent] = useState(DEFAULT_COLOR_PALETTE_INPUT.accent)
    const [error, setError] = useState(DEFAULT_COLOR_PALETTE_INPUT.error)
    const [success, setSuccess] = useState(DEFAULT_COLOR_PALETTE_INPUT.success)
    const [warning, setWarning] = useState(DEFAULT_COLOR_PALETTE_INPUT.warning)
    const [info, setInfo] = useState(DEFAULT_COLOR_PALETTE_INPUT.accent)

    const palette = new ColorPalette({
        error: error,
        accent: accent,
        success: success,
        warning: warning,
    })

    // const cssVars = palette.cssVars()
    const css = palette.css({
        overrideTwColors: true,
        selector: ':root',
    })

    return (
        <div className='grid grid-cols-[1fr_3fr] gap-2 min-h-screen'>
            <style
                dangerouslySetInnerHTML={{
                    __html: css,
                }}
            />
            <Sidebar>
                <Heading level={3}>Base colors</Heading>

                <ThemeColorPicker
                    label='Accent'
                    setValue={setAccent}
                    value={accent}
                />
                <ThemeColorPicker
                    label='Error'
                    setValue={setError}
                    value={error}
                />
                <ThemeColorPicker
                    label='Success'
                    setValue={setSuccess}
                    value={success}
                />
                <ThemeColorPicker
                    label='Warning'
                    setValue={setWarning}
                    value={warning}
                />

                <Heading level={3}>Derived colors</Heading>

                <p className='text-sm mb-4'>
                    Below are the colors derived from your inputs and the corresponding Tailwind
                    class names you can use to access them in your components.
                </p>

                <Heading level={4}>Background</Heading>
                <ColorTableBg palette={palette.palette(palette.grayHsl, palette.accentHsl)} />

                <Heading level={4}>Text</Heading>
                <ColorTableText palette={palette.palette(palette.grayHsl, palette.accentHsl)} />

                <Heading level={4}>Border</Heading>
                <ColorTableBorder palette={palette.palette(palette.grayHsl, palette.accentHsl)} />
            </Sidebar>
            <main className='w-full p-4 min-w-0 mx-auto'>
                <section>
                    <Demo />

                    {/* <Code
          code={css}
          component={}
          language={'css'}
        /> */}
                </section>
            </main>
        </div>
    )
}

function ThemeColorPicker({
    value,
    setValue: setValueHex,
    label,
}: {
    label: string
    setValue: Dispatch<SetStateAction<string>>
    value?: ComponentProps<typeof ColorField>['value']
}) {
    const onChange = (v: ComponentProps<typeof ColorField>['value']) => {
        setValueHex(v != null ? v.toString('hex') : '#ffffff')
    }

    return (
        <ColorField
            className='mb-2 grid grid-cols-[2fr_3fr] gap-2'
            onChange={onChange}
            value={value}
        >
            <Label>{label}</Label>
            <FieldGroup>
                <Input
                    icon={
                        <ColorSwatch
                            className='size-5'
                            color={value ?? undefined}
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
                                value={value ?? undefined}
                            >
                                <Label>Hue</Label>
                            </ColorSlider>
                            <ColorSlider
                                channel='saturation'
                                className='mb-4'
                                colorSpace='hsl'
                                onChange={onChange}
                                value={value ?? undefined}
                            >
                                <Label>Saturation</Label>
                            </ColorSlider>
                            <ColorSlider
                                channel='lightness'
                                className='mb-4'
                                colorSpace='hsl'
                                onChange={onChange}
                                value={value ?? undefined}
                            >
                                <Label>Lightness</Label>
                            </ColorSlider>
                        </PopoverDialog>
                    </Popover>
                </DialogTrigger>
            </FieldGroup>
        </ColorField>
    )
}
