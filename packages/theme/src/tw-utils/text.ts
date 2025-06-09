import { genVarName, type VarName } from '../css-vars'
import { Color } from '../types'
import { Intent, TwTextUtility } from '../types'

const MAP: Record<TwTextUtility, VarName> = {
    [TwTextUtility.ACCENT]: genVarName(Intent.DEFAULT, Color.TEXT_ACCENT),
    [TwTextUtility.HI_CONTRAST]: genVarName(Intent.DEFAULT, Color.TEXT_HI_CONTRAST),
    [TwTextUtility.PLACEHOLDER]: genVarName(Intent.DEFAULT, Color.TEXT_PLACEHOLDER),
    [TwTextUtility.LO_CONTRAST]: genVarName(Intent.DEFAULT, Color.TEXT_LO_CONTRAST),
}

export function generateTextUtilitiesCSS(): string {
    return Object.entries(MAP)
        .map(([utility, varName]) => {
            return `@utility ${utility} {\n\tcolor: var(${varName});\n}`
        })
        .join('\n')
}
