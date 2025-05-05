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

export function generateBgUtilitiesCSS(): string {
    return Object.entries(MAP)
        .map(([utility, varName]) => {
            return `@utility ${utility} {\n\tbackground-color: var(${varName});\n}`
        })
        .join('\n')
}
