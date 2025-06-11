import type { Hsl } from 'culori'

import { SHADES } from './shades'
import { Color } from './types'

export function genSyntaxPalette({
    accentHsl,
    errorHsl,
    successHsl,
}: {
    accentHsl: Hsl
    errorHsl: Hsl
    successHsl: Hsl
}) {
    return {
        [`syntax-4`]: [
            SHADES[Color.TEXT_LO_CONTRAST].light.vibrant(successHsl),
            SHADES[Color.TEXT_LO_CONTRAST].dark.vibrant(successHsl),
        ],
        'syntax-1': [
            SHADES[Color.TEXT_LO_CONTRAST].light.vibrant(accentHsl),
            SHADES[Color.TEXT_LO_CONTRAST].dark.vibrant(accentHsl),
        ],
        'syntax-2': [
            SHADES[Color.TEXT_LO_CONTRAST].light.muted(accentHsl),
            SHADES[Color.TEXT_LO_CONTRAST].dark.muted(accentHsl),
        ],
        'syntax-3': [
            SHADES[Color.TEXT_LO_CONTRAST].light.vibrant(errorHsl),
            SHADES[Color.TEXT_LO_CONTRAST].dark.vibrant(errorHsl),
        ],
    } as const
}
