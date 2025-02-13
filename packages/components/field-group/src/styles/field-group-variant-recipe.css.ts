import type { FieldVariant } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import { vars } from "@boondoggle.design/css-vars";
import { disabledStyleMacro } from "@boondoggle.design/style-rule-macros";
import { styleVariants } from "@vanilla-extract/css";
import { assignVars, createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [fieldGroupVariantTheme, fieldGroupVariantVars] = createTheme({
    backgroundColor: vars.color.bg_2,
    borderColor: vars.color.border_1,
});

type FieldGroupStyleVariants = Record<FieldVariant, ComplexStyleRule>;

const fieldGroupStyleVariant = styleVariants<FieldGroupStyleVariants>({
    borderless: {
        vars: assignVars(fieldGroupVariantVars, {
            backgroundColor: "transparent",
            borderColor: "transparent",
        }),
    },
    default: {
        vars: assignVars(fieldGroupVariantVars, {
            backgroundColor: vars.color.bg_2,
            borderColor: vars.color.border_1,
        }),
    },
});

export const fieldGroupVariantRecipe = recipe({
    base: [
        fieldGroupVariantTheme,
        {
            backgroundColor: fieldGroupVariantVars.backgroundColor,
            borderColor: fieldGroupVariantVars.borderColor,
            selectors: {
                "&[data-disabled]": disabledStyleMacro(),
                "&[data-focus-visible]": {
                    backgroundColor: vars.color.bg_1,
                    borderColor: vars.color.border_2,
                },
                "&[data-focus-within]": {
                    backgroundColor: vars.color.bg_1,
                    borderColor: vars.color.border_2,
                },
                "&[data-hovered]": {
                    backgroundColor: vars.color.bg_1,
                    borderColor: vars.color.border_2,
                },
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: fieldGroupStyleVariant,
    },
});
