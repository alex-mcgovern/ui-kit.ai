/* eslint-disable perfectionist/sort-objects */
import { converter, formatHsl, type Hsl, hsl } from 'culori'

export class ColorPalette {
  private brandHsl: Hsl
  private errorHsl: Hsl
  private grayHsl: Hsl
  private successHsl: Hsl
  private readonly vendorToHsl = converter('hsl')
  private warningHsl: Hsl

  constructor({
    brandHex,
    errorHex,
    grayHex,
    successHex,
    warningHex,
  }: {
    brandHex: string
    errorHex: string
    grayHex?: string
    successHex: string
    warningHex: string
  }) {
    this.brandHsl = this._hexToHsl(brandHex)
    this.successHsl = this._hexToHsl(successHex)
    this.warningHsl = this._hexToHsl(warningHex)
    this.errorHsl = this._hexToHsl(errorHex)
    this.grayHsl =
      grayHex != null
        ? this._hexToHsl(grayHex)
        : this._deriveGray(this.brandHsl)
  }

  public css({
    overrideTwColors,
    selector,
  }: {
    overrideTwColors: boolean
    selector: string
  }) {
    return `
      ${selector} {
        ${
          overrideTwColors
            ? `--color-*: initial; /* override/reset tailwind colors */`
            : ''
        }
  
        ${Object.entries(this.palette())
          .map(([colorName, [light, dark]]) => {
            return `--color-${colorName}: light-dark(${light}, ${dark});`
          })
          .join('\n')}
      }
    `
  }

  public palette() {
    return {
      ///////////////////////////////////////////////////
      // Background
      ///////////////////////////////////////////////////

      background: [
        this._formatHsl(this._bg('light')),
        this._formatHsl(this._bg('dark')),
      ],
      'background-raised': [
        this._formatHsl(this._bgRaised('light')),
        this._formatHsl(this._bgRaised('dark')),
      ],
      'background-inverted': [
        this._formatHsl(this._textHiContrast('light')),
        this._formatHsl(this._textHiContrast('dark')),
      ],

      ///////////////////////////////////////////////////
      // Text
      ///////////////////////////////////////////////////

      'hi-contrast': [
        this._formatHsl(this._textHiContrast('light')),
        this._formatHsl(this._textHiContrast('dark')),
      ],
      'mid-contrast': [
        this._formatHsl(this._textMidContrast()),
        this._formatHsl(this._textMidContrast()),
      ],
      'lo-contrast': [
        this._formatHsl(this._textLoContrast('light')),
        this._formatHsl(this._textLoContrast('dark')),
      ],
      inverted: [
        this._formatHsl(this._bg('light')),
        this._formatHsl(this._bg('dark')),
      ],

      ///////////////////////////////////////////////////
      // Tint
      ///////////////////////////////////////////////////

      tint: [
        this._formatHsl(this._tint(this.grayHsl, 'light')),
        this._formatHsl(this._tint(this.grayHsl, 'dark')),
      ],
      'tint-dark': [
        this._formatHsl(
          this._shade('light', this._tint(this.grayHsl, 'light'))
        ),
        this._formatHsl(this._shade('light', this._tint(this.grayHsl, 'dark'))),
      ],
      'tint-light': [
        this._formatHsl(
          this._shade('light', this._tint(this.grayHsl, 'light'))
        ),
        this._formatHsl(this._shade('light', this._tint(this.grayHsl, 'dark'))),
      ],

      ///////////////////////////////////////////////////
      // Brand
      ///////////////////////////////////////////////////

      [`brand`]: [
        this._formatHsl(this.brandHsl),
        this._formatHsl(this.brandHsl),
      ],
      [`brand-dark`]: [
        this._formatHsl(this._shade('dark', this.brandHsl)),
        this._formatHsl(this._shade('dark', this.brandHsl)),
      ],
      [`brand-light`]: [
        this._formatHsl(this._shade('light', this.brandHsl)),
        this._formatHsl(this._shade('light', this.brandHsl)),
      ],
      [`brand-fg`]: [
        this._formatHsl(this._fg(this.brandHsl)),
        this._formatHsl(this._fg(this.brandHsl)),
      ],

      'brand-tint': [
        this._formatHsl(this._tint(this.brandHsl, 'light')),
        this._formatHsl(this._tint(this.brandHsl, 'dark')),
      ],
      'brand-tint-dark': [
        this._formatHsl(
          this._shade('light', this._tint(this.brandHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.brandHsl, 'dark'))
        ),
      ],
      'brand-tint-light': [
        this._formatHsl(
          this._shade('light', this._tint(this.brandHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.brandHsl, 'dark'))
        ),
      ],

      'brand-tint-fg': [
        this._formatHsl(this._fg(this._tint(this.brandHsl, 'light'))),
        this._formatHsl(this._fg(this._tint(this.brandHsl, 'dark'))),
      ],

      ///////////////////////////////////////////////////
      // Error
      ///////////////////////////////////////////////////

      [`error`]: [
        this._formatHsl(this.errorHsl),
        this._formatHsl(this.errorHsl),
      ],
      [`error-dark`]: [
        this._formatHsl(this._shade('dark', this.errorHsl)),
        this._formatHsl(this._shade('dark', this.errorHsl)),
      ],
      [`error-light`]: [
        this._formatHsl(this._shade('light', this.errorHsl)),
        this._formatHsl(this._shade('light', this.errorHsl)),
      ],
      [`error-fg`]: [
        this._formatHsl(this._fg(this.errorHsl)),
        this._formatHsl(this._fg(this.errorHsl)),
      ],

      'error-tint': [
        this._formatHsl(this._tint(this.errorHsl, 'light')),
        this._formatHsl(this._tint(this.errorHsl, 'dark')),
      ],
      'error-tint-dark': [
        this._formatHsl(
          this._shade('light', this._tint(this.errorHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.errorHsl, 'dark'))
        ),
      ],
      'error-tint-light': [
        this._formatHsl(
          this._shade('light', this._tint(this.errorHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.errorHsl, 'dark'))
        ),
      ],

      'error-tint-fg': [
        this._formatHsl(this._fg(this._tint(this.errorHsl, 'light'))),
        this._formatHsl(this._fg(this._tint(this.errorHsl, 'dark'))),
      ],

      ///////////////////////////////////////////////////
      // Warning
      ///////////////////////////////////////////////////

      [`warning`]: [
        this._formatHsl(this.warningHsl),
        this._formatHsl(this.warningHsl),
      ],
      [`warning-dark`]: [
        this._formatHsl(this._shade('dark', this.warningHsl)),
        this._formatHsl(this._shade('dark', this.warningHsl)),
      ],
      [`warning-light`]: [
        this._formatHsl(this._shade('light', this.warningHsl)),
        this._formatHsl(this._shade('light', this.warningHsl)),
      ],
      [`warning-fg`]: [
        this._formatHsl(this._fg(this.warningHsl)),
        this._formatHsl(this._fg(this.warningHsl)),
      ],

      'warning-tint': [
        this._formatHsl(this._tint(this.warningHsl, 'light')),
        this._formatHsl(this._tint(this.warningHsl, 'dark')),
      ],
      'warning-tint-dark': [
        this._formatHsl(
          this._shade('light', this._tint(this.warningHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.warningHsl, 'dark'))
        ),
      ],
      'warning-tint-light': [
        this._formatHsl(
          this._shade('light', this._tint(this.warningHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.warningHsl, 'dark'))
        ),
      ],

      'warning-tint-fg': [
        this._formatHsl(this._fg(this._tint(this.warningHsl, 'light'))),
        this._formatHsl(this._fg(this._tint(this.warningHsl, 'dark'))),
      ],

      ///////////////////////////////////////////////////
      // Success
      ///////////////////////////////////////////////////

      [`success`]: [
        this._formatHsl(this.successHsl),
        this._formatHsl(this.successHsl),
      ],
      [`success-dark`]: [
        this._formatHsl(this._shade('dark', this.successHsl)),
        this._formatHsl(this._shade('dark', this.successHsl)),
      ],
      [`success-light`]: [
        this._formatHsl(this._shade('light', this.successHsl)),
        this._formatHsl(this._shade('light', this.successHsl)),
      ],
      [`success-fg`]: [
        this._formatHsl(this._fg(this.successHsl)),
        this._formatHsl(this._fg(this.successHsl)),
      ],

      'success-tint': [
        this._formatHsl(this._tint(this.successHsl, 'light')),
        this._formatHsl(this._tint(this.successHsl, 'dark')),
      ],
      'success-tint-dark': [
        this._formatHsl(
          this._shade('light', this._tint(this.successHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.successHsl, 'dark'))
        ),
      ],
      'success-tint-light': [
        this._formatHsl(
          this._shade('light', this._tint(this.successHsl, 'light'))
        ),
        this._formatHsl(
          this._shade('light', this._tint(this.successHsl, 'dark'))
        ),
      ],

      'success-tint-fg': [
        this._formatHsl(this._fg(this._tint(this.successHsl, 'light'))),
        this._formatHsl(this._fg(this._tint(this.successHsl, 'dark'))),
      ],
    } as const
  }

  private _bg(mode: 'dark' | 'light'): Hsl {
    return {
      ...this.grayHsl,
      l: mode === 'light' ? 0.975 : 0.025,
      s: 0.05,
    }
  }

  private _bgRaised(mode: 'dark' | 'light'): Hsl {
    return {
      ...this.grayHsl,
      l: mode === 'light' ? 0.9825 : 0.0675,
      s: 0.05,
    }
  }

  private _deriveGray(hsl: Hsl): Hsl {
    return { ...hsl, s: 0.2 }
  }

  private _fg(hsl: Hsl): Hsl {
    return {
      ...hsl,
      l: hsl.l > 0.6 ? 0.05 : 0.95,
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
   * e.g. given a brand color, returns light/dark variants suitable for
   * hover/pressed states.
   */
  private _shade(modifier: 'dark' | 'light', hsl: Hsl): Hsl {
    const factor = modifier === 'light' ? 1.1 : 0.9
    const newL = Math.max(0.05, Math.min(0.95, hsl.l * factor))
    return { ...hsl, l: newL }
  }

  private _textHiContrast(mode: 'dark' | 'light'): Hsl {
    return {
      ...this.grayHsl,
      l: mode === 'light' ? 0.2 : 0.975,
    }
  }

  private _textLoContrast(mode: 'dark' | 'light'): Hsl {
    return {
      ...this.grayHsl,
      l: mode === 'light' ? 0.675 : 0.4,
    }
  }

  private _textMidContrast(): Hsl {
    return {
      ...this.grayHsl,
      l: 0.5,
    }
  }

  /**
   * Accepts a color, and returns a color that is much closer to the background
   * color, suitable for use as a background color for a list element.
   */
  private _tint(hsl: Hsl, mode: 'dark' | 'light'): Hsl {
    return {
      ...hsl,
      l: mode === 'light' ? 0.925 : 0.15,
      s: hsl.s * 0.8,
    }
  }
}
