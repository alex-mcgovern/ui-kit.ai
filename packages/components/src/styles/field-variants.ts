import { tv } from 'tailwind-variants'

export const fieldVariants = tv({
    base: [
        'h-8',
        'text-dark text-base',
        'rounded',
        'outline outline-0 outline-offset-2',
        'disabled:text-light',
        'placeholder:text-light',
        'forced-colors:outline-[Highlight]',
        // focus ring
        'outline outline-0 outline-offset-2',
        'outline-accent-light',
        'forced-colors:outline-[Highlight]',
        // invalid
        'invalid:error group-invalid:error',
    ],
    defaultVariants: {
        isBorderless: false,
    },
    variants: {
        isBorderless: {
            false: [
                [
                    'border-mid border',
                    'bg-base/80',
                    'transition-colors',
                    // hover
                    'hover:[&:not([data-disabled])]:border-dark',
                    // focus visible
                    'focus-visible:border-dark focus-visible:outline-2',
                    'focus-visible:forced-colors:border-[ButtonBorder]',
                    'focus-within:[&:has([data-focus-visible])]:outline-2',
                    // disabled
                    'disabled:border-light disabled:forced-colors:border-[GrayText]',
                    'forced-colors:border-[Highlight]',
                ],
            ],
            true: ['bg-transparent'],
        },
    },
})
