'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ColorField,
  ColorSlider,
  ColorSwatch,
  DialogTrigger,
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
import {
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react'

import { Demo } from './components/demo'

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
  })

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: css,
        }}
      />
      <Heading level={1}>Theming</Heading>

      <section>
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle>Color</CardTitle>
          </CardHeader>
          <CardBody className='grid grid-cols-4 gap-x-4 '>
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
          </CardBody>
          {/* <RenderPalette palettes={colors} /> */}
        </Card>
      </section>
      <section
      // style={cssVars}
      >
        <Demo />

        {/* <Code
          code={css}
          component={}
          language={'css'}
        /> */}
      </section>
    </>
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
