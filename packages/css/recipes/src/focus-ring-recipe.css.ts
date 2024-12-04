import { vars } from "@boondoggle.design/css-vars";
import { createVar, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const FOCUS_RING_OFFSET = createVar();

const focusRingVariant = styleVariants({
    default: {
        vars: {
            [FOCUS_RING_OFFSET]: "0px",
        },
    },
    inset: {
        vars: {
            [FOCUS_RING_OFFSET]: "-2px",
        },
    },
});

export const focusRingRecipe = recipe({
    base: {
        outlineColor: "transparent",
        outlineOffset: 0,
        outlineWidth: 0,
        selectors: {
            ["&[data-focus-visible]"]: {
                borderColor: vars.color.focus.borderColor,
                outlineColor: vars.color.focus.outlineColor,
                outlineOffset: FOCUS_RING_OFFSET,
                outlineStyle: "solid",
                outlineWidth: "2px",
            },
        },
    },
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: focusRingVariant,
    },
});
