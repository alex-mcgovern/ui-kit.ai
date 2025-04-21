import uiKitEslintConfig from '@ui-kit.ai/eslint'

/** @type {import('eslint').Linter.Config[]} */
const config = [
    ...uiKitEslintConfig(import.meta.dirname),
    {
        ignores: ['node_modules', 'dist', '.turbo'],
    },
]

export default config
