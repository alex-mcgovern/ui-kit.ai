import type { Config } from 'tailwindcss'

import TailwindAnimate from 'tailwindcss-animate'
import TailwindReactAria from 'tailwindcss-react-aria-components'
import colors from 'tailwindcss/colors'

export const tailwindPreset: Partial<Config> = {
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
    ],
  ],
  plugins: [TailwindReactAria, TailwindAnimate],
  theme: {
    extend: {
      backgroundColor: {
        base: colors.white,
        'modal-overlay': `var(--bg-modal-overlay)`,
      },
      borderWidth: {
        DEFAULT: '0.5px',
      },
      colors: {
        brand: colors.blue,
        muted: colors.slate,
      },

      fontSize: {
        xs: ['0.6875rem', { lineHeight: '0.875rem' }],
      },
      height: {
        'ui-element': '2rem',
      },
      maxHeight: {
        'ui-element': '2rem',
      },
      minHeight: {
        'ui-element': '2rem',
      },
      opacity: {
        disabled: '0.5',
      },
      textColor: {
        disabled: colors.stone[300],
        invalid: colors.red[600],
        inverted: colors.black,
        placeholder: colors.gray[500],
        ['primary']: colors.stone[700],
        ['secondary']: colors.stone[500],
      },
      transitionDuration: {
        DEFAULT: '100ms',
      },
    },
  },
}
