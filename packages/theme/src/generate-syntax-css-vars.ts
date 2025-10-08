import type { Hsl } from 'culori'

import { formatHsl } from 'culori'

import { genSyntaxPalette } from './generate-syntax-palette'

export function genSyntaxCssVars({
    accentHsl,
    errorHsl,
    successHsl,
}: {
    accentHsl: Hsl
    errorHsl: Hsl
    successHsl: Hsl
}) {
    const darkVars: Record<string, string> = {}
    const lightVars: Record<string, string> = {}
    const inlineVars: Record<string, string> = {}

    Object.entries(
        genSyntaxPalette({
            accentHsl: accentHsl,
            errorHsl: errorHsl,
            successHsl: successHsl,
        })
    ).forEach(([colorName, [light, dark]]) => {
        const varName = `--color-${colorName}`
        lightVars[varName] = formatHsl(light)
        darkVars[varName] = formatHsl(dark)
        inlineVars[varName] = `var(${varName})`
    })

    return { darkVars, inlineVars, lightVars }
}
