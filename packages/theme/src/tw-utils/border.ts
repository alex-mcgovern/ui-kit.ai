import { genVarName, type VarName } from '../css-vars'
import { Color, Intent, TwBorderUtility } from '../types'

const MAP: Record<TwBorderUtility, VarName> = {
    [TwBorderUtility.FIELD_HOVER]: genVarName(Intent.DEFAULT, Color.BORDER_FIELD_HOVER),
    [TwBorderUtility.DEFAULT]: genVarName(Intent.DEFAULT, Color.BORDER_DEFAULT),
    [TwBorderUtility.FIELD]: genVarName(Intent.DEFAULT, Color.BORDER_FIELD),
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
