import { formatHsl } from 'culori'

import type { generatePalette } from './palette-2'
import type { Color, Intent } from './types'

export type VarName = `--theme-${Intent}-${Color}`

export function generateThemeVars(palettes: Record<Intent, ReturnType<typeof generatePalette>>) {
    return Object.entries(palettes)
        .map(([intent, palette]) => {
            const themeVars = paletteToThemeVars(palette, intent as Intent)
            return serializeThemeVars(themeVars)
        })
        .join('\n')
}

export function genVarName(intent: Intent, color: Color): VarName {
    return `--theme-${intent}-${color}` as const
}

function paletteToThemeVars(palette: ReturnType<typeof generatePalette>, intent: Intent) {
    return Object.entries(palette).reduce(
        (acc, [key, [light, dark]]) => {
            acc[genVarName(intent, key as Color)] =
                `light-dark(${formatHsl(light)}, ${formatHsl(dark)})`
            return acc
        },
        {} as Record<string, string>
    )
}

function serializeThemeVars(themeVars: Record<string, string>) {
    return Object.entries(themeVars)
        .map(([key, value]) => {
            return `\t${key}: ${value};`
        })
        .join('\n')
}
