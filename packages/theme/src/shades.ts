import type { Hsl } from 'culori'

import { wcagContrast } from 'culori'

import { Color } from './types'

type ShadeFn = (hsl: Hsl) => Hsl
type ShadeLightDark = Record<'dark' | 'light', ShadeMutedVibrant>
type ShadeMutedVibrant = Record<'muted' | 'vibrant', ShadeFn>
type Shades = Record<Color, ShadeLightDark>

const TEXT_HI_CONTRAST: ShadeLightDark = {
    dark: {
        muted: (hsl) => ({
            ...hsl,
            l: 0.94,
            s: 0.09,
        }),
        vibrant: (hsl) => ({
            ...hsl,
            l: 0.92,
            s: 1,
        }),
    },
    light: {
        muted: (hsl) => ({
            ...hsl,
            l: 0.13,
            s: 0.13,
        }),
        vibrant: (hsl) => ({
            ...hsl,
            l: 0.24,
            s: 0.5,
        }),
    },
}

const BG_BASE: ShadeLightDark = {
    dark: {
        muted: (hsl) => ({
            ...hsl,
            l: 0.07,
            s: 0.06,
        }),
        vibrant: (hsl) => ({
            ...hsl,
            l: 0.09,
            s: 0.29,
        }),
    },
    light: {
        muted: (hsl) => ({
            ...hsl,
            l: 0.99,
            s: 0.2,
        }),
        vibrant: (hsl) => ({
            ...hsl,
            l: 0.99,
            s: 0.33,
        }),
    },
}

const BG_PRIMARY: ShadeLightDark = {
    dark: {
        muted: (hsl) => {
            const contrastRatio = wcagContrast(hsl, BG_BASE.dark.muted(hsl))
            if (contrastRatio > 2) return hsl

            return { ...hsl, l: 1 - hsl.l }
        },
        vibrant: (hsl) => {
            const contrastRatio = wcagContrast(hsl, BG_BASE.dark.vibrant(hsl))
            if (contrastRatio > 2) return hsl

            return { ...hsl, l: 1 - hsl.l }
        },
    },
    light: {
        muted: (hsl) => {
            const contrastRatio = wcagContrast(hsl, BG_BASE.light.muted(hsl))
            if (contrastRatio > 2) return hsl

            return { ...hsl, l: 1 - hsl.l }
        },
        vibrant: (hsl) => {
            const contrastRatio = wcagContrast(hsl, BG_BASE.light.vibrant(hsl))
            if (contrastRatio > 2) return hsl

            return { ...hsl, l: 1 - hsl.l }
        },
    },
}

const TEXT_ACCENT: ShadeLightDark = {
    dark: {
        muted: (hsl) => {
            const contrastRatio = wcagContrast(
                BG_PRIMARY.dark.muted(hsl),
                TEXT_HI_CONTRAST.dark.muted(hsl)
            )

            if (contrastRatio < 2.5) {
                return BG_BASE.dark.muted(hsl)
            }

            return TEXT_HI_CONTRAST.dark.muted(hsl)
        },
        vibrant: (hsl) => {
            const contrastRatio = wcagContrast(
                BG_PRIMARY.dark.vibrant(hsl),
                TEXT_HI_CONTRAST.dark.vibrant(hsl)
            )

            if (contrastRatio < 2.5) {
                return BG_BASE.dark.vibrant(hsl)
            }

            return TEXT_HI_CONTRAST.dark.vibrant(hsl)
        },
    },
    light: {
        muted: (hsl) => {
            const contrastRatio = wcagContrast(
                BG_PRIMARY.light.muted(hsl),
                TEXT_HI_CONTRAST.dark.muted(hsl)
            )

            if (contrastRatio < 2.5) {
                return BG_BASE.dark.muted(hsl)
            }

            return TEXT_HI_CONTRAST.dark.muted(hsl)
        },
        vibrant: (hsl) => {
            const contrastRatio = wcagContrast(
                BG_PRIMARY.light.vibrant(hsl),
                TEXT_HI_CONTRAST.dark.vibrant(hsl)
            )

            if (contrastRatio < 2.5) {
                return BG_BASE.dark.vibrant(hsl)
            }

            return TEXT_HI_CONTRAST.dark.vibrant(hsl)
        },
    },
}

// const textAccentFn: ShadeFn = (hsl) => {
//     const contrastRatio = wcagContrast(hsl, TEXT_HI_CONTRAST.light.vibrant(hsl))

//     if (contrastRatio < 2.5) {
//         return BG_BASE.light.muted(hsl)
//     }

//     return TEXT_HI_CONTRAST.light.muted(hsl)
// }

export const SHADES: Shades = {
    [Color.BG_BASE]: BG_BASE,
    [Color.BG_BASE_RAISED]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.1,
                s: 0.06,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.11,
                s: 0.31,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.98,
                s: 0.2,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.98,
                s: 1,
            }),
        },
    },
    [Color.BG_PRIMARY]: BG_PRIMARY,
    [Color.BG_PRIMARY_HOVER]: {
        dark: {
            muted: (hsl) => {
                const primary = BG_PRIMARY.dark.muted(hsl)
                return { ...primary, l: primary.l + 0.05 }
            },
            vibrant: (hsl) => {
                const primary = BG_PRIMARY.dark.vibrant(hsl)
                return { ...primary, l: primary.l + 0.05 }
            },
        },
        light: {
            muted: (hsl) => {
                const primary = BG_PRIMARY.light.muted(hsl)
                return { ...primary, l: primary.l + 0.05 }
            },
            vibrant: (hsl) => {
                const primary = BG_PRIMARY.light.vibrant(hsl)
                return { ...primary, l: primary.l + 0.05 }
            },
        },
    },
    [Color.BG_TINT]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.16,
                s: 0.07,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.25,
                s: 0.54,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.92,
                s: 0.1,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.94,
                s: 1,
            }),
        },
    },
    [Color.BORDER_DEFAULT]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                alpha: 0.11,
                l: 0.9,
                s: 0.73,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                alpha: 0.34,
                l: 0.6,
                s: 1,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                alpha: 0.09,
                l: 0.09,
                s: 1,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                alpha: 0.12,
                l: 0.5,
                s: 1,
            }),
        },
    },
    [Color.BORDER_FIELD]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                alpha: 0.15,
                l: 0.92,
                s: 0.95,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                alpha: 0.42,
                l: 0.62,
                s: 0.98,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                alpha: 0.12,
                l: 0.1,
                s: 1,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                alpha: 0.18,
                l: 0.5,
                s: 1,
            }),
        },
    },
    [Color.BORDER_FIELD_HOVER]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                alpha: 0.19,
                l: 0.92,
                s: 0.91,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                alpha: 0.49,
                l: 0.65,
                s: 0.98,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                alpha: 0.15,
                l: 0.09,
                s: 1,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                alpha: 0.24,
                l: 0.5,
                s: 1,
            }),
        },
    },
    [Color.TEXT_ACCENT]: TEXT_ACCENT,
    [Color.TEXT_HI_CONTRAST]: TEXT_HI_CONTRAST,
    [Color.TEXT_LO_CONTRAST]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.71,
                s: 0.07,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.81,
                s: 1,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.4,
                s: 0.06,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.5,
                s: 0.56,
            }),
        },
    },
    [Color.TEXT_PLACEHOLDER]: {
        dark: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.49,
                s: 0.05,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.61,
                s: 0.73,
            }),
        },
        light: {
            muted: (hsl) => ({
                ...hsl,
                l: 0.53,
                s: 0.05,
            }),
            vibrant: (hsl) => ({
                ...hsl,
                l: 0.52,
                s: 0.65,
            }),
        },
    },
}
