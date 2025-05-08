import { genVarName, type VarName } from '../css-vars'
import { Color, Intent, TwBgUtility } from '../types'

const MAP: Record<TwBgUtility, VarName> = {
    [TwBgUtility.ACCENT]: genVarName(Intent.DEFAULT, Color.BG_ACCENT),
    [TwBgUtility.ACCENT_DARK]: genVarName(Intent.DEFAULT, Color.BG_ACCENT_DARK),
    [TwBgUtility.ACCENT_LIGHT]: genVarName(Intent.DEFAULT, Color.BG_ACCENT_LIGHT),
    [TwBgUtility.BASE]: genVarName(Intent.DEFAULT, Color.BG_BASE),
    [TwBgUtility.RAISED]: genVarName(Intent.DEFAULT, Color.BG_RAISED),
    [TwBgUtility.TINT]: genVarName(Intent.DEFAULT, Color.BG_TINT),
    [TwBgUtility.TINT_DARK]: genVarName(Intent.DEFAULT, Color.BG_TINT_DARK),
    [TwBgUtility.TINT_LIGHT]: genVarName(Intent.DEFAULT, Color.BG_TINT_LIGHT),
}

const template = (utility: string, varName: string): string => `
@utility ${utility} {
  background-color: var(${varName})
}
@utility ${utility}-* {
  --alpha: calc(--modifier(integer) * 1%);
  background-color: --alpha(--value(${varName}, [color]) / var(--alpha, 100%));
}
`

export function generateBgUtilitiesCSS(): string {
    return Object.entries(MAP)
        .map(([utility, varName]) => {
            return template(utility, varName)
        })
        .join('\n')
}
