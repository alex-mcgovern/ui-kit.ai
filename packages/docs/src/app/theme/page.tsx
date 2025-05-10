'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import {
    ColorField,
    ColorSlider,
    ColorSwatch,
    DialogTrigger,
    FieldButton,
    FieldGroup,
    Heading,
    Input,
    Label,
    type OptionsSchema,
    Popover,
    PopoverDialog,
    Select,
    SelectButton,
} from '@ui-kit.ai/components'
import { ColorPalette, DEFAULT_COLOR_PALETTE_INPUT } from '@ui-kit.ai/theme'
import { PipetteIcon } from 'lucide-react'
import { type ComponentProps, type Dispatch, type SetStateAction, useState } from 'react'

import { Sidebar } from '../../components/sidebar'
import { ColorTableBg, ColorTableBorder, ColorTableText } from './components/color-table'
import { Demo } from './components/demo'

type Palette = {
    accent: string
    error: string
    success: string
    warning: string
}

type Preset = 'coffee' | 'indigo' | 'muted' | 'shadcn'

export default function Page() {
    const [accent, setAccent] = useState(DEFAULT_COLOR_PALETTE_INPUT.accent)
    const [error, setError] = useState(DEFAULT_COLOR_PALETTE_INPUT.error)
    const [success, setSuccess] = useState(DEFAULT_COLOR_PALETTE_INPUT.success)
    const [warning, setWarning] = useState(DEFAULT_COLOR_PALETTE_INPUT.warning)

    // const [preset, setPreset] = useState<Palette>({
    //     accent: DEFAULT_COLOR_PALETTE_INPUT.accent,
    //     error: DEFAULT_COLOR_PALETTE_INPUT.error,
    //     success: DEFAULT_COLOR_PALETTE_INPUT.success,
    //     warning: DEFAULT_COLOR_PALETTE_INPUT.warning,
    // })

    const onPresetChange = (palette: Palette) => {
        setAccent(palette.accent)
        setError(palette.error)
        setSuccess(palette.success)
        setWarning(palette.warning)
    }

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
                <section className='my-8'>
                    <Heading
                        className='text-mid'
                        level={3}
                    >
                        Theme
                    </Heading>
                </section>

                <ThemePresetPicker
                    label={''}
                    setValue={onPresetChange}
                />
                <Heading
                    className='text-mid'
                    level={4}
                >
                    Base colors
                </Heading>

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

                <section className='my-8'>
                    <Heading
                        className='text-mid'
                        level={4}
                    >
                        Background
                    </Heading>
                    <ColorTableBg palette={palette.palette(palette.grayHsl, palette.accentHsl)} />
                </section>

                <section className='my-8'>
                    <Heading
                        className='text-mid'
                        level={4}
                    >
                        Text
                    </Heading>
                    <ColorTableText palette={palette.palette(palette.grayHsl, palette.accentHsl)} />
                </section>

                <section className='my-8'>
                    <Heading
                        className='text-mid'
                        level={4}
                    >
                        Border
                    </Heading>
                    <ColorTableBorder
                        palette={palette.palette(palette.grayHsl, palette.accentHsl)}
                    />
                </section>
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
            className='mb-1 grid grid-cols-2 items-center gap-2'
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

const PRESETS: OptionsSchema<'listbox', Preset, Palette>[] = [
    {
        id: 'indigo',
        textValue: 'Indigo',
        icon: (
            <ColorSwatch
                className='size-5'
                color='#3E63DD'
            />
        ),
        value: {
            accent: '#3E63DD',
            error: '#E54666',
            success: '#29A383',
            warning: '#FFC53D',
        },
    },
    {
        id: 'muted',
        textValue: 'Muted (warm)',
        icon: (
            <ColorSwatch
                className='size-5'
                color='#E6E0E0'
            />
        ),
        value: {
            accent: '#E6E0E0',
            error: '#ECA7B6',
            success: '#D6E0A9',
            warning: '#FFD675',
        },
    },
    {
        id: 'shadcn',
        textValue: 'shadcn',
        description: 'Credit: shadcn/ui',
        icon: (
            <ColorSwatch
                className='size-5'
                color='#1C1917'
            />
        ),
        value: {
            accent: '#1C1917',
            error: '#E7000B',
            success: '#16A34A',
            warning: '#FACC15',
        },
    },
    {
        id: 'coffee',
        textValue: 'Coffee',
        description: 'Credit: HeroUI',
        icon: (
            <ColorSwatch
                className='size-5'
                color='#1C1917'
            />
        ),
        value: {
            accent: '#db924b',
            error: '#fc9581',
            success: '#9db787',
            warning: '#ffd25f',
        },
    },
]

function ThemePresetPicker({
    value,
    setValue,
}: {
    setValue: Dispatch<SetStateAction<Palette>>
    value?: Palette
}) {
    return (
        <Select
            className='mb-1 grid grid-cols-2 items-center gap-2'
            items={PRESETS}
            onSelectionChange={(v) => {
                const selected = PRESETS.find((preset) => preset.id === v)
                if (selected != null && selected.value != null) {
                    setValue(selected.value as Palette)
                }
            }}
            selectedKey={
                value != null
                    ? PRESETS.find((preset) => {
                          return (
                              preset.value != null &&
                              (preset.value as Palette).accent === value.accent &&
                              (preset.value as Palette).error === value.error &&
                              (preset.value as Palette).success === value.success &&
                              (preset.value as Palette).warning === value.warning
                          )
                      })?.id
                    : undefined
            }
        >
            <Label>Preset</Label>
            <SelectButton />
        </Select>
    )
}
