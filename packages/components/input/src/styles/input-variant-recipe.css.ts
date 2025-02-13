import type { FieldVariant } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import { vars } from "@boondoggle.design/css-vars";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

type InputStyleVariants = Record<FieldVariant, ComplexStyleRule>;

const inputStyleVariant = styleVariants<InputStyleVariants>({
    borderless: {
        backgroundColor: "transparent",
        border: "0 !important",
        borderColor: "transparent",
        outline: "0 !important",
    },
    default: {
        backgroundColor: vars.color.bg_2,
        borderColor: vars.color.border_1,
        selectors: {
            "&[data-focus-visible]:not([data-disabled])": {
                backgroundColor: vars.color.bg_1,
                borderColor: vars.color.border_2,
            },
            "&[data-focused]:not([data-disabled])": {
                backgroundColor: vars.color.bg_1,
                borderColor: vars.color.border_2,
            },
            "&[data-hovered]:not([data-disabled])": {
                backgroundColor: vars.color.bg_1,
                borderColor: vars.color.border_2,
            },
        },
    },
});

export const inputVariantRecipe = recipe({
    base: [],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: inputStyleVariant,
    },
});
