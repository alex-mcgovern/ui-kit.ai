/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */
import { converter, formatHsl, type Hsl, hsl } from 'culori'

export type ColorPaletteInput = {
    accent: string
    error: string
    gray?: string
    success: string
    warning: string
}

export const DEFAULT_COLOR_PALETTE_INPUT: ColorPaletteInput = {
    accent: '#5B5BD6',
    error: '#E54666',
    success: '#29A383',
    warning: '#FFC53D',
} as const

export class ColorPalette {
    private accentHsl: Hsl
    private errorHsl: Hsl
    private grayHsl: Hsl
    private successHsl: Hsl
    private readonly vendorToHsl = converter('hsl')
    private warningHsl: Hsl

    constructor({ accent, error, gray, success, warning }: ColorPaletteInput) {
        this.accentHsl = this._hexToHsl(accent)
        this.successHsl = this._hexToHsl(success)
        this.warningHsl = this._hexToHsl(warning)
        this.errorHsl = this._hexToHsl(error)
        this.grayHsl = gray != null ? this._hexToHsl(gray) : this._deriveGray(this.accentHsl)
    }

    public css({
        overrideTwColors,
        selector,
        useTwUtilities = true,
    }: {
        overrideTwColors: boolean
        selector: string
        useTwUtilities: boolean
    }) {
        return `
      ${selector} {
        ${overrideTwColors ? `--color-*: initial; /* override/reset tailwind colors */` : ''}
  
        ${Object.entries(this.palette(this.grayHsl, this.accentHsl))
            .map(([colorName, [light, dark]]) => {
                return `--color-${colorName}: light-dark(${light}, ${dark});`
            })
            .join('\n')}

        ${Object.entries(this.syntaxPalette())
            .map(([colorName, [light, dark]]) => {
                return `--color-${colorName}: light-dark(${light}, ${dark});`
            })
            .join('\n')}

      }

      ${useTwUtilities ? '@utility ' : '.'}error {
        ${Object.entries(this.palette(this.errorHsl, this.errorHsl))
            .map(([colorName, [light, dark]]) => {
                return `--color-${colorName}: light-dark(${light}, ${dark}) ${useTwUtilities === false ? '!important' : ''};`
            })
            .join('\n')}
      }
      ${useTwUtilities ? '@utility ' : '.'}warning {
        ${Object.entries(this.palette(this.warningHsl, this.warningHsl))
            .map(([colorName, [light, dark]]) => {
                return `--color-${colorName}: light-dark(${light}, ${dark}) ${useTwUtilities === false ? '!important' : ''};`
            })
            .join('\n')}
      }
      ${useTwUtilities ? '@utility ' : '.'}success {
        ${Object.entries(this.palette(this.successHsl, this.successHsl))
            .map(([colorName, [light, dark]]) => {
                return `--color-${colorName}: light-dark(${light}, ${dark}) ${useTwUtilities === false ? '!important' : ''};`
            })
            .join('\n')}
      }
    `
    }

    public palette(gray: Hsl, accent: Hsl) {
        return {
            ///////////////////////////////////////////////////
            // Background
            ///////////////////////////////////////////////////

            background: [
                this._formatHsl(this._bg(gray, 'light')),
                this._formatHsl(this._bg(gray, 'dark')),
            ],
            'background-raised': [
                this._formatHsl(this._bgRaised(gray, 'light')),
                this._formatHsl(this._bgRaised(gray, 'dark')),
            ],
            'background-inverted': [
                this._formatHsl(this._textHiContrast(gray, 'light')),
                this._formatHsl(this._textHiContrast(gray, 'dark')),
            ],

            ///////////////////////////////////////////////////
            // Text
            ///////////////////////////////////////////////////

            'hi-contrast': [
                this._formatHsl(this._textHiContrast(gray, 'light')),
                this._formatHsl(this._textHiContrast(gray, 'dark')),
            ],
            'mid-contrast': [
                this._formatHsl(this._textMidContrast(gray, 'light')),
                this._formatHsl(this._textMidContrast(gray, 'dark')),
            ],
            'lo-contrast': [
                this._formatHsl(this._textLoContrast(gray, 'light')),
                this._formatHsl(this._textLoContrast(gray, 'dark')),
            ],
            inverted: [
                this._formatHsl(this._bg(gray, 'light')),
                this._formatHsl(this._bg(gray, 'dark')),
            ],

            ///////////////////////////////////////////////////
            // Tint
            ///////////////////////////////////////////////////

            tint: [
                this._formatHsl(this._tint(gray, 'light')),
                this._formatHsl(this._tint(gray, 'dark')),
            ],
            'tint-dark': [
                this._formatHsl(this._shade('light', this._tint(gray, 'light'))),
                this._formatHsl(this._shade('light', this._tint(gray, 'dark'))),
            ],
            'tint-light': [
                this._formatHsl(this._shade('light', this._tint(gray, 'light'))),
                this._formatHsl(this._shade('light', this._tint(gray, 'dark'))),
            ],

            ///////////////////////////////////////////////////
            // Accent
            ///////////////////////////////////////////////////

            [`accent`]: [
                this._formatHsl(this._deriveAccent(accent, 'light')),
                this._formatHsl(this._deriveAccent(accent, 'dark')),
            ],
            [`accent-dark`]: [
                this._formatHsl(this._shade('dark', this._deriveAccent(accent, 'light'))),
                this._formatHsl(this._shade('dark', this._deriveAccent(accent, 'dark'))),
            ],
            [`accent-light`]: [
                this._formatHsl(this._shade('light', this._deriveAccent(accent, 'light'))),
                this._formatHsl(this._shade('light', this._deriveAccent(accent, 'dark'))),
            ],
            [`accent-fg`]: [
                this._formatHsl(this._fg(this._deriveAccent(accent, 'light'))),
                this._formatHsl(this._fg(this._deriveAccent(accent, 'dark'))),
            ],

            'accent-tint': [
                this._formatHsl(this._tint(this._deriveAccent(accent, 'light'), 'light')),
                this._formatHsl(this._tint(this._deriveAccent(accent, 'dark'), 'dark')),
            ],
            'accent-tint-dark': [
                this._formatHsl(
                    this._shade('dark', this._tint(this._deriveAccent(accent, 'light'), 'light'))
                ),
                this._formatHsl(
                    this._shade('dark', this._tint(this._deriveAccent(accent, 'dark'), 'dark'))
                ),
            ],
            'accent-tint-light': [
                this._formatHsl(
                    this._shade('light', this._tint(this._deriveAccent(accent, 'light'), 'light'))
                ),
                this._formatHsl(
                    this._shade('light', this._tint(this._deriveAccent(accent, 'dark'), 'dark'))
                ),
            ],

            'accent-tint-fg': [
                this._formatHsl(this._fg(this._tint(this._deriveAccent(accent, 'light'), 'light'))),
                this._formatHsl(this._fg(this._tint(this._deriveAccent(accent, 'dark'), 'dark'))),
            ],
        } as const
    }

    public syntaxPalette() {
        return {
            'syntax-1': [
                this._formatHsl(this._textHiContrast(this.accentHsl, 'light')),
                this._formatHsl(this._textHiContrast(this.accentHsl, 'dark')),
            ],
            'syntax-2': [
                this._formatHsl(this._textHiContrast(this.grayHsl, 'light')),
                this._formatHsl(this._textHiContrast(this.grayHsl, 'dark')),
            ],
            'syntax-3': [
                this._formatHsl(this._shade('light', this.errorHsl)),
                this._formatHsl(this._shade('light', this.errorHsl)),
            ],
            [`syntax-4`]: [
                this._formatHsl(this._shade('dark', this._deriveAccent(this.accentHsl, 'light'))),
                this._formatHsl(this._shade('dark', this._deriveAccent(this.accentHsl, 'dark'))),
            ],
        } as const
    }

    private _bg(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hsl,
            l: mode === 'light' ? 0.975 : 0.055,
            s: 0.05,
        }
    }

    private _bgRaised(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hsl,
            l: mode === 'light' ? 0.9825 : 0.0675,
            s: 0.05,
        }
    }

    private _deriveAccent(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        let l = hslVal.l
        if (mode === 'dark' && l < 0.3) {
            l = 0.9
        }
        if (mode === 'light' && l > 0.8) {
            l = 0.1
        }

        return { ...hslVal, l }
    }

    private _deriveGray(hslVal: Hsl): Hsl {
        return { ...hslVal, s: 0.15 }
    }

    private _fg(hslVal: Hsl): Hsl {
        return {
            ...hslVal,
            l: hslVal.l > 0.6 ? 0.05 : 0.95,
            s: 0.5,
        }
    }

    private _formatHsl(hslVal: Hsl) {
        return formatHsl(hsl(hslVal))
    }

    private _hexToHsl(hex: string): Hsl {
        const hslRepr = this.vendorToHsl(hex)
        if (hslRepr == null) {
            throw new Error(`Invalid hex color: ${hex}`)
        }
        return hslRepr
    }

    /**
     * Accepts a color, and returns a lightened or darkened shade,
     * e.g. given a accent color, returns light/dark variants suitable for
     * hover/pressed states.
     */
    private _shade(modifier: 'dark' | 'light', hslVal: Hsl): Hsl {
        const factor = modifier === 'light' ? 1.05 : 0.95
        const newL = Math.max(0.025, Math.min(0.975, hslVal.l * factor))
        return { ...hslVal, l: newL }
    }

    private _textHiContrast(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.25 : 0.85,
        }
    }

    private _textLoContrast(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.675 : 0.4,
        }
    }

    private _textMidContrast(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.45 : 0.55,
        }
    }

    /**
     * Accepts a color, and returns a color that is much closer to the background
     * color, suitable for use as a background color for a list element.
     */
    private _tint(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.85 : 0.15,
            s: hslVal.s * 0.9,
        }
    }
}
