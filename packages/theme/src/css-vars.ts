import { formatHsl } from 'culori'

import type { generatePalette } from './generate-palette'
import type { Color, Intent } from './types'

export type VarName = `--theme-${Intent}-${Color}`

export function generateThemeVars(palettes: Record<Intent, ReturnType<typeof generatePalette>>) {
    const darkVars: Record<string, string> = {}
    const lightVars: Record<string, string> = {}
    const inlineVars: Record<string, string> = {}

    Object.entries(palettes).forEach(([intent, palette]) => {
        Object.entries(palette).forEach(([key, [light, dark]]) => {
            const varName = genVarName(intent as Intent, key as Color)
            lightVars[varName] = formatHsl(light)
            darkVars[varName] = formatHsl(dark)
            inlineVars[varName] = `var(${varName})`
        })
    })

    return { darkVars, inlineVars, lightVars }
}

export function genVarName(intent: Intent, color: Color): VarName {
    return `--theme-${intent}-${color}` as const
}
