'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import type { OptionsSchema } from '@ui-kit.ai/components'
import type { ComponentProps, Dispatch, SetStateAction } from 'react'

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
    Link,
    Popover,
    PopoverDialog,
    Select,
    SelectButton,
} from '@ui-kit.ai/components'
import { ColorPalette, PRESETS } from '@ui-kit.ai/theme'
import { PipetteIcon } from 'lucide-react'
import { useContext } from 'react'

import { ThemeContext } from '../../components/providers/theme-provider'
import { Sidebar } from '../../components/sidebar'
import { hrefs } from '../../lib/hrefs'
import { Demo } from './components/demo'

type Palette = {
    accent: string
    error: string
    success: string
    warning: string
}

type Preset = 'coffee' | 'indigo' | 'muted' | 'shadcn'

export default function Page() {
    const themeContext = useContext(ThemeContext)
    if (themeContext == null) throw new Error('ThemeContext is not available')
    const { setAccent, setError, setSuccess, setWarning, accent, error, success, warning } =
        themeContext

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
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <style
                dangerouslySetInnerHTML={{
                    __html: css,
                }}
            />
            <Sidebar>
                <section className='mb-8'>
                    <Heading
                        className='text-2xl'
                        level={1}
                    >
                        Theme editor
                    </Heading>
                    <p className='mb-2'>
                        A simple way to adapt the look & feel of @ui-kit.ai to your brand.
                    </p>
                    <p className='mb-2'>
                        To learn more, check out the{' '}
                        <Link href={hrefs.docs.getting_started.theme}>docs</Link>.
                    </p>
                </section>

                <section className='mb-8'>
                    <Heading level={4}>Use a preset</Heading>
                    <p className='mb-2'>
                        Presets use the excellent{' '}
                        <Link
                            href='https://www.radix-ui.com/colors'
                            target='_blank'
                        >
                            radix-ui colors
                        </Link>{' '}
                        library.
                    </p>
                    <ThemePresetPicker setValue={(palette) => onPresetChange(palette)} />
                </section>
                <section className='mb-8'>
                    <Heading level={4}>Or build your own</Heading>
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
                </section>
            </Sidebar>
            <main className='w-full p-4 min-w-0 mx-auto'>
                <section>
                    <Demo />
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
                            className='size-4'
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

const PRESET_ITEMS: OptionsSchema<'listbox', Preset, Palette>[] = Object.entries(PRESETS).map(
    ([id, value]) => ({
        id: id as Preset,
        textValue: id.charAt(0).toUpperCase() + id.slice(1),
        icon: (
            <ColorSwatch
                className='size-4'
                color={value.accent}
            />
        ),
        value: value as Palette,
    })
)

function ThemePresetPicker({
    value,
    setValue,
}: {
    setValue: (palette: Palette) => void
    value?: Palette
}) {
    return (
        <Select
            aria-label='Theme preset'
            className='mb-1 grid grid-cols-2 items-center gap-2'
            defaultSelectedKey='indigo'
            items={PRESET_ITEMS}
            onSelectionChange={(v) => {
                const selected = PRESET_ITEMS.find((preset) => preset.id === v)
                if (selected != null && selected.value != null) {
                    setValue(selected.value as Palette)
                }
            }}
            selectedKey={
                value != null
                    ? PRESET_ITEMS.find((preset) => {
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
