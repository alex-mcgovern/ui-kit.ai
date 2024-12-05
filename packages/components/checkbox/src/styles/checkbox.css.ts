import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const checkboxStyle = style([
    {
        height: vars.space.space_5,
        width: vars.space.space_5,
    },
    {
        borderRadius: vars.border_radius.md,
        borderStyle: "solid",
        borderWidth: 1,
    },
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    transitionRecipe(
        Duration.MEDIUM,
        "background-color, border-color",
        Ease.EASE_OUT_CIRC,
    ),
]);
