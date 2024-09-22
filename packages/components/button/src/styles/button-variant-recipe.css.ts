import type { ComplexStyleRule } from "@vanilla-extract/css";

import { ButtonVariant } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { assignVars } from "@vanilla-extract/css";
import { createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [buttonVariantTheme, buttonVariantVars] = createTheme({
    backgroundColor: vars.color.button.primary.backgroundColor,
    borderColor: vars.color.button.primary.borderColor,
    color: vars.color.white,
});

type ColorOverlayStyleVariants = Record<ButtonVariant, ComplexStyleRule>;

const buttonVariant = styleVariants<ColorOverlayStyleVariants>({
    ghost: {
        vars: assignVars(buttonVariantVars, {
            backgroundColor: vars.color.button.ghost.backgroundColor,
            borderColor: vars.color.button.ghost.borderColor,
            color: vars.color.text.high_contrast,
        }),
    },
    primary: {
        vars: assignVars(buttonVariantVars, {
            backgroundColor: vars.color.button.primary.backgroundColor,
            borderColor: vars.color.button.primary.borderColor,
            color: vars.color.white,
        }),
    },
    secondary: {
        vars: assignVars(buttonVariantVars, {
            backgroundColor: vars.color.button.secondary.backgroundColor,
            borderColor: vars.color.button.secondary.borderColor,
            color: vars.color.text.high_contrast,
        }),
    },
});

export const buttonVariantRecipe = recipe({
    base: [
        buttonVariantTheme,
        {
            backgroundColor: buttonVariantVars.backgroundColor.base,
            borderColor: buttonVariantVars.borderColor.base,
            color: buttonVariantVars.color,
            selectors: {
                "&[data-disabled]": {
                    backgroundColor:
                        buttonVariantVars.backgroundColor.isDisabled,
                    borderColor: buttonVariantVars.borderColor.isDisabled,
                },
                "&[data-hovered]": {
                    backgroundColor:
                        buttonVariantVars.backgroundColor.isHovered,
                    borderColor: buttonVariantVars.borderColor.isHovered,
                },
                "&[data-pressed]": {
                    backgroundColor:
                        buttonVariantVars.backgroundColor.isPressed,
                    borderColor: buttonVariantVars.borderColor.isPressed,
                },
            },
        },
    ],
    defaultVariants: {
        variant: ButtonVariant.PRIMARY,
    },
    variants: {
        variant: buttonVariant,
    },
});
