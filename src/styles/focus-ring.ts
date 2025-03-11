import { tv } from "tailwind-variants";

export const focusRing = tv({
    base: `outline-muted-400 outline outline-0 outline-offset-2
    forced-colors:outline-[Highlight]`,
    defaultVariants: {
        isBorderless: false,
        isDestructive: false,
    },
    variants: {
        isBorderless: {
            false: `focus-within:&:has([data-focus-visible]):outline-2
            invalid:!outline-red-700 focus-visible:outline-2`,
            true: "",
        },
        isDestructive: {
            false: "",
            true: "!outline-red-700",
        },
    },
});
