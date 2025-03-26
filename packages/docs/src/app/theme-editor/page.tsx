/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */
import type { ReactNode } from 'react'

import { Button, CodeBlock, Heading } from '@ui-kit.ai/components'
import { format } from 'prettier'

import { Code } from '../../components/code'
import { getPalettes } from './lib/get-palettes'
import { serializeToCss } from './lib/serialize-to-css'
const DEFAULT_COLOR_PRIMARY = '#0090FF'
const DEFAULT_COLOR_ERROR = '#E5484D'
const DEFAULT_COLOR_SUCCESS = '#30A46C'
const DEFAULT_COLOR_WARNING = '#FFC53D'

const palettes = getPalettes({
  errorHex: DEFAULT_COLOR_ERROR,
  brandHex: DEFAULT_COLOR_PRIMARY,
  successHex: DEFAULT_COLOR_SUCCESS,
  warningHex: DEFAULT_COLOR_WARNING,
})

export default async function Page() {
  const rootCss = await getFormattedCss({
    palettes,
    selector: '@theme',
  })

  return (
    <div className='grid grid-cols-[1fr_3fr] gap-8'>
      <section>
        <h2>Generated colors</h2>

        <RenderNamedPalette palettes={palettes} />

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
          code={rootCss}
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
        // borderColor: '#ffffff',
        borderRadius: 4,
        // borderStyle: 'solid',
        // borderWidth: 1,
        color: foregroundColor,
        // outlineColor: '#000000',
        // outlineStyle: 'solid',
        // outlineWidth: 1,
      }}
    >
      Aa
    </div>
  )
}

function ColorPaletteRow({ children }: { children: ReactNode }) {
  return <div className='flex items-center gap-2 mb-2'>{children}</div>
}

function Example() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>Primary</Button>
        <Button variant='secondary'>Warning</Button>
        <Button variant='tertiary'>Error</Button>
      </div>
      <div className='flex items-center gap-4'>
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
    </div>
  )
}

async function getFormattedCss({
  palettes,
  selector,
}: {
  palettes: ReturnType<typeof getPalettes>
  selector: string
}) {
  const css = serializeToCss({ palettes, selector })
  return format(css, { parser: 'css' })
}

function RenderNamedPalette({
  palettes,
}: {
  palettes: ReturnType<typeof getPalettes>
}) {
  return (
    <section className='my-8'>
      <Heading
        className='text-black'
        level={3}
      >
        Color Palette
      </Heading>

      {/*//////////////////////////////////////////////////
       // Background                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Background
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['background'][0]}
          foregroundColor={palettes['hi-contrast'][0]}
        />
        <ColorChip
          backgroundColor={palettes['background'][1]}
          foregroundColor={palettes['hi-contrast'][1]}
        />
        <div>background</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['background-inverse'][0]}
          foregroundColor={palettes['inverse'][0]}
        />
        <ColorChip
          backgroundColor={palettes['background-inverse'][1]}
          foregroundColor={palettes['inverse'][1]}
        />
        <div>background-inverse</div>
      </ColorPaletteRow>

      {/*//////////////////////////////////////////////////
       // Text                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Text
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor='transparent'
          foregroundColor={palettes['hi-contrast'][0]}
        />
        <ColorChip
          backgroundColor='#000000'
          foregroundColor={palettes['hi-contrast'][1]}
        />
        <div>hi-contrast</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor='transparent'
          foregroundColor={palettes['mid-contrast'][0]}
        />
        <ColorChip
          backgroundColor='#000000'
          foregroundColor={palettes['mid-contrast'][1]}
        />
        <div>mid-contrast</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor='transparent'
          foregroundColor={palettes['lo-contrast'][0]}
        />
        <ColorChip
          backgroundColor='#000000'
          foregroundColor={palettes['lo-contrast'][1]}
        />
        <div>lo-contrast</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor='#000000'
          foregroundColor={palettes['inverse'][0]}
        />
        <ColorChip
          backgroundColor='#ffffff'
          foregroundColor={palettes['inverse'][1]}
        />
        <div>inverse</div>
      </ColorPaletteRow>

      {/*//////////////////////////////////////////////////
       // Tint                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Tint
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['tint'][0]}
          foregroundColor={palettes['hi-contrast'][0]}
        />
        <ColorChip
          backgroundColor={palettes['tint'][1]}
          foregroundColor={palettes['hi-contrast'][1]}
        />
        <div>tint</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['tint-dark'][0]}
          foregroundColor={palettes['hi-contrast'][0]}
        />
        <ColorChip
          backgroundColor={palettes['tint-dark'][1]}
          foregroundColor={palettes['hi-contrast'][1]}
        />
        <div>tint-dark</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['tint-light'][0]}
          foregroundColor={palettes['hi-contrast'][0]}
        />
        <ColorChip
          backgroundColor={palettes['tint-light'][1]}
          foregroundColor={palettes['hi-contrast'][1]}
        />
        <div>tint-light</div>
      </ColorPaletteRow>

      {/*//////////////////////////////////////////////////
       // Brand                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Brand
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['brand'][0]}
          foregroundColor={palettes['brand-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['brand'][1]}
          foregroundColor={palettes['brand-fg'][1]}
        />
        <div>brand</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['brand-dark'][0]}
          foregroundColor={palettes['brand-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['brand-dark'][1]}
          foregroundColor={palettes['brand-fg'][1]}
        />
        <div>brand-dark</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['brand-light'][0]}
          foregroundColor={palettes['brand-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['brand-light'][1]}
          foregroundColor={palettes['brand-fg'][1]}
        />
        <div>brand-light</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['brand-tint'][0]}
          foregroundColor={palettes['brand-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['brand-tint'][1]}
          foregroundColor={palettes['brand-tint-fg'][1]}
        />
        <div>brand-tint</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['brand-tint-dark'][0]}
          foregroundColor={palettes['brand-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['brand-tint-dark'][1]}
          foregroundColor={palettes['brand-tint-fg'][1]}
        />
        <div>brand-tint-dark</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['brand-tint-light'][0]}
          foregroundColor={palettes['brand-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['brand-tint-light'][1]}
          foregroundColor={palettes['brand-tint-fg'][1]}
        />
        <div>brand-tint-light</div>
      </ColorPaletteRow>

      {/*//////////////////////////////////////////////////
       // Error                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Error
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['error'][0]}
          foregroundColor={palettes['error-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['error'][1]}
          foregroundColor={palettes['error-fg'][1]}
        />
        <div>error</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['error-dark'][0]}
          foregroundColor={palettes['error-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['error-dark'][1]}
          foregroundColor={palettes['error-fg'][1]}
        />
        <div>error-dark</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['error-light'][0]}
          foregroundColor={palettes['error-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['error-light'][1]}
          foregroundColor={palettes['error-fg'][1]}
        />
        <div>error-light</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['error-tint'][0]}
          foregroundColor={palettes['error-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['error-tint'][1]}
          foregroundColor={palettes['error-tint-fg'][1]}
        />
        <div>error-tint</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['error-tint-dark'][0]}
          foregroundColor={palettes['error-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['error-tint-dark'][1]}
          foregroundColor={palettes['error-tint-fg'][1]}
        />
        <div>error-tint-dark</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['error-tint-light'][0]}
          foregroundColor={palettes['error-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['error-tint-light'][1]}
          foregroundColor={palettes['error-tint-fg'][1]}
        />
        <div>error-tint-light</div>
      </ColorPaletteRow>

      {/*//////////////////////////////////////////////////
       // Warning                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Warning
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['warning'][0]}
          foregroundColor={palettes['warning-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['warning'][1]}
          foregroundColor={palettes['warning-fg'][1]}
        />
        <div>warning</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['warning-dark'][0]}
          foregroundColor={palettes['warning-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['warning-dark'][1]}
          foregroundColor={palettes['warning-fg'][1]}
        />
        <div>warning-dark</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['warning-light'][0]}
          foregroundColor={palettes['warning-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['warning-light'][1]}
          foregroundColor={palettes['warning-fg'][1]}
        />
        <div>warning-light</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['warning-tint'][0]}
          foregroundColor={palettes['warning-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['warning-tint'][1]}
          foregroundColor={palettes['warning-tint-fg'][1]}
        />
        <div>warning-tint</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['warning-tint-dark'][0]}
          foregroundColor={palettes['warning-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['warning-tint-dark'][1]}
          foregroundColor={palettes['warning-tint-fg'][1]}
        />
        <div>warning-tint-dark</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['warning-tint-light'][0]}
          foregroundColor={palettes['warning-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['warning-tint-light'][1]}
          foregroundColor={palettes['warning-tint-fg'][1]}
        />
        <div>warning-tint-light</div>
      </ColorPaletteRow>

      {/*//////////////////////////////////////////////////
       // Success                                          
       /////////////////////////////////////////////////// */}

      <Heading
        className='text-black'
        level={4}
      >
        Success
      </Heading>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['success'][0]}
          foregroundColor={palettes['success-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['success'][1]}
          foregroundColor={palettes['success-fg'][1]}
        />
        <div>success</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['success-dark'][0]}
          foregroundColor={palettes['success-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['success-dark'][1]}
          foregroundColor={palettes['success-fg'][1]}
        />
        <div>success-dark</div>
      </ColorPaletteRow>

      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['success-light'][0]}
          foregroundColor={palettes['success-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['success-light'][1]}
          foregroundColor={palettes['success-fg'][1]}
        />
        <div>success-light</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['success-tint'][0]}
          foregroundColor={palettes['success-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['success-tint'][1]}
          foregroundColor={palettes['success-tint-fg'][1]}
        />
        <div>success-tint</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['success-tint-dark'][0]}
          foregroundColor={palettes['success-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['success-tint-dark'][1]}
          foregroundColor={palettes['success-tint-fg'][1]}
        />
        <div>success-tint-dark</div>
      </ColorPaletteRow>
      <ColorPaletteRow>
        <ColorChip
          backgroundColor={palettes['success-tint-light'][0]}
          foregroundColor={palettes['success-tint-fg'][0]}
        />
        <ColorChip
          backgroundColor={palettes['success-tint-light'][1]}
          foregroundColor={palettes['success-tint-fg'][1]}
        />
        <div>success-tint-light</div>
      </ColorPaletteRow>
    </section>
  )
}
