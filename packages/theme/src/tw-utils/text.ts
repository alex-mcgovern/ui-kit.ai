import { genVarName, type VarName } from '../css-vars'
import { Color } from '../types'
import { Intent, TwTextUtility } from '../types'

const MAP: Record<TwTextUtility, VarName> = {
    [TwTextUtility.ACCENT]: genVarName(Intent.DEFAULT, Color.TEXT_ACCENT),
    [TwTextUtility.DARK]: genVarName(Intent.DEFAULT, Color.TEXT_DARK),
    [TwTextUtility.LIGHT]: genVarName(Intent.DEFAULT, Color.TEXT_LIGHT),
    [TwTextUtility.MID]: genVarName(Intent.DEFAULT, Color.TEXT_MID),
}

export function generateTextUtilitiesCSS(): string {
    return Object.entries(MAP)
        .map(([utility, varName]) => {
            return `@utility ${utility} {\n\tcolor: var(${varName});\n}`
        })
        .join('\n')
}
