'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import {
  Button,
  Checkbox,
  ComboBoxButton,
  ComboBoxClearButton,
  ComboBoxFieldGroup,
  ComboBoxInput,
  FieldGroup,
  Form,
  FormCheckboxGroup,
  FormComboBox,
  FormSelect,
  FormSubmitButton,
  FormTextField,
  Input,
  Label,
  ListBox,
  SelectButton,
  Tag,
  TextFieldClearButton,
} from '@ui-kit.ai/components'
import { ColorPalette } from '@ui-kit.ai/theme'
import {
  AppleIcon,
  AtSignIcon,
  BananaIcon,
  CarrotIcon,
  GlobeIcon,
  LeafyGreenIcon,
} from 'lucide-react'

import type { getPalettes } from './lib/gen-color-palette'

import { Code } from '../../components/code'

const BRAND = '#0090FF'
const ERROR = '#E5484D'
const SUCCESS = '#30A46C'
const WARNING = '#FFC53D'

const palette = new ColorPalette({
  errorHex: ERROR,
  brandHex: BRAND,
  successHex: SUCCESS,
  warningHex: WARNING,
})

const colors = palette.palette()
const css = palette.css({
  overrideTwColors: true,
  selector: '@theme',
})

export default function Page() {
  return (
    <div className='grid grid-cols-[1fr_3fr] gap-8'>
      <section>
        <h2>Generated colors</h2>

        <RenderPalette palettes={colors} />

        {/* <h3>Light</h3>
        <h4>Primary</h4>
        <RenderNamedPalette palette={lightPrimaryPalette} />
        <h4>Gray</h4>
        <RenderNamedPalette palette={lightGrayPalette} />
        <h4>Success</h4>
        <RenderNamedPalette palette={lightSuccessPalette} />
        <h4>Warning</h4>
        <RenderNamedPalette palette={lightWarningPalette} />
        <h4>Error</h4>
        <RenderNamedPalette palette={lightErrorPalette} />

        <h3>Dark</h3>
        <h4>Primary</h4>
        <RenderNamedPalette palette={darkPrimaryPalette} />
        <h4>Gray</h4>
        <RenderNamedPalette palette={darkGrayPalette} />
        <h4>Success</h4>
        <RenderNamedPalette palette={darkSuccessPalette} />
        <h4>Warning</h4>
        <RenderNamedPalette palette={darkWarningPalette} />
        <h4>Error</h4>
        <RenderNamedPalette palette={darkErrorPalette} /> */}
      </section>
      <section>
        <Code
          code={css}
          component={<Example />}
          language={'css'}
        />
      </section>
    </div>
  )
}

function ColorChip({
  backgroundColor,
  foregroundColor,
}: {
  backgroundColor: string
  foregroundColor: string
}) {
  return (
    <div
      className='size-8 flex items-center justify-center'
      style={{
        backgroundColor: backgroundColor,
        borderColor: '#ffffff',
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 0.5,
        color: foregroundColor,
        outlineColor: '#000000',
        outlineStyle: 'solid',
        outlineWidth: 0.5,
      }}
    >
      Aa
    </div>
  )
}

function Example() {
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
        <div className='flex items-center justify-center gap-4'>
          <Tag variant='default'>Default</Tag>
          <Tag variant='error'>Error</Tag>
          <Tag variant='warning'>Warning</Tag>
          <Tag variant='success'>Success</Tag>
          <Tag variant='inverted'>Inverted</Tag>
        </div>
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
      <div>
        <Form>
          <FormTextField
            className='mb-4'
            name='email'
            type='email'
          >
            <Label>Email address (Text field)</Label>
            <FieldGroup>
              <Input
                icon={<AtSignIcon />}
                isBorderless
                placeholder='Enter your email address'
              />
              <TextFieldClearButton />
            </FieldGroup>
          </FormTextField>

          <FormSelect
            className='mb-4'
            items={[
              {
                id: 'ireland',
                textValue: 'Ireland',
              },
            ]}
            name='country_of_birth'
          >
            <Label>Country of birth (Select)</Label>
            <SelectButton slotLeft={<GlobeIcon />} />
          </FormSelect>

          <FormComboBox
            className='mb-4'
            items={[
              {
                id: 'ireland',
                textValue: 'Ireland',
              },
            ]}
            name='country_of_residence'
          >
            <Label>Country of residence (ComboBox)</Label>
            <ComboBoxFieldGroup>
              <ComboBoxInput
                icon={<GlobeIcon />}
                isBorderless
                placeholder='Type to search...'
              />
              <ComboBoxClearButton />
              <ComboBoxButton />
            </ComboBoxFieldGroup>
          </FormComboBox>

          <FormCheckboxGroup
            className='mb-4'
            defaultValue={['account-updates']}
            name='communication_preference'
          >
            <Label>Communication preferences</Label>
            <Checkbox
              description='Necessary emails about your account & account security.'
              isDisabled
              isRequired
              label='Account updates'
              value='account-updates'
            />
            <Checkbox
              description='No more than one email per month with updates from our team.'
              label='Newsletter'
              value='newsletter'
            />
            <Checkbox
              description="Deals, discounts and suggestions we think you'll love."
              label='Promotions and Offers'
              value='promotions'
            />
          </FormCheckboxGroup>
          <FormSubmitButton />
        </Form>
      </div>
    </div>
  )
}

function RenderPalette({
  palettes,
}: {
  palettes: ReturnType<typeof getPalettes>
}) {
  return (
    <section className='my-8'>
      {Object.entries(palettes).map(([name, colors]) => (
        <div key={name}>
          <div className='flex items-center gap-4 border border-tint'>
            <div>
              <div className='text-hi-contrast'>{name}</div>
              <div className='text-mid-contrast'>{colors[0]}</div>
            </div>
            <div
              className='ml-auto size-12 flex items-center justify-center'
              style={{
                backgroundColor: colors[0],
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  )
}
