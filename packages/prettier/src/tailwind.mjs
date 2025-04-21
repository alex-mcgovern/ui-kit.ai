import { prettierBase } from './base.mjs'
/**
 * @type {import("prettier").Config}
 */
export const prettierTailwind = {
    ...prettierBase,
    customFunctions: ['tv', 'twMerge', 'composeTailwindRenderProps'],
    plugins: [
        ...(prettierBase.plugins != null ? prettierBase.plugins : []),
        'prettier-plugin-tailwindcss',
        'prettier-plugin-classnames',
        'prettier-plugin-merge',
    ],
    tailwindFunctions: ['tv', 'twMerge', 'composeTailwindRenderProps'],
}
