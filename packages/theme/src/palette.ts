/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */
import type { Hsl } from 'culori'

import { converter } from 'culori'

import type { ColorPaletteInput } from './types'

import { generateThemeVars } from './css-vars'
import { generatePalette } from './generate-palette'
import { genSyntaxCssVars } from './generate-syntax-css-vars'
import { PRESETS } from './presets'
import { genIntentUtils } from './tw-utils/intent'

export const DEFAULT_COLOR_PALETTE_INPUT = PRESETS.professional

export class ColorPalette {
    public accentHsl: Hsl
    public errorHsl: Hsl
    public successHsl: Hsl
    public warningHsl: Hsl
    private readonly vendorToHsl = converter('hsl')

    constructor({ accent, error, success, warning }: ColorPaletteInput) {
        this.accentHsl = this._clrHexToHsl(accent)
        this.successHsl = this._clrHexToHsl(success)
        this.warningHsl = this._clrHexToHsl(warning)
        this.errorHsl = this._clrHexToHsl(error)
    }

    public css({ overrideTwColors, selector }: { overrideTwColors: boolean; selector: string }) {
        const themeVars = generateThemeVars({
            default: generatePalette(this.accentHsl, { shouldUseVibrantShades: false }),
            info: generatePalette(this.accentHsl, { shouldUseVibrantShades: true }),
            error: generatePalette(this.errorHsl, { shouldUseVibrantShades: true }),
            success: generatePalette(this.successHsl, { shouldUseVibrantShades: true }),
            warning: generatePalette(this.warningHsl, { shouldUseVibrantShades: true }),
        })

        const syntaxVars = genSyntaxCssVars({
            accentHsl: this.accentHsl,
            errorHsl: this.errorHsl,
            successHsl: this.successHsl,
        })

        const lightVars = { ...themeVars.lightVars, ...syntaxVars.lightVars }
        const darkVars = { ...themeVars.darkVars, ...syntaxVars.darkVars }
        const inlineVars = { ...themeVars.inlineVars, ...syntaxVars.inlineVars }

        const serializeLightVars = () =>
            Object.entries(lightVars)
                .map(([key, value]) => `  ${key}: ${value};`)
                .join('\n')

        const serializeDarkVars = () =>
            Object.entries(darkVars)
                .map(([key, value]) => `  ${key}: ${value};`)
                .join('\n')

        const serializeInlineVars = () =>
            Object.entries(inlineVars)
                .map(([key, value]) => `  ${key}: ${value};`)
                .join('\n')

        return `:root {
${serializeLightVars()}
}

@media (prefers-color-scheme: dark) {
  :root {
${serializeDarkVars()}
  }
}

${selector} {
  ${overrideTwColors ? `--color-*: initial; /* override/reset tailwind colors */` : ''}
${serializeInlineVars()}
}
@utility bg-* {
  background-color: --value(--theme-default-bg-*, [color]);
  background-color: --alpha(--value(--theme-default-bg-*, [color]) / calc(--modifier(integer) * 1%));
}
@utility text-* {
  color: --value(--theme-default-text-*, [color]);
  color: --alpha(--value(--theme-default-text-*, [color]) / calc(--modifier(integer) * 1%));
}
@utility border-* {
  border-color: --value(--theme-default-border-*, [color]);
  border-color: --alpha(--value(--theme-default-border-*, [color]) / calc(--modifier(integer) * 1%));
}

${genIntentUtils()}
`
    }

    private _clrHexToHsl(hex: string): Hsl {
        const hslRepr = this.vendorToHsl(hex)
        if (hslRepr == null) {
            throw new Error(`Invalid hex color: ${hex}`)
        }
        return hslRepr
    }
}
