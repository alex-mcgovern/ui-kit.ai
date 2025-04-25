import uiKitEslintConfig from '@ui-kit.ai/eslint'

const config = [
    ...uiKitEslintConfig(import.meta.dirname),
    {
        ignores: ['node_modules', 'dist', '.turbo'],
    },
]

export default config
