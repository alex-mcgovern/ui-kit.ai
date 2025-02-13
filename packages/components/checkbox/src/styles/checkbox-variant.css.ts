import { vars } from "@boondoggle.design/css-vars";
import { assignVars, createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [checkboxThemeClass, checkboxThemeVars] = createTheme({
    backgroundColor: "transparent",
    borderColor: "transparent",
});

const checkboxVariantStyle = styleVariants({
    borderless: {
        vars: assignVars(checkboxThemeVars, {
            backgroundColor: "transparent",
            borderColor: "transparent",
        }),
    },
    borderlessUntilHovered: {
        selectors: {
            [`:is([data-hovered],[data-pressed]) &`]: {
                vars: assignVars(checkboxThemeVars, {
                    backgroundColor: vars.color.bg_2,
                    borderColor: vars.color.border_2,
                }),
            },
        },
        vars: assignVars(checkboxThemeVars, {
            backgroundColor: "transparent",
            borderColor: "transparent",
        }),
    },
    default: {
        selectors: {
            [`:is([data-pressed],[data-hovered]) &`]: {
                vars: assignVars(checkboxThemeVars, {
                    backgroundColor: vars.color.tint_1,
                    borderColor: vars.color.border_2,
                }),
            },
        },
        vars: assignVars(checkboxThemeVars, {
            backgroundColor: vars.color.bg_1,
            borderColor: vars.color.border_1,
        }),
    },
});

export const checkboxThemeRecipe = recipe({
    base: [
        checkboxThemeClass,
        {
            backgroundColor: checkboxThemeVars.backgroundColor,
            borderColor: checkboxThemeVars.borderColor,
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: { variant: checkboxVariantStyle },
});
