import { tv } from "tailwind-variants";

export const fieldVariants = tv({
    base: [
        "h-8",
        "text-base text-primary",
        "rounded",
        "outline outline-0 outline-offset-2 outline-brand-500",
        "disabled:text-disabled",
        "placeholder:text-placeholder",
        "forced-colors:outline-[Highlight]",
    ],
    defaultVariants: {
        isBorderless: false,
    },
    variants: {
        isBorderless: {
            false: [
                [
                    "border border-gray-300",
                    "bg-gray-50",
                    "transition-colors",
                    // hover
                    "hover:[&:not(:is([data-disabled],[data-focus-visible]))]:border-gray-400",
                    "hover:[&:not(:is([data-disabled],[data-focus-visible]))]:forced-colors:border-[Highlight]",
                    "hover:[&:not([data-disabled])]:bg-gray-50",
                    // pressed
                    "pressed:border-gray-400",
                    "pressed:forced-colors:border-[Highlight]",
                    // invalid
                    "invalid:!border-red-400 invalid:!text-error invalid:!outline-red-500",
                    "invalid:!bg-red-50",
                    "invalid:forced-colors:!border-[Mark]",
                    "invalid:forced-colors:bg-[MarkBackground]",
                    // focus visible
                    "focus-visible:border-brand-500 focus-visible:outline-2",
                    "focus-visible:forced-colors:border-[ButtonBorder]",
                    "focus-within:[&:has([data-focus-visible])]:outline-2",
                    // disabled
                    "disabled:border-gray-200 disabled:forced-colors:border-[GrayText]",
                    "forced-colors:border-[Highlight]",
                ],
            ],
            true: [
                "bg-transparent",
                // text
                // `hover:[&:not([data-disabled])]:text-brand-600`,
                // `focus-visible:text-brand-600`, // so that you can tell focused field in a field group
                // `pressed:text-brand-500`,
            ],
        },
    },
});
