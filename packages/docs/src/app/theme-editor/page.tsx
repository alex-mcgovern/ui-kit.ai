/* eslint-disable perfectionist/sort-objects */
import { CodeBlock } from '@ui-kit.ai/components'
import * as path from 'node:path'
import { format, resolveConfig, resolveConfigFile } from 'prettier'
import { serialize } from 'v8'

import { getBgFromGray } from './lib/get-bg-from-gray'
import { getGrayFromBrand } from './lib/get-gray-from-primary'
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
    selector: ':root',
  })

  return (
    <div className='grid grid-cols-[1fr_3fr] gap-8'>
      <section className='bg-gray-200'>
        <h2>Generated colors</h2>

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
        <CodeBlock language='css'>{rootCss}</CodeBlock>
      </section>
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

function RenderFlatPalette({ palette }: { palette: string[] }) {
  return (
    <div className='flex gap-2'>
      {palette.map((hex) => (
        <div
          className='size-8'
          style={{
            backgroundColor: hex,
            borderColor: '#ffffff',
            borderRadius: 4,
            borderStyle: 'solid',
            borderWidth: 1,
            outlineColor: '#000000',
            outlineStyle: 'solid',
            outlineWidth: 1,
          }}
        />
      ))}
    </div>
  )
}
function RenderNamedPalette({ palette }: { palette: Record<string, string> }) {
  return (
    <section className='my-8'>
      {Object.entries(palette).map(([name, hex]) => (
        <div className='flex items-center gap-2 mb-2'>
          <div
            className='size-8 flex items-center justify-center'
            style={{
              backgroundColor: hex,
              borderColor: '#ffffff',
              borderRadius: 4,
              borderStyle: 'solid',
              borderWidth: 1,
              color: '#ffffff',
              outlineColor: '#000000',
              outlineStyle: 'solid',
              outlineWidth: 1,
            }}
          >
            Aa
          </div>
          <div>{name}</div>
        </div>
      ))}
    </section>
  )
}
