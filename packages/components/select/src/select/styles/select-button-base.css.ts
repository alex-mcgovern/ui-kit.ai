import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const selectButtonBaseStyle = style([
    typography.body_md,
    transitionRecipe([
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "color",
        },
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "background-color",
        },
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "border-color",
        },
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "opacity",
        },
        {
            duration: Duration.LONG,
            ease: Ease.EASE_OUT_CIRC,
            property: "outline",
        },
    ]),
    {
        alignItems: "center",
        display: "flex",
        flexShrink: "0",
        width: "100%",
    },
    {
        color: vars.color.fg_2,
    },
    {
        borderRadius: vars.border_radius.md,
        borderStyle: "solid",
        borderWidth: 1,
    },
]);
