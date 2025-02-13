import type { ComplexStyleRule } from "@vanilla-extract/css";

import { ButtonVariant } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { disabledStyleMacro } from "@boondoggle.design/style-rule-macros";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

type ButtonStyleVariant = Record<ButtonVariant, ComplexStyleRule>;

const buttonStyleVariant = styleVariants<ButtonStyleVariant>({
    ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: vars.color.fg_2,
        selectors: {
            "&[data-hovered]:not([data-disabled])": {
                backgroundColor: vars.color.tint_1,
                borderColor: vars.color.tint_1,
            },
        },
    },
    primary: {
        backgroundColor: vars.color.primary_1,
        borderColor: vars.color.primary_1,
        color: vars.color.fg_2_inverted,
        selectors: {
            "&[data-hovered]:not([data-disabled])": {
                backgroundColor: vars.color.primary_2,
                borderColor: vars.color.primary_2,
            },
        },
    },
    secondary: {
        backgroundColor: vars.color.tint_1,
        borderColor: vars.color.border_1,
        color: vars.color.fg_2,
        selectors: {
            "&[data-hovered]:not([data-disabled])": {
                backgroundColor: vars.color.tint_2,
                borderColor: vars.color.border_2,
            },
        },
    },
});

export const buttonVariantRecipe = recipe({
    base: [
        {
            selectors: {
                "&[data-disabled]": disabledStyleMacro(),
            },
        },
    ],
    defaultVariants: {
        variant: ButtonVariant.PRIMARY,
    },
    variants: {
        variant: buttonStyleVariant,
    },
});
