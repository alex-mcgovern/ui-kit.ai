import type { Config } from 'tailwindcss'

import { tailwindPreset } from '@ui-kit.ai/components'

export default {
  content: [
    'node_modules/@ui-kit.ai/components/dist/**/*',
    './src/**/*',
    './.storybook/**/*',
  ],
  presets: [tailwindPreset],
} satisfies Config
