import type { ColorPalette } from './palette'
import type { Color, Intent } from './types'

export type VarName = `--theme-${Intent}-${Color}`

export function generateThemeVars(palettes: Record<Intent, ReturnType<ColorPalette['palette']>>) {
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

function paletteToThemeVars(palette: ReturnType<ColorPalette['palette']>, intent: Intent) {
    return Object.entries(palette).reduce(
        (acc, [key, [light, dark]]) => {
            acc[genVarName(intent, key as Color)] = `light-dark(${light}, ${dark})`
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
