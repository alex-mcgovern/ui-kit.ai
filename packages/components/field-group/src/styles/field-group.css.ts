import { COLOR_RED } from "@boondoggle.design/css-color-palette";
import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { assignVars, style } from "@vanilla-extract/css";

export const fieldGroupBaseStyle = style([
    typography.body_md,
    transitionRecipe(
        Duration.SHORT,
        "color, background-color, border-color, outline, opacity",
        Ease.EASE_OUT_CIRC,
    ),
    {
        alignItems: "center",
        display: "flex",
        flexShrink: "0",
        width: "100%",
    },
    {
        color: vars.color.text.high_contrast,
    },
    {
        borderRadius: vars.border_radius.md,
        borderStyle: "solid",
        borderWidth: 1,
    },
    {
        selectors: {
            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },
            "&[data-invalid]": {
                vars: assignVars(vars.color, COLOR_RED),
            },
        },
    },
]);
