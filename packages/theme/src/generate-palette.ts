import type { Hsl } from 'culori'

import { SHADES } from './shades'
import { Color } from './types'

export function generatePalette(
    color: Hsl,
    {
        shouldUseVibrantShades,
    }: {
        /**
         * If true, vibrant shades will be used for
         * non-accent colors (e.g. bg, tint, text)
         */
        shouldUseVibrantShades: boolean
    }
) {
    return {
        [Color.BG_BASE]: [
            shouldUseVibrantShades
                ? SHADES[Color.BG_BASE].light.vibrant(color)
                : SHADES[Color.BG_BASE].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BG_BASE].dark.vibrant(color)
                : SHADES[Color.BG_BASE].dark.muted(color),
        ],
        [Color.BG_BASE_RAISED]: [
            shouldUseVibrantShades
                ? SHADES[Color.BG_BASE_RAISED].light.vibrant(color)
                : SHADES[Color.BG_BASE_RAISED].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BG_BASE_RAISED].dark.vibrant(color)
                : SHADES[Color.BG_BASE_RAISED].dark.muted(color),
        ],
        [Color.BG_PRIMARY]: [
            SHADES[Color.BG_PRIMARY].light.vibrant(color),
            SHADES[Color.BG_PRIMARY].dark.vibrant(color),
        ],
        [Color.BG_PRIMARY_HOVER]: [
            SHADES[Color.BG_PRIMARY_HOVER].light.vibrant(color),
            SHADES[Color.BG_PRIMARY_HOVER].dark.vibrant(color),
        ],
        [Color.BG_TINT]: [
            shouldUseVibrantShades
                ? SHADES[Color.BG_TINT].light.vibrant(color)
                : SHADES[Color.BG_TINT].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BG_TINT].dark.vibrant(color)
                : SHADES[Color.BG_TINT].dark.muted(color),
        ],
        [Color.BG_TINT_HOVER]: [
            shouldUseVibrantShades
                ? SHADES[Color.BG_TINT_HOVER].light.vibrant(color)
                : SHADES[Color.BG_TINT_HOVER].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BG_TINT_HOVER].dark.vibrant(color)
                : SHADES[Color.BG_TINT_HOVER].dark.muted(color),
        ],
        [Color.BORDER_DEFAULT]: [
            shouldUseVibrantShades
                ? SHADES[Color.BORDER_DEFAULT].light.vibrant(color)
                : SHADES[Color.BORDER_DEFAULT].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BORDER_DEFAULT].dark.vibrant(color)
                : SHADES[Color.BORDER_DEFAULT].dark.muted(color),
        ],
        [Color.BORDER_FIELD]: [
            shouldUseVibrantShades
                ? SHADES[Color.BORDER_FIELD].light.vibrant(color)
                : SHADES[Color.BORDER_FIELD].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BORDER_FIELD].dark.vibrant(color)
                : SHADES[Color.BORDER_FIELD].dark.muted(color),
        ],
        [Color.BORDER_FIELD_HOVER]: [
            shouldUseVibrantShades
                ? SHADES[Color.BORDER_FIELD_HOVER].light.vibrant(color)
                : SHADES[Color.BORDER_FIELD_HOVER].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.BORDER_FIELD_HOVER].dark.vibrant(color)
                : SHADES[Color.BORDER_FIELD_HOVER].dark.muted(color),
        ],
        [Color.TEXT_ACCENT]: [
            SHADES[Color.TEXT_ACCENT].light.vibrant(color),
            SHADES[Color.TEXT_ACCENT].dark.vibrant(color),
        ],
        [Color.TEXT_HI_CONTRAST]: [
            shouldUseVibrantShades
                ? SHADES[Color.TEXT_HI_CONTRAST].light.vibrant(color)
                : SHADES[Color.TEXT_HI_CONTRAST].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.TEXT_HI_CONTRAST].dark.vibrant(color)
                : SHADES[Color.TEXT_HI_CONTRAST].dark.muted(color),
        ],
        [Color.TEXT_LO_CONTRAST]: [
            shouldUseVibrantShades
                ? SHADES[Color.TEXT_LO_CONTRAST].light.vibrant(color)
                : SHADES[Color.TEXT_LO_CONTRAST].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.TEXT_LO_CONTRAST].dark.vibrant(color)
                : SHADES[Color.TEXT_LO_CONTRAST].dark.muted(color),
        ],
        [Color.TEXT_PLACEHOLDER]: [
            shouldUseVibrantShades
                ? SHADES[Color.TEXT_PLACEHOLDER].light.vibrant(color)
                : SHADES[Color.TEXT_PLACEHOLDER].light.muted(color),

            shouldUseVibrantShades
                ? SHADES[Color.TEXT_PLACEHOLDER].dark.vibrant(color)
                : SHADES[Color.TEXT_PLACEHOLDER].dark.muted(color),
        ],
    } as const
}
