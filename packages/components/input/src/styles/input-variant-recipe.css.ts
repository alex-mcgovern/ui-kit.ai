import type { FieldVariant } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import { vars } from "@boondoggle.design/css-vars";
import { styleVariants } from "@vanilla-extract/css";
import { assignVars, createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [inputVariantTheme, inputVariantVars] = createTheme({
    backgroundColor: vars.color.input.default.backgroundColor,
    borderColor: vars.color.input.default.borderColor,
});

type InputStyleVariants = Record<FieldVariant, ComplexStyleRule>;

const inputStyleVariant = styleVariants<InputStyleVariants>({
    borderless: {
        border: "0 !important",
        outline: "0 !important",
        vars: assignVars(inputVariantVars, {
            backgroundColor: vars.color.input.borderless.backgroundColor,
            borderColor: vars.color.input.borderless.borderColor,
        }),
    },
    default: {
        vars: assignVars(inputVariantVars, {
            backgroundColor: vars.color.input.default.backgroundColor,
            borderColor: vars.color.input.default.borderColor,
        }),
    },
});

export const inputVariantRecipe = recipe({
    base: [
        inputVariantTheme,
        {
            backgroundColor: inputVariantVars.backgroundColor.base,
            borderColor: inputVariantVars.borderColor.base,
            selectors: {
                "&[data-disabled]": {
                    backgroundColor:
                        inputVariantVars.backgroundColor.isDisabled,
                    borderColor: inputVariantVars.borderColor.isDisabled,
                },
                "&[data-focus-visible]:not([data-disabled])": {
                    backgroundColor:
                        inputVariantVars.backgroundColor.isFocusVisible,
                    borderColor: inputVariantVars.borderColor.isFocusVisible,
                },
                "&[data-focused]:not([data-disabled])": {
                    backgroundColor: inputVariantVars.backgroundColor.isFocused,
                    borderColor: inputVariantVars.borderColor.isFocused,
                },
                "&[data-hovered]:not([data-disabled])": {
                    backgroundColor: inputVariantVars.backgroundColor.isHovered,
                    borderColor: inputVariantVars.borderColor.isHovered,
                },
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: inputStyleVariant,
    },
});
