import { vars } from "@boondoggle.design/css-vars";
import { assignVars, createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const [checkboxThemeClass, checkboxThemeVars] = createTheme({
    // backgroundColor: vars.color.background.base,
    // borderColor: vars.color.border.base,
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
                    backgroundColor: vars.color.background.tint,
                    borderColor: vars.color.border.base,
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
                    backgroundColor: vars.color.background.tint,
                    borderColor: vars.color.border.base,
                }),
            },
        },
        vars: assignVars(checkboxThemeVars, {
            backgroundColor: vars.color.background.base,
            borderColor: vars.color.border.base,
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
