import { genVarName, type VarName } from '../css-vars'
import { Color, Intent, TwBorderUtility } from '../types'

const MAP: Record<TwBorderUtility, VarName> = {
    [TwBorderUtility.DARK]: genVarName(Intent.DEFAULT, Color.BORDER_DARK),
    [TwBorderUtility.LIGHT]: genVarName(Intent.DEFAULT, Color.BORDER_LIGHT),
    [TwBorderUtility.MID]: genVarName(Intent.DEFAULT, Color.BORDER_MID),
}

const template = (utility: string, varName: string): string => `
@utility ${utility} {
  border-color: var(${varName})
}
@utility ${utility}-* {
  --alpha: calc(--modifier(integer) * 1%);
  border-color: --alpha(--value(${varName}, [color]) / var(--alpha, 100%));
}
`

export function generateBorderUtilitiesCSS(): string {
    return Object.entries(MAP)
        .map(([utility, varName]) => {
            return template(utility, varName)
        })
        .join('\n')
}
