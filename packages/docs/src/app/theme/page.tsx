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
} from '@ui-kit.ai/components'
import { ColorPalette, DEFAULT_COLOR_PALETTE_INPUT } from '@ui-kit.ai/theme'
import { PipetteIcon } from 'lucide-react'
import { type ComponentProps, type Dispatch, type SetStateAction, useState } from 'react'

import { Sidebar } from '../../components/sidebar'
import { Demo } from './components/demo'

type FullPalette = ReturnType<ColorPalette['palette']>

export default function Page() {
    const [accent, setAccent] = useState(DEFAULT_COLOR_PALETTE_INPUT.accent)
    const [error, setError] = useState(DEFAULT_COLOR_PALETTE_INPUT.error)
    const [success, setSuccess] = useState(DEFAULT_COLOR_PALETTE_INPUT.success)
    const [warning, setWarning] = useState(DEFAULT_COLOR_PALETTE_INPUT.warning)

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
        useTwUtilities: false,
    })

    return (
        <div className='grid grid-cols-[1fr_3fr] gap-2 min-h-screen'>
            <style
                dangerouslySetInnerHTML={{
                    __html: css,
                }}
            />
            <Sidebar>
                <Heading level={3}>Color</Heading>

                <ThemeColorPicker
                    label='Accent'
                    setValue={setAccent}
                    value={accent}
                />
                <DerivedColors colors={palette.palette(palette.grayHsl, palette.accentHsl)} />
                <ThemeColorPicker
                    label='Error'
                    setValue={setError}
                    value={error}
                />
                <DerivedColors colors={palette.palette(palette.errorHsl, palette.errorHsl)} />
                <ThemeColorPicker
                    label='Success'
                    setValue={setSuccess}
                    value={success}
                />
                <DerivedColors colors={palette.palette(palette.successHsl, palette.successHsl)} />
                <ThemeColorPicker
                    label='Warning'
                    setValue={setWarning}
                    value={warning}
                />
                <DerivedColors colors={palette.palette(palette.warningHsl, palette.warningHsl)} />
            </Sidebar>
            <main className='w-full px-4 min-w-0 mx-auto'>
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

function DerivedColors({ colors }: { colors: FullPalette }) {
    return (
        <Disclosure>
            <DisclosureButton className='!h-6 !pl-2.5'>Derived colors</DisclosureButton>
            <DisclosurePanel>
                <div>
                    {Object.entries(colors).map(([key, value]) => (
                        <div
                            className='px-2 flex items-center mb-2 gap-1 text-xs'
                            key={key}
                        >
                            <ColorSwatch
                                className='size-5'
                                color={value[0]}
                            />
                            <ColorSwatch
                                className='size-5'
                                color={value[1]}
                            />
                            <CodeInline language='plaintext'>{`--color-${key}`}</CodeInline>
                        </div>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
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
            className='mb-2'
            onChange={onChange}
            value={value}
        >
            <div className='flex items-center justify-between'>
                <Label>{label}</Label>
                {/* <SliderOutput /> */}
            </div>
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
