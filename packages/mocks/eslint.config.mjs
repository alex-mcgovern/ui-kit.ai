import uiKitEslintConfig from '@ui-kit.ai/eslint'

const config = [
    ...uiKitEslintConfig(import.meta.dirname),
    {
        ignores: ['node_modules', 'dist', '.turbo', 'vite.config.mjs.timestamp-*.mjs'],
    },
]

export default config
