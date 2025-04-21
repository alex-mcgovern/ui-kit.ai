import * as fs from 'node:fs'
import * as path from 'node:path'

import { ColorPalette, DEFAULT_COLOR_PALETTE_INPUT } from './palette'

const outputPath = path.resolve(import.meta.dirname, '..', 'dist', 'style.css')

const palette = new ColorPalette(DEFAULT_COLOR_PALETTE_INPUT)

const css = palette.css({
    overrideTwColors: true,
    selector: '@theme',
    useTwUtilities: true,
})

fs.writeFileSync(outputPath, css)
