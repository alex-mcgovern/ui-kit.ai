import { tv } from 'tailwind-variants'

export const fieldVariants = tv({
  base: [
    'h-8',
    'text-base text-primary',
    'rounded',
    'outline outline-0 outline-offset-2 outline-brand-400',
    'disabled:text-disabled',
    'placeholder:text-placeholder',
    'placeholder:invalid:text-red-400',
    'forced-colors:outline-[Highlight]',
  ],
  defaultVariants: {
    isBorderless: false,
  },
  variants: {
    isBorderless: {
      false: [
        [
          'border border-muted-300',
          'bg-muted-50',
          'transition-colors',
          // hover
          'hover:[&:not(:is([data-disabled],[data-focus-visible]))]:border-muted-400',
          'hover:[&:not(:is([data-disabled],[data-focus-visible]))]:forced-colors:border-[Highlight]',
          'hover:[&:not([data-disabled])]:bg-base',
          // pressed
          'pressed:border-muted-400',
          'pressed:forced-colors:border-[Highlight]',
          // invalid
          'invalid:bg-red-50 group-invalid:bg-red-50',
          'invalid:border-red-300 group-invalid:border-red-300',
          'invalid:hover:border-red-400 group-invalid:hover:border-red-400',
          'invalid:outline-red-400 group-invalid:outline-red-400',
          // "[:is([data-invalid],[data-invalid]_&)]:border-red-400",
          // "[:is([data-invalid],[data-invalid]_&)]:text-invalid",
          // "[:is([data-invalid],[data-invalid]_&)]:forced-colors:!border-[Mark]",
          // "[:is([data-invalid],[data-invalid]_&)]:forced-colors:bg-[MarkBackground]",
          // focus visible
          'focus-visible:border-brand-500 focus-visible:outline-2',
          'focus-visible:forced-colors:border-[ButtonBorder]',
          'focus-within:[&:has([data-focus-visible])]:outline-2',
          // disabled
          'disabled:border-muted-200 disabled:forced-colors:border-[GrayText]',
          'forced-colors:border-[Highlight]',
        ],
      ],
      true: [
        'bg-transparent',
        // text
        // `hover:[&:not([data-disabled])]:text-brand-600`,
        // `focus-visible:text-brand-600`, // so that you can tell focused field in a field group
        // `pressed:text-brand-500`,
      ],
    },
  },
})
