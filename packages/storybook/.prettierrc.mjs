import { prettierTailwind } from '@ui-kit.ai/prettier/tailwind'

/**
 * @type {import("prettier").Config}
 */
const config = {
    ...prettierTailwind,
    tailwindConfig: './tailwind.config.ts',
}

export default config
