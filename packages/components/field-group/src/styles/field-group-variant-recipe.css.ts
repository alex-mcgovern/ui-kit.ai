import type { ComplexStyleRule } from "@vanilla-extract/css";

import { FieldVariant } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { styleVariants } from "@vanilla-extract/css";
import { assignVars, createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [fieldGroupVariantTheme, fieldGroupVariantVars] = createTheme({
    backgroundColor: vars.color.input.default.backgroundColor,
    borderColor: vars.color.input.default.borderColor,
});

type FieldGroupStyleVariants = Record<FieldVariant, ComplexStyleRule>;

const fieldGroupStyleVariant = styleVariants<FieldGroupStyleVariants>({
    borderless: {
        vars: assignVars(fieldGroupVariantVars, {
            backgroundColor: vars.color.input.borderless.backgroundColor,
            borderColor: vars.color.input.borderless.borderColor,
        }),
    },
    default: {
        vars: assignVars(fieldGroupVariantVars, {
            backgroundColor: vars.color.input.default.backgroundColor,
            borderColor: vars.color.input.default.borderColor,
        }),
    },
});

export const fieldGroupVariantRecipe = recipe({
    base: [
        fieldGroupVariantTheme,
        {
            backgroundColor: fieldGroupVariantVars.backgroundColor.base,
            borderColor: fieldGroupVariantVars.borderColor.base,
            selectors: {
                "&[data-disabled]": {
                    backgroundColor:
                        fieldGroupVariantVars.backgroundColor.isDisabled,
                    borderColor: fieldGroupVariantVars.borderColor.isDisabled,
                },
                "&[data-focus-visible]": {
                    backgroundColor:
                        fieldGroupVariantVars.backgroundColor.isFocusVisible,
                    borderColor:
                        fieldGroupVariantVars.borderColor.isFocusVisible,
                },
                "&[data-focus-within]": {
                    backgroundColor:
                        fieldGroupVariantVars.backgroundColor.isFocused,
                    borderColor: fieldGroupVariantVars.borderColor.isFocused,
                },
                "&[data-hovered]": {
                    backgroundColor:
                        fieldGroupVariantVars.backgroundColor.isHovered,
                    borderColor: fieldGroupVariantVars.borderColor.isHovered,
                },
            },
        },
    ],
    defaultVariants: {
        variant: FieldVariant.DEFAULT,
    },
    variants: {
        variant: fieldGroupStyleVariant,
    },
});
