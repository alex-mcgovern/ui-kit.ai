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
    return Object.entries(
        genSyntaxPalette({
            accentHsl: accentHsl,
            errorHsl: errorHsl,
            successHsl: successHsl,
        })
    )
        .map(([colorName, [light, dark]]) => {
            return `\t--color-${colorName}: light-dark(${formatHsl(light)}, ${formatHsl(dark)});`
        })
        .join('\n')
}
