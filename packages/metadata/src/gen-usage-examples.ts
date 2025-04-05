import * as components from '@ui-kit.ai/storybook'
import * as fs from 'node:fs'
import * as path from 'node:path'

const outputPath = path.resolve(import.meta.dirname, '..', 'dist', 'usage-examples.json')

import { composeStories } from '@storybook/react'
import { format, resolveConfig, resolveConfigFile } from 'prettier'
import React, { type ReactNode } from 'react'
import { type Options as ReactElementToJsxStringOptions } from 'react-element-to-jsx-string'
global.React = React

type StoryFn = (() => ReactNode) & {
    [k: string]: unknown
} & {
    id: string
    parameters: {
        [k: string]: unknown
    } & {
        displayName: string
    }
    storyName: string
    tags: string[]
}

const JSX_STRING_OPTIONS = {
    filterProps(_value, key) {
        return key !== 'data-testid' && key !== 'key'
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    functionValue: (fn: Function) => fn.toString(),
    showFunctions: true,
    useBooleanShorthandSyntax: true,

    useFragmentShortSyntax: true,
} as const satisfies ReactElementToJsxStringOptions

async function main() {
    const prettierConfigPath = await resolveConfigFile(
        path.resolve(import.meta.dirname, '..', '.prettierrc.mjs')
    )
    if (prettierConfigPath == null) throw Error('Prettier config not found.')
    const prettierOptions = await resolveConfig(prettierConfigPath)

    const examples: Record<string, Record<string, string>> = {}

    // NOTE: Dynamic import seems to help avoid "function does not exist" errors
    const reactElementToJSXString = await (await import('react-element-to-jsx-string')).default

    for (const [componentName, stories] of Object.entries(components)) {
        try {
            const composedStories = composeStories(
                stories as Parameters<typeof composeStories>[0],
                {
                    applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
                }
            )

            const composed: Record<string, string> = {}

            for (const [storyName, Story] of Object.entries(composedStories)) {
                try {
                    let jsx = reactElementToJSXString(
                        (Story as () => ReactNode)(),
                        JSX_STRING_OPTIONS
                    )
                    if (jsx.includes('React.Fragment'))
                        throw Error(
                            `React.Fragment found in ${componentName} ${(Story as StoryFn).storyName}`
                        )
                    jsx = `export function MyComponent() {\nreturn (${jsx});\n}`
                    const formatted = await format(jsx, {
                        ...prettierOptions,
                        parser: 'babel',
                    })

                    composed[storyName] = formatted
                } catch (e) {
                    console.error(
                        `Error while formatting story ${storyName} of ${componentName}: ${e}`
                    )
                }
            }

            examples[componentName] = composed
        } catch (e) {
            console.error(`Error while processing ${componentName}: ${e}`)
        }
    }

    fs.writeFileSync(outputPath, JSON.stringify(examples, null, 2), 'utf-8')
    console.info('✅ Component usage JSON generated successfully.')
}

main()
