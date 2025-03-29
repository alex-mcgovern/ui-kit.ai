import * as fs from 'node:fs'
import * as path from 'node:path'

import { getPalettes } from './gen-color-palette'
import { serializeToCss } from './serialize-to-css'

const DEFAULT_COLOR_PRIMARY = '#0090FF'
const DEFAULT_COLOR_ERROR = '#E5484D'
const DEFAULT_COLOR_SUCCESS = '#30A46C'
const DEFAULT_COLOR_WARNING = '#FFC53D'

const outputPath = path.resolve(import.meta.dirname, '..', 'dist', 'style.css')

const palettes = getPalettes({
  brandHex: DEFAULT_COLOR_PRIMARY,
  errorHex: DEFAULT_COLOR_ERROR,
  successHex: DEFAULT_COLOR_SUCCESS,
  warningHex: DEFAULT_COLOR_WARNING,
})

const main = async () => {
  const css = await serializeToCss({
    palettes,
    selector: '@theme',
  })

  await fs.writeFileSync(outputPath, css)
}

main()
