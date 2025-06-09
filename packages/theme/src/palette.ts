/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */
import { converter, formatHsl, type Hsl, hsl } from 'culori'

import { generateThemeVars } from './css-vars'
import { generatePalette } from './palette-2'
import { SHADES } from './shades'
import { generateBorderUtilitiesCSS } from './tw-utils/border'
import { genIntentUtils } from './tw-utils/intent'
import { generateTextUtilitiesCSS } from './tw-utils/text'
import { Color, type ColorPaletteInput } from './types'

export const PRESETS = {
    indigo: {
        accent: '#3E63DD',
        error: '#E54666',
        success: '#29A383',
        warning: '#FFC53D',
    },
    iris: {
        accent: '#5B5BD6',
        error: '#E93D82',
        success: '#12A594',
        warning: '#FFC53D',
    },
    blue: {
        accent: '#0090FF',
        error: '#E5484D',
        success: '#30A46C',
        warning: '#FFC53D',
    },
    gold: {
        accent: '#AE8C7E',
        error: '#EC6142',
        success: '#71D083',
        warning: '#FFA057',
    },
    yellow: {
        accent: '#F6EEB4',
        error: '#FDD1EA',
        success: '#71D083',
        warning: '#FFA057',
    },
} as const

export const DEFAULT_COLOR_PALETTE_INPUT = PRESETS.indigo

export class ColorPalette {
    public accentHsl: Hsl
    public errorHsl: Hsl
    public grayHsl: Hsl
    public successHsl: Hsl
    public warningHsl: Hsl
    private readonly vendorToHsl = converter('hsl')

    constructor({ accent, error, gray, success, warning }: ColorPaletteInput) {
        this.accentHsl = this._clrHexToHsl(accent)
        this.successHsl = this._clrHexToHsl(success)
        this.warningHsl = this._clrHexToHsl(warning)
        this.errorHsl = this._clrHexToHsl(error)
        this.grayHsl = gray != null ? this._clrHexToHsl(gray) : this._clrDeriveGray(this.accentHsl)
    }

    public css({ overrideTwColors, selector }: { overrideTwColors: boolean; selector: string }) {
        return `
${selector} {
    ${overrideTwColors ? `--color-*: initial; /* override/reset tailwind colors */` : ''}
${generateThemeVars({
    default: generatePalette(this.accentHsl, { shouldUseVibrantShades: false }),
    info: generatePalette(this.accentHsl, { shouldUseVibrantShades: true }),
    error: generatePalette(this.errorHsl, { shouldUseVibrantShades: true }),
    success: generatePalette(this.successHsl, { shouldUseVibrantShades: true }),
    warning: generatePalette(this.warningHsl, { shouldUseVibrantShades: true }),
})}
\t/*-------------------------------------------------
\t/ Syntax theme color utility mapping
\t/-------------------------------------------------*/
${Object.entries(this.genSyntaxPalette())
    .map(([colorName, [light, dark]]) => {
        return `\t--color-${colorName}: light-dark(${light}, ${dark});`
    })
    .join('\n')}
}
@utility bg-* {
  background-color: --value(--theme-default-bg-*, [color]);
  background-color: --alpha(--value(--theme-default-bg-*, [color]) / calc(--modifier(integer) * 1%));
}
${generateTextUtilitiesCSS()}
${generateBorderUtilitiesCSS()}
${genIntentUtils()}
`
    }

    public genSyntaxPalette() {
        return {
            'syntax-1': [
                this._clrFormatHsl(this._clrTextHigh(this.accentHsl, 'light')),
                this._clrFormatHsl(this._clrTextHigh(this.accentHsl, 'dark')),
            ],
            'syntax-2': [
                this._clrFormatHsl(this._clrTextHigh(this.grayHsl, 'light')),
                this._clrFormatHsl(this._clrTextHigh(this.grayHsl, 'dark')),
            ],
            'syntax-3': [
                this._clrFormatHsl(this._clrShade('light', this.errorHsl)),
                this._clrFormatHsl(this._clrShade('light', this.errorHsl)),
            ],
            [`syntax-4`]: [
                this._clrFormatHsl(this._clrDeriveAccent(this.accentHsl, 'light')),
                this._clrFormatHsl(this._clrDeriveAccent(this.accentHsl, 'dark')),
            ],
        } as const
    }

    public palette(gray: Hsl, accent: Hsl) {
        // TODO: remove gray from palette input
        const shouldMute = gray.s !== accent.s && gray.l !== accent.l
        return {
            [Color.BG_BASE]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_BASE].light.muted(gray)
                        : SHADES[Color.BG_BASE].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_BASE].dark.muted(gray)
                        : SHADES[Color.BG_BASE].dark.vibrant(gray)
                ),
            ],
            [Color.BG_BASE_RAISED]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_BASE_RAISED].light.muted(gray)
                        : SHADES[Color.BG_BASE_RAISED].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_BASE_RAISED].dark.muted(gray)
                        : SHADES[Color.BG_BASE_RAISED].dark.vibrant(gray)
                ),
            ],
            [Color.BG_TINT]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_TINT].light.muted(gray)
                        : SHADES[Color.BG_TINT].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_TINT].dark.muted(gray)
                        : SHADES[Color.BG_TINT].dark.vibrant(gray)
                ),
            ],
            [Color.BG_TINT_HOVER]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_TINT_HOVER].light.muted(gray)
                        : SHADES[Color.BG_TINT_HOVER].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_TINT_HOVER].dark.muted(gray)
                        : SHADES[Color.BG_TINT_HOVER].dark.vibrant(gray)
                ),
            ],
            [Color.BG_PRIMARY]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_PRIMARY].light.muted(gray)
                        : SHADES[Color.BG_PRIMARY].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_PRIMARY].dark.muted(gray)
                        : SHADES[Color.BG_PRIMARY].dark.vibrant(gray)
                ),
            ],
            [Color.BG_PRIMARY_HOVER]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_PRIMARY_HOVER].light.muted(gray)
                        : SHADES[Color.BG_PRIMARY_HOVER].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BG_PRIMARY_HOVER].dark.muted(gray)
                        : SHADES[Color.BG_PRIMARY_HOVER].dark.vibrant(gray)
                ),
            ],
            [Color.TEXT_ACCENT]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_ACCENT].light.muted(gray)
                        : SHADES[Color.TEXT_ACCENT].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_ACCENT].dark.muted(gray)
                        : SHADES[Color.TEXT_ACCENT].dark.vibrant(gray)
                ),
            ],
            [Color.TEXT_PLACEHOLDER]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_PLACEHOLDER].light.muted(gray)
                        : SHADES[Color.TEXT_PLACEHOLDER].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_PLACEHOLDER].dark.muted(gray)
                        : SHADES[Color.TEXT_PLACEHOLDER].dark.vibrant(gray)
                ),
            ],
            [Color.TEXT_LO_CONTRAST]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_LO_CONTRAST].light.muted(gray)
                        : SHADES[Color.TEXT_LO_CONTRAST].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_LO_CONTRAST].dark.muted(gray)
                        : SHADES[Color.TEXT_LO_CONTRAST].dark.vibrant(gray)
                ),
            ],
            [Color.TEXT_HI_CONTRAST]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_HI_CONTRAST].light.muted(gray)
                        : SHADES[Color.TEXT_HI_CONTRAST].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.TEXT_HI_CONTRAST].dark.muted(gray)
                        : SHADES[Color.TEXT_HI_CONTRAST].dark.vibrant(gray)
                ),
            ],
            [Color.BORDER_DEFAULT]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BORDER_DEFAULT].light.muted(gray)
                        : SHADES[Color.BORDER_DEFAULT].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BORDER_DEFAULT].dark.muted(gray)
                        : SHADES[Color.BORDER_DEFAULT].dark.vibrant(gray)
                ),
            ],
            [Color.BORDER_FIELD]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BORDER_FIELD].light.muted(gray)
                        : SHADES[Color.BORDER_FIELD].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BORDER_FIELD].dark.muted(gray)
                        : SHADES[Color.BORDER_FIELD].dark.vibrant(gray)
                ),
            ],
            [Color.BORDER_FIELD_HOVER]: [
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BORDER_FIELD_HOVER].light.muted(gray)
                        : SHADES[Color.BORDER_FIELD_HOVER].light.vibrant(gray)
                ),
                this._clrFormatHsl(
                    shouldMute
                        ? SHADES[Color.BORDER_FIELD_HOVER].dark.muted(gray)
                        : SHADES[Color.BORDER_FIELD_HOVER].dark.vibrant(gray)
                ),
            ],
        } as const
    }
    private _clrDeriveAccent(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        let l = hslVal.l
        if (mode === 'dark' && l < 0.3) {
            l = 0.9
        }
        if (mode === 'light' && l > 0.8) {
            l = 0.1
        }

        return { ...hslVal, l }
    }
    private _clrDeriveGray(hslVal: Hsl): Hsl {
        return { ...hslVal, s: 0.075 }
    }
    private _clrFormatHsl(hslVal: Hsl) {
        return formatHsl(hsl(hslVal))
    }
    private _clrHexToHsl(hex: string): Hsl {
        const hslRepr = this.vendorToHsl(hex)
        if (hslRepr == null) {
            throw new Error(`Invalid hex color: ${hex}`)
        }
        return hslRepr
    }
    private _clrShade(modifier: 'dark' | 'light', hslVal: Hsl): Hsl {
        const factor = 0.0375
        const appliedFactor = modifier === 'dark' ? -factor : factor
        const newL = Math.max(0.0125, Math.min(0.9875, hslVal.l + appliedFactor))
        return { ...hslVal, l: newL }
    }

    private _clrTextHigh(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.2 : 0.94,
            s: 0.09,
        }
    }
}
