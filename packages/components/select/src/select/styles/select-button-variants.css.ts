import type { ComplexStyleRule } from "@vanilla-extract/css";

import { FieldVariant } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { styleVariants } from "@vanilla-extract/css";
import { assignVars, createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [selectButtonVariantTheme, selectButtonVariantVars] = createTheme({
    backgroundColor: vars.color.input.default.backgroundColor,
    borderColor: vars.color.input.default.borderColor,
});

type SelectButtonStyleVariants = Record<FieldVariant, ComplexStyleRule>;

const selectButtonStyleVariant = styleVariants<SelectButtonStyleVariants>({
    borderless: {
        vars: assignVars(selectButtonVariantVars, {
            backgroundColor: vars.color.input.borderless.backgroundColor,
            borderColor: vars.color.input.borderless.borderColor,
        }),
    },
    default: {
        vars: assignVars(selectButtonVariantVars, {
            backgroundColor: vars.color.input.default.backgroundColor,
            borderColor: vars.color.input.default.borderColor,
        }),
    },
});

export const selectButtonVariantRecipe = recipe({
    base: [
        selectButtonVariantTheme,
        {
            backgroundColor: selectButtonVariantVars.backgroundColor.base,
            borderColor: selectButtonVariantVars.borderColor.base,
            selectors: {
                "&[data-disabled]": {
                    backgroundColor:
                        selectButtonVariantVars.backgroundColor.isDisabled,
                    borderColor: selectButtonVariantVars.borderColor.isDisabled,
                },
                "&[data-focus-visible]": {
                    backgroundColor:
                        selectButtonVariantVars.backgroundColor.isFocusVisible,
                    borderColor:
                        selectButtonVariantVars.borderColor.isFocusVisible,
                },
                "&[data-focused]": {
                    backgroundColor:
                        selectButtonVariantVars.backgroundColor.isFocused,
                    borderColor: selectButtonVariantVars.borderColor.isFocused,
                },
                "&[data-hovered]": {
                    backgroundColor:
                        selectButtonVariantVars.backgroundColor.isHovered,
                    borderColor: selectButtonVariantVars.borderColor.isHovered,
                },
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: selectButtonStyleVariant,
    },
});
