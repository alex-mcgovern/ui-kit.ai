'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import {
  Button,
  ColorField,
  ColorSlider,
  ColorSwatch,
  DialogTrigger,
  FieldButton,
  FieldGroup,
  Input,
  Label,
  ListBox,
  Popover,
  PopoverDialog,
  Tag,
} from '@ui-kit.ai/components'
import {
  AppleIcon,
  BananaIcon,
  CarrotIcon,
  LeafyGreenIcon,
  PipetteIcon,
} from 'lucide-react'
import { type ComponentProps, type Dispatch, type SetStateAction } from 'react'

import { DemoForm } from './demo-form'
import { DemoTags } from './demo-tags'

export function Demo() {
  return (
    <div className='grid grid-cols-[3fr_2fr] gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-4'>
          <Button>Primary</Button>
          <Button variant='secondary'>Warning</Button>
          <Button variant='tertiary'>Error</Button>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Button isDestructive>Primary</Button>
          <Button
            isDestructive
            variant='secondary'
          >
            Warning
          </Button>
          <Button
            isDestructive
            variant='tertiary'
          >
            Error
          </Button>
        </div>
        <DemoTags />
        <ListBox
          items={[
            {
              icon: <AppleIcon />,
              id: 'apple',
              textValue: 'Apple',
            },
            {
              icon: <BananaIcon />,
              id: 'banana',
              textValue: 'Banana',
            },
            {
              icon: <CarrotIcon />,
              id: 'carrot',
              textValue: 'Carrot',
            },
            {
              icon: <LeafyGreenIcon />,
              id: 'spinach',
              textValue: 'Spinach',
            },
          ]}
        />
      </div>

      <DemoForm />
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
