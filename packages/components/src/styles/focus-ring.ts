import { tv } from 'tailwind-variants'

export const focusRing = tv({
  base: [
    `outline outline-0 outline-offset-2`,
    `outline-accent-light`,
    `forced-colors:outline-[Highlight]`,
  ],
  defaultVariants: {
    isBorderless: false,
    isDestructive: false,
  },
  variants: {
    isBorderless: {
      false: [
        'focus-within:&:has([data-focus-visible]):outline-2 focus-visible:outline-2',
        'group/invalid:!outline-red-700 invalid:!outline-red-700',
      ],
      true: '',
    },
    isDestructive: {
      false: '',
      true: '!outline-red-700',
    },
  },
})
