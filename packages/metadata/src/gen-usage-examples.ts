import * as composedComponentsMap from '@ui-kit.ai/storybook'
import * as fs from 'node:fs'
import * as path from 'node:path'

const outputPath = path.resolve(import.meta.dirname, '..', 'dist', 'usage-examples.json')

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

const NO_DISPLAY_NAME_SIGNAL = 'NO_DISPLAY_NAME_SIGNAL'

const JSX_STRING_OPTIONS = {
    // displayName(element: ReactNode) {
    //     if (typeof element === 'string') return element
    //     if (typeof element === 'object' && element !== null && 'type' in element) {
    //         const type = (element as { type: unknown }).type
    //         if (typeof type === 'string') return type
    //         // Handle forwardRef components
    //         if (typeof type === 'object' && type !== null && 'render' in type) {
    //             const render = (type as { render: { displayName?: string } }).render
    //             if (render.displayName != null) return render.displayName
    //         }
    //         if (typeof type === 'function') {
    //             const displayName = (type as unknown as { displayName: string }).displayName
    //             if (displayName) return displayName
    //             const name = (type as { name: string }).name
    //             if (name) return name
    //         }
    //     }
    //     return NO_DISPLAY_NAME_SIGNAL
    // },
    filterProps(_value, key) {
        return key !== 'data-testid' && key !== 'key'
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    functionValue: (fn: Function) => fn.toString(),
    maxInlineAttributesLineLength: 30,
    showDefaultProps: false,
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

    for (const [componentName, composedStories] of Object.entries(composedComponentsMap)) {
        const composed: Record<string, string> = {}

        for (const [storyName, Story] of Object.entries(composedStories)) {
            const jsx = reactElementToJSXString((Story as () => ReactNode)(), JSX_STRING_OPTIONS)
            if (jsx.includes('React.Fragment'))
                throw Error(
                    `React.Fragment found in ${componentName} ${(Story as StoryFn).storyName}\n\n${jsx}`
                )
            if (jsx.includes(NO_DISPLAY_NAME_SIGNAL))
                throw Error(
                    `Missing display name found in ${componentName} ${(Story as StoryFn).storyName}\n\n${jsx}`
                )
            let formatted = await format(jsx, {
                ...prettierOptions,
                parser: 'babel',
            })
            if (formatted.startsWith(`;`)) formatted = formatted.slice(1)

            composed[storyName] = formatted
        }

        examples[componentName] = composed
    }

    fs.writeFileSync(outputPath, JSON.stringify(examples, null, 2), 'utf-8')
    console.info('✅ Component usage JSON generated successfully.')
}

main()
