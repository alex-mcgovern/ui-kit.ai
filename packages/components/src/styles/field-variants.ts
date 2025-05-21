import { tv } from 'tailwind-variants'

export const fieldVariants = tv({
    base: [
        'h-8',
        'text-dark text-base',
        'rounded',
        'disabled:text-light',
        'placeholder:text-light',
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
                    'bg-base/80 backdrop-blur-[2px]',
                    'transition-colors',
                    // hover
                    'hover:[&:not([data-disabled])]:border-dark',
                    // focus visible
                    'focus-visible:border-dark',
                    'focus-visible:forced-colors:border-[ButtonBorder]',
                    // disabled
                    'disabled:border-light disabled:forced-colors:border-[GrayText]',
                    'forced-colors:border-[Highlight]',
                ],
            ],
            true: ['bg-transparent'],
        },
    },
})
