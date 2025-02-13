import type { FieldVariant } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import { vars } from "@boondoggle.design/css-vars";
import { disabledStyleMacro } from "@boondoggle.design/style-rule-macros";
import { styleVariants } from "@vanilla-extract/css";
import { assignVars, createTheme } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [theme, themeVars] = createTheme({
    backgroundColor: vars.color.bg_1,
    borderColor: vars.color.border_1,
});

type SelectButtonStyleVariants = Record<FieldVariant, ComplexStyleRule>;

const selectButtonStyleVariant = styleVariants<SelectButtonStyleVariants>({
    borderless: {
        vars: assignVars(themeVars, {
            backgroundColor: "transparent",
            borderColor: "transparent",
        }),
    },
    default: {
        selectors: {
            "&[data-hovered]": {
                backgroundColor: vars.color.bg_1,
                borderColor: vars.color.border_2,
            },
        },
        vars: assignVars(themeVars, {
            backgroundColor: vars.color.bg_2,
            borderColor: vars.color.border_1,
        }),
    },
});

export const selectButtonVariantRecipe = recipe({
    base: [
        theme,
        {
            backgroundColor: themeVars.backgroundColor,
            borderColor: themeVars.borderColor,
        },
        {
            selectors: {
                "&[data-disabled]": disabledStyleMacro(),
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
