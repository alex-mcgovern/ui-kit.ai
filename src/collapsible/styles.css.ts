import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { style } from "@vanilla-extract/css";

export const collapsibleContentAnimation = style([
    transitionRecipe([
        {
            duration: Duration.LONG,
            ease: Ease.EASE_OUT_CIRC,
            property: "height",
        },
    ]),
    {
        overflow: "hidden",
        selectors: {
            '&[data-state="closed"]': {
                maxHeight: 0,
            },
            '&[data-state="open"]': {
                maxHeight: "var(--radix-collapsible-content-height)",
            },
        },
    },
]);
