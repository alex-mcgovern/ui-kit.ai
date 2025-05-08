/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */
import { converter, formatHsl, type Hsl, hsl } from 'culori'

import { generateThemeVars } from './css-vars'
import { generateBgUtilitiesCSS } from './tw-utils/bg'
import { generateBorderUtilitiesCSS } from './tw-utils/border'
import { genIntentUtils } from './tw-utils/intent'
import { generateTextUtilitiesCSS } from './tw-utils/text'
import { Color, type ColorPaletteInput } from './types'

export const DEFAULT_COLOR_PALETTE_INPUT = {
    accent: '#3E63DD',
    error: '#E54666',
    success: '#29A383',
    warning: '#FFC53D',
} as const satisfies ColorPaletteInput

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
    default: this.palette(this.grayHsl, this.accentHsl),
    info: this.palette(this.accentHsl, this.accentHsl),
    error: this.palette(this.errorHsl, this.errorHsl),
    success: this.palette(this.successHsl, this.successHsl),
    warning: this.palette(this.warningHsl, this.warningHsl),
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
${generateBgUtilitiesCSS()}
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
        return {
            [Color.BG_BASE]: [
                this._clrFormatHsl(this._clrBg(gray, 'light')),
                this._clrFormatHsl(this._clrBg(gray, 'dark')),
            ],
            [Color.BG_RAISED]: [
                this._clrFormatHsl(this._clrBgRaised(gray, 'light')),
                this._clrFormatHsl(this._clrBgRaised(gray, 'dark')),
            ],
            [Color.BG_TINT_DARK]: [
                this._clrFormatHsl(this._clrShade('dark', this._clrTint(gray, 'light'))),
                this._clrFormatHsl(this._clrShade('dark', this._clrTint(gray, 'dark'))),
            ],
            [Color.BG_TINT]: [
                this._clrFormatHsl(this._clrTint(gray, 'light')),
                this._clrFormatHsl(this._clrTint(gray, 'dark')),
            ],
            [Color.BG_TINT_LIGHT]: [
                this._clrFormatHsl(this._clrShade('light', this._clrTint(gray, 'light'))),
                this._clrFormatHsl(this._clrShade('light', this._clrTint(gray, 'dark'))),
            ],
            [Color.BG_ACCENT_DARK]: [
                this._clrFormatHsl(this._clrShade('dark', this._clrDeriveAccent(accent, 'light'))),
                this._clrFormatHsl(this._clrShade('dark', this._clrDeriveAccent(accent, 'dark'))),
            ],
            [Color.BG_ACCENT]: [
                this._clrFormatHsl(this._clrDeriveAccent(accent, 'light')),
                this._clrFormatHsl(this._clrDeriveAccent(accent, 'dark')),
            ],
            [Color.BG_ACCENT_LIGHT]: [
                this._clrFormatHsl(this._clrShade('light', this._clrDeriveAccent(accent, 'light'))),
                this._clrFormatHsl(this._clrShade('light', this._clrDeriveAccent(accent, 'dark'))),
            ],
            [Color.TEXT_ACCENT]: [
                this._clrFormatHsl(this._clrFg(this._clrDeriveAccent(accent, 'light'))),
                this._clrFormatHsl(this._clrFg(this._clrDeriveAccent(accent, 'dark'))),
            ],
            [Color.TEXT_LIGHT]: [
                this._clrFormatHsl(this._clrTextDark(gray, 'light')),
                this._clrFormatHsl(this._clrTextDark(gray, 'dark')),
            ],
            [Color.TEXT_MID]: [
                this._clrFormatHsl(this._clrTextMid(gray, 'light')),
                this._clrFormatHsl(this._clrTextMid(gray, 'dark')),
            ],
            [Color.TEXT_DARK]: [
                this._clrFormatHsl(this._clrTextHigh(gray, 'light')),
                this._clrFormatHsl(this._clrTextHigh(gray, 'dark')),
            ],
            [Color.BORDER_LIGHT]: [
                this._clrFormatHsl(this._clrBorderLight(gray, 'light')),
                this._clrFormatHsl(this._clrBorderLight(gray, 'dark')),
            ],
            [Color.BORDER_MID]: [
                this._clrFormatHsl(this._clrBorder(gray, 'light')),
                this._clrFormatHsl(this._clrBorder(gray, 'dark')),
            ],
            [Color.BORDER_DARK]: [
                this._clrFormatHsl(this._clrBorderDark(gray, 'light')),
                this._clrFormatHsl(this._clrBorderDark(gray, 'dark')),
            ],
        } as const
    }
    private _clrBg(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hsl,
            l: mode === 'light' ? 0.9625 : 0.055,
            s: 0.05,
        }
    }
    private _clrBgRaised(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hsl,
            l: mode === 'light' ? 0.9825 : 0.0888,
            s: 0.05,
        }
    }
    private _clrBorder(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
            alpha: 0.2,
        }
    }
    private _clrBorderDark(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
            alpha: 0.3,
        }
    }
    private _clrBorderLight(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
            alpha: 0.1,
        }
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
    private _clrFg(hslVal: Hsl): Hsl {
        return {
            ...hslVal,
            l: hslVal.l > 0.6 ? 0.05 : 0.95,
            s: 0.5,
        }
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

    private _clrTextDark(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.675 : 0.4,
        }
    }
    private _clrTextHigh(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.2 : 0.9,
        }
    }
    private _clrTextMid(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
        }
    }
    private _clrTint(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.9 : 0.1,
            s: hslVal.s * 0.5,
        }
    }
}
