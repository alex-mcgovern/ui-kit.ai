import { prettierTailwind } from '@ui-kit.ai/prettier/tailwind'

/**
 * @type {import("prettier").Config}
 */
// @ts-expect-error - some issue with extending the config
const config = {
    ...prettierTailwind,
    tailwindConfig: './tailwind.config.ts',
}

export default config
