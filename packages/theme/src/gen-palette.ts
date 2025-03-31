import * as fs from 'node:fs'
import * as path from 'node:path'

import { ColorPalette } from './palette'

const BRAND = '#0090FF'
const ERROR = '#E5484D'
const SUCCESS = '#30A46C'
const WARNING = '#FFC53D'

const outputPath = path.resolve(import.meta.dirname, '..', 'dist', 'style.css')

const palette = new ColorPalette({
  brandHex: BRAND,
  errorHex: ERROR,
  successHex: SUCCESS,
  warningHex: WARNING,
})

const css = palette.css({
  overrideTwColors: true,
  selector: '@theme',
})

fs.writeFileSync(outputPath, css)
