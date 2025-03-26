import { tv } from 'tailwind-variants'

export const fieldVariants = tv({
  base: [
    'h-8',
    'text-base text-hi-contrast',
    'rounded',
    'outline outline-0 outline-offset-2 outline-brand-400',
    'disabled:text-disabled',
    'placeholder:text-placeholder',
    'placeholder:invalid:text-error',
    'forced-colors:outline-[Highlight]',
  ],
  defaultVariants: {
    isBorderless: false,
  },
  variants: {
    isBorderless: {
      false: [
        [
          'border border-lo-contrast',
          'bg-background',
          'transition-colors',
          // hover
          'hover:[&:not(:is([data-disabled],[data-focus-visible]))]:border-mid-contrast',
          'hover:[&:not(:is([data-disabled],[data-focus-visible]))]:forced-colors:border-[Highlight]',
          'hover:[&:not([data-disabled])]:bg-background',
          // invalid
          'invalid:bg-error-tint-light group-invalid:bg-error-tint-light',
          'invalid:border-error-tint-dark group-invalid:border-error-tint-dark',
          'invalid:hover:border-error group-invalid:hover:border-error',
          'invalid:outline-error group-invalid:outline-error',
          // "[:is([data-invalid],[data-invalid]_&)]:border-error",
          // "[:is([data-invalid],[data-invalid]_&)]:text-error",
          // "[:is([data-invalid],[data-invalid]_&)]:forced-colors:!border-[Mark]",
          // "[:is([data-invalid],[data-invalid]_&)]:forced-colors:bg-[MarkBackground]",
          // focus visible
          'focus-visible:border-mid-contrast focus-visible:outline-2',
          'focus-visible:forced-colors:border-[ButtonBorder]',
          'focus-within:[&:has([data-focus-visible])]:outline-2',
          // disabled
          'disabled:border-tint-light disabled:forced-colors:border-[GrayText]',
          'forced-colors:border-[Highlight]',
        ],
      ],
      true: [
        'bg-transparent',
        // text
        // `hover:[&:not([data-disabled])]:text-hi-contrast`,
        // `focus-visible:text-hi-contrast`, // so that you can tell focused field in a field group
        // `pressed:text-mid-contrast`,
      ],
    },
  },
})
