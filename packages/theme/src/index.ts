import type { DEFAULT_COLOR_PALETTE_INPUT } from './palette'
import type { PRESETS } from './presets'
export { ColorPalette, DEFAULT_COLOR_PALETTE_INPUT } from './palette'
export { PRESETS } from './presets'
export { Color, type ColorPaletteInput } from './types'

// NOTE: There was a weird bug where this object was omitted from the `.dts` file
// when it was not explicitly exported. This is a workaround.
export type DefaultColorPaletteInput = typeof DEFAULT_COLOR_PALETTE_INPUT
export type Presets = typeof PRESETS
