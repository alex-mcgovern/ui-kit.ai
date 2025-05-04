// \t/*-------------------------------------------------
// \t/ Default theme color utility mapping
// \t/-------------------------------------------------*/
// ${Object.keys(this.palette(this.grayHsl, this.accentHsl))
//     .map((colorName, index) => {
//         const cssVar = Object.keys(defaultThemeVars)[index]
//         return `\t--color-${colorName}: var(${cssVar});`
//     })
//     .join('\n')}

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

export const DEFAULT_COLOR_PALETTE_INPUT = {
    // accent: '#3E63DD',
    accent: '#E6E0E0',
    // error: '#E54666',
    error: '#ECA7B6',
    // success: '#29A383',
    success: '#D6E0A9',
    // warning: '#FFC53D',
    warning: '#FFD675',
} as const satisfies ColorPaletteInput

export class ColorPalette {
    public accentHsl: Hsl
    public errorHsl: Hsl
    public grayHsl: Hsl
    public successHsl: Hsl
    public warningHsl: Hsl
    private readonly vendorToHsl = converter('hsl')

    constructor({ accent, error, gray, success, warning }: ColorPaletteInput) {
        this.accentHsl = this._hexToHsl(accent)
        this.successHsl = this._hexToHsl(success)
        this.warningHsl = this._hexToHsl(warning)
        this.errorHsl = this._hexToHsl(error)
        this.grayHsl = gray != null ? this._hexToHsl(gray) : this._deriveGray(this.accentHsl)
    }

    public css({ overrideTwColors, selector }: { overrideTwColors: boolean; selector: string }) {
        const defaultThemeVars = this.paletteToThemeVars(
            this.palette(this.grayHsl, this.accentHsl),
            'default'
        )

        const infoThemeVars = this.paletteToThemeVars(
            this.palette(this.accentHsl, this.accentHsl),
            'info'
        )

        const errorThemeVars = this.paletteToThemeVars(
            this.palette(this.errorHsl, this.errorHsl),
            'error'
        )

        const successThemeVars = this.paletteToThemeVars(
            this.palette(this.successHsl, this.successHsl),
            'success'
        )

        const warningThemeVars = this.paletteToThemeVars(
            this.palette(this.warningHsl, this.warningHsl),
            'warning'
        )

        return `
${selector} {
    ${overrideTwColors ? `--color-*: initial; /* override/reset tailwind colors */` : ''}
\t/*-------------------------------------------------
\t/ Default theme vars
\t/-------------------------------------------------*/
${Object.entries(defaultThemeVars)
    .map(([key, value]) => {
        return `\t${key}: ${value};`
    })
    .join('\n')}
\t/*-------------------------------------------------
\t/ Info theme vars
\t/-------------------------------------------------*/
${Object.entries(infoThemeVars)
    .map(([key, value]) => {
        return `\t${key}: ${value};`
    })
    .join('\n')}            
\t/*-------------------------------------------------
\t/ Error theme vars
\t/-------------------------------------------------*/
${Object.entries(errorThemeVars)
    .map(([key, value]) => {
        return `\t${key}: ${value};`
    })
    .join('\n')}            
\t/*-------------------------------------------------
\t/ Success theme vars
\t/-------------------------------------------------*/
${Object.entries(successThemeVars)
    .map(([key, value]) => {
        return `\t${key}: ${value};`
    })
    .join('\n')}
\t/*-------------------------------------------------
\t/ Warning theme vars
\t/-------------------------------------------------*/
${Object.entries(warningThemeVars)
    .map(([key, value]) => {
        return `\t${key}: ${value};`
    })
    .join('\n')}

\t/*-------------------------------------------------
\t/ Syntax theme color utility mapping
\t/-------------------------------------------------*/
${Object.entries(this.syntaxPalette())
    .map(([colorName, [light, dark]]) => {
        return `\t--color-${colorName}: light-dark(${light}, ${dark});`
    })
    .join('\n')}
}

/*-------------------------------------------------
/ Color utility classes
/-------------------------------------------------*/

@utility bg-base {
\tbackground-color: var(--theme-default-base);
}
@utility bg-raised {
\tbackground-color: var(--theme-default-raised);
}
@utility bg-tint-dark {
\tbackground-color: var(--theme-default-tint-dark);
}
@utility bg-tint {
\tbackground-color: var(--theme-default-tint);
}
@utility bg-tint-light {
\tbackground-color: var(--theme-default-tint-light);
}
@utility bg-accent-dark {
\tbackground-color: var(--theme-default-accent-dark);
}
@utility bg-accent {
\tbackground-color: var(--theme-default-accent);
}
@utility bg-accent-light {
\tbackground-color: var(--theme-default-accent-light);
}

@utility text-light {
\tcolor: var(--theme-default-lo-contrast);
}
@utility text-mid {
\tcolor: var(--theme-default-mid-contrast);
}
@utility text-dark {
\tcolor: var(--theme-default-hi-contrast);
}
@utility text-accent {
\tcolor: var(--theme-default-accent-fg);
}

@utility border-light {
\tborder-color: var(--theme-default-border-light);
}
@utility border-mid {
\tborder-color: var(--theme-default-border-mid);
}
@utility border-dark {
\tborder-color: var(--theme-default-border-dark);
}

/*-------------------------------------------------
/ Info semantic color utility mapping
/-------------------------------------------------*/
@utility info {
\t--theme-default-base: var(--theme-info-base);
\t--theme-default-raised: var(--theme-info-raised);
\t--theme-default-tint-dark: var(--theme-info-tint-dark);
\t--theme-default-tint: var(--theme-info-tint);
\t--theme-default-tint-light: var(--theme-info-tint-light);
\t--theme-default-accent-dark: var(--theme-info-accent-dark);
\t--theme-default-accent: var(--theme-info-accent);
\t--theme-default-accent-light: var(--theme-info-accent-light);

\t--theme-default-lo-contrast: var(--theme-info-lo-contrast);
\t--theme-default-mid-contrast: var(--theme-info-mid-contrast);
\t--theme-default-hi-contrast: var(--theme-info-hi-contrast);
\t--theme-default-accent-fg: var(--theme-info-accent-fg);

\t--theme-default-border-light: var(--theme-info-border-light);
\t--theme-default-border-mid: var(--theme-info-border-mid);
\t--theme-default-border-dark: var(--theme-info-border-dark);

}
/*-------------------------------------------------
/ Error semantic color utility mapping
/-------------------------------------------------*/
@utility error {
\t--theme-default-base: var(--theme-error-base);
\t--theme-default-raised: var(--theme-error-raised);
\t--theme-default-tint-dark: var(--theme-error-tint-dark);
\t--theme-default-tint: var(--theme-error-tint);
\t--theme-default-tint-light: var(--theme-error-tint-light);
\t--theme-default-accent-dark: var(--theme-error-accent-dark);
\t--theme-default-accent: var(--theme-error-accent);
\t--theme-default-accent-light: var(--theme-error-accent-light);

\t--theme-default-lo-contrast: var(--theme-error-lo-contrast);
\t--theme-default-mid-contrast: var(--theme-error-mid-contrast);
\t--theme-default-hi-contrast: var(--theme-error-hi-contrast);
\t--theme-default-accent-fg: var(--theme-error-accent-fg);

\t--theme-default-border-light: var(--theme-error-border-light);
\t--theme-default-border-mid: var(--theme-error-border-mid);
\t--theme-default-border-dark: var(--theme-error-border-dark);

}
/*-------------------------------------------------
/ Warning semantic color utility mapping
/-------------------------------------------------*/
@utility warning {
\t--theme-default-base: var(--theme-warning-base);
\t--theme-default-raised: var(--theme-warning-raised);
\t--theme-default-tint-dark: var(--theme-warning-tint-dark);
\t--theme-default-tint: var(--theme-warning-tint);
\t--theme-default-tint-light: var(--theme-warning-tint-light);
\t--theme-default-accent-dark: var(--theme-warning-accent-dark);
\t--theme-default-accent: var(--theme-warning-accent);
\t--theme-default-accent-light: var(--theme-warning-accent-light);

\t--theme-default-lo-contrast: var(--theme-warning-lo-contrast);
\t--theme-default-mid-contrast: var(--theme-warning-mid-contrast);
\t--theme-default-hi-contrast: var(--theme-warning-hi-contrast);
\t--theme-default-accent-fg: var(--theme-warning-accent-fg);

\t--theme-default-border-light: var(--theme-warning-border-light);
\t--theme-default-border-mid: var(--theme-warning-border-mid);
\t--theme-default-border-dark: var(--theme-warning-border-dark);

}
/*-------------------------------------------------
/ Success semantic color utility mapping
/-------------------------------------------------*/
@utility success { 
\t--theme-default-base: var(--theme-success-base);
\t--theme-default-raised: var(--theme-success-raised);
\t--theme-default-tint-dark: var(--theme-success-tint-dark);
\t--theme-default-tint: var(--theme-success-tint);
\t--theme-default-tint-light: var(--theme-success-tint-light);
\t--theme-default-accent-dark: var(--theme-success-accent-dark);
\t--theme-default-accent: var(--theme-success-accent);
\t--theme-default-accent-light: var(--theme-success-accent-light);

\t--theme-default-lo-contrast: var(--theme-success-lo-contrast);
\t--theme-default-mid-contrast: var(--theme-success-mid-contrast);
\t--theme-default-hi-contrast: var(--theme-success-hi-contrast);
\t--theme-default-accent-fg: var(--theme-success-accent-fg);

\t--theme-default-border-light: var(--theme-success-border-light);
\t--theme-default-border-mid: var(--theme-success-border-mid);
\t--theme-default-border-dark: var(--theme-success-border-dark);
}
`
    }

    public palette(gray: Hsl, accent: Hsl) {
        return {
            ///////////////////////////////////////////////////
            // Background
            ///////////////////////////////////////////////////

            base: [
                this._formatHsl(this._bg(gray, 'light')),
                this._formatHsl(this._bg(gray, 'dark')),
            ],
            raised: [
                this._formatHsl(this._bgRaised(gray, 'light')),
                this._formatHsl(this._bgRaised(gray, 'dark')),
            ],

            ///////////////////////////////////////////////////
            // Tint
            ///////////////////////////////////////////////////

            'tint-dark': [
                this._formatHsl(this._shade('dark', this._tint(gray, 'light'))),
                this._formatHsl(this._shade('dark', this._tint(gray, 'dark'))),
            ],
            tint: [
                this._formatHsl(this._tint(gray, 'light')),
                this._formatHsl(this._tint(gray, 'dark')),
            ],
            'tint-light': [
                this._formatHsl(this._shade('light', this._tint(gray, 'light'))),
                this._formatHsl(this._shade('light', this._tint(gray, 'dark'))),
            ],

            ///////////////////////////////////////////////////
            // Accent
            ///////////////////////////////////////////////////

            [`accent-dark`]: [
                this._formatHsl(this._shade('dark', this._deriveAccent(accent, 'light'))),
                this._formatHsl(this._shade('dark', this._deriveAccent(accent, 'dark'))),
            ],
            [`accent`]: [
                this._formatHsl(this._deriveAccent(accent, 'light')),
                this._formatHsl(this._deriveAccent(accent, 'dark')),
            ],
            [`accent-light`]: [
                this._formatHsl(this._shade('light', this._deriveAccent(accent, 'light'))),
                this._formatHsl(this._shade('light', this._deriveAccent(accent, 'dark'))),
            ],
            [`accent-fg`]: [
                this._formatHsl(this._fg(this._deriveAccent(accent, 'light'))),
                this._formatHsl(this._fg(this._deriveAccent(accent, 'dark'))),
            ],

            ///////////////////////////////////////////////////
            // Text
            ///////////////////////////////////////////////////

            'lo-contrast': [
                this._formatHsl(this._textLoContrast(gray, 'light')),
                this._formatHsl(this._textLoContrast(gray, 'dark')),
            ],
            'mid-contrast': [
                this._formatHsl(this._textMidContrast(gray, 'light')),
                this._formatHsl(this._textMidContrast(gray, 'dark')),
            ],
            'hi-contrast': [
                this._formatHsl(this._textHiContrast(gray, 'light')),
                this._formatHsl(this._textHiContrast(gray, 'dark')),
            ],

            ///////////////////////////////////////////////////
            // Text
            ///////////////////////////////////////////////////

            'border-light': [
                this._formatHsl(this._borderLight(gray, 'light')),
                this._formatHsl(this._borderLight(gray, 'dark')),
            ],
            'border-mid': [
                this._formatHsl(this._border(gray, 'light')),
                this._formatHsl(this._border(gray, 'dark')),
            ],
            'border-dark': [
                this._formatHsl(this._borderDark(gray, 'light')),
                this._formatHsl(this._borderDark(gray, 'dark')),
            ],
        } as const
    }

    public paletteToThemeVars(palette: ReturnType<ColorPalette['palette']>, prefix: string) {
        return Object.entries(palette).reduce(
            (acc, [key, [light, dark]]) => {
                acc[`--theme-${prefix}-${key}`] = `light-dark(${light}, ${dark})`
                return acc
            },
            {} as Record<string, string>
        )
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
                this._formatHsl(this._deriveAccent(this.accentHsl, 'light')),
                this._formatHsl(this._deriveAccent(this.accentHsl, 'dark')),
            ],
        } as const
    }

    private _bg(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hsl,
            l: mode === 'light' ? 0.9625 : 0.055,
            s: 0.05,
        }
    }

    private _bgRaised(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hsl,
            l: mode === 'light' ? 0.9825 : 0.0888,
            s: 0.05,
        }
    }

    private _border(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
            alpha: 0.2,
        }
    }

    private _borderDark(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
            alpha: 0.3,
        }
    }

    private _borderLight(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.4 : 0.6,
            alpha: 0.1,
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
        return { ...hslVal, s: 0.075 }
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
        const factor = 0.0375
        const appliedFactor = modifier === 'dark' ? -factor : factor
        const newL = Math.max(0.0125, Math.min(0.9875, hslVal.l + appliedFactor))
        return { ...hslVal, l: newL }
    }

    private _textHiContrast(hslVal: Hsl, mode: 'dark' | 'light'): Hsl {
        return {
            ...hslVal,
            l: mode === 'light' ? 0.2 : 0.8,
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
            l: mode === 'light' ? 0.9 : 0.1,
            s: hslVal.s * 0.75,
        }
    }
}
