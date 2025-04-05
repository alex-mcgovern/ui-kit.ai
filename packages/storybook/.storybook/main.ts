import type { StorybookConfig } from '@storybook/react-vite'

import { withoutVitePlugins } from '@storybook/builder-vite'

const excludedProps = new Set([
    'id',
    'onBeforeInput',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onCopy',
    'onCut',
    'onInput',
    'onPaste',
    'onSelect',
    'slot',
])

const config: StorybookConfig = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        'storycap',
    ],
    babelDefault: {},
    docs: {
        autodocs: true,
    },

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            propFilter: (prop) => {
                return !prop.name.startsWith('aria-') && !excludedProps.has(prop.name)
            },
            shouldExtractLiteralValuesFromEnum: true,
            shouldIncludeExpression: false,
        },
    },
    async viteFinal(config) {
        return {
            ...config,
            plugins: [...(await withoutVitePlugins(config.plugins, ['vite:dts']))],
        }
    },
}
export default config
