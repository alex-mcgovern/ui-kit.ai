import { tv } from 'tailwind-variants'

export const fieldVariants = tv({
    base: [
        'h-8',
        'text-hi-contrast text-base',
        'rounded',
        'disabled:text-placeholder',
        'placeholder:text-placeholder',
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
                    'border-field border',
                    'bg-base',
                    'transition-colors',
                    // hover
                    'hover:[&:not([data-disabled])]:border-field-hover',
                    // focus visible
                    'focus-visible:border-field-hover',
                    'focus-visible:forced-colors:border-[ButtonBorder]',
                    // disabled
                    'disabled:border-default disabled:forced-colors:border-[GrayText]',
                    'forced-colors:border-[Highlight]',
                ],
            ],
            true: ['bg-transparent'],
        },
    },
})
