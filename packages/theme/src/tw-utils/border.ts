import { genVarName, type VarName } from '../css-vars'
import { Color, Intent, TwBorderUtility } from '../types'

const MAP: Record<TwBorderUtility, VarName> = {
    [TwBorderUtility.DARK]: genVarName(Intent.DEFAULT, Color.BORDER_DARK),
    [TwBorderUtility.LIGHT]: genVarName(Intent.DEFAULT, Color.BORDER_LIGHT),
    [TwBorderUtility.MID]: genVarName(Intent.DEFAULT, Color.BORDER_MID),
}

export function generateBorderUtilitiesCSS(): string {
    return Object.entries(MAP)
        .map(([utility, varName]) => {
            return `@utility ${utility} {\n\tborder-color: var(${varName});\n}`
        })
        .join('\n')
}
