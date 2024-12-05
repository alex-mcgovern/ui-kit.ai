import { variantColorOverlay } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { withPrefersMotion } from "@boondoggle.design/utils";
import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const TRANSLATE_DISTANCE = vars.space.space_8;

const fadeIn = keyframes({
    "0%": {
        filter: "blur(4px)",
        opacity: 0,
        transform: `translateY(${TRANSLATE_DISTANCE}) scale(0.95)`,
    },
    "100%": { opacity: 1 },
});

const fadeOut = keyframes({
    "0%": { opacity: 1 },
    "100%": {
        filter: "blur(4px)",
        opacity: 0,
        transform: `translateY(${TRANSLATE_DISTANCE}) scale(0.95)`,
    },
});

export const modalCSS = recipe({
    base: [
        {
            background: vars.color.background.base,
            border: `1px solid ${vars.color.border.base}`,
            borderRadius: vars.border_radius.md,
            boxShadow: vars.box_shadow.lg,
            outline: "none",
            willChange: "transform, opacity, filter",
        },
        withPrefersMotion({
            selectors: {
                "&[data-entering]": {
                    animation: `${fadeIn} ${vars.duration.medium} ${vars.ease.ease_out_circ} forwards`,
                },
                "&[data-exiting]": {
                    animation: `${fadeOut} ${vars.duration.short} ${vars.ease.ease_in_circ} forwards`,
                },
            },
        }),
    ],
    variants: {
        colorOverlay: variantColorOverlay,
    },
});
