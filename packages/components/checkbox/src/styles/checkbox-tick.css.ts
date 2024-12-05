import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const checkboxTickStyle = style([
    {
        fill: "none",
        selectors: {
            [`[data-selected] &`]: {
                strokeDashoffset: "44px",
            },
        },
        stroke: vars.color.text.low_contrast,
        strokeDasharray: 22,
        strokeDashoffset: "66px",
        strokeWidth: vars.space["space_0.75"],
    },
    {
        height: vars.space.space_3,
        transition: "medium",
        width: vars.space.space_3,
    },
    transitionRecipe(Duration.SHORT, "stroke-dashoffset", Ease.EASE_IN_CIRC),
]);
