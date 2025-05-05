import { genVarName } from '../css-vars'
import { Color } from '../types'
import { Intent } from '../types'

export function genIntentUtils(): string {
    return Object.values(Intent)
        .map((intent) => {
            return `@utility ${intent} {\n${getStyles(intent)}\n}`
        })
        .join('\n')
}

function getMap(intent: Intent) {
    return Object.fromEntries(
        Object.values(Color).map((color) => [
            genVarName(Intent.DEFAULT, color),
            genVarName(intent, color),
        ])
    )
}

function getStyles(intent: Intent): string {
    return Object.entries(getMap(intent))
        .map(([from, to]) => {
            return `\t${from}: var(${to});`
        })
        .join('\n')
}
