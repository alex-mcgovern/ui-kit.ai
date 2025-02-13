import { vars } from "@boondoggle.design/css-vars";
import { withPrefersMotion } from "@boondoggle.design/utils";
import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
    "0%": {
        backgroundColor: "transparent",
    },
    "100%": {
        backgroundColor: vars.color.shadow,
    },
});

const fadeOut = keyframes({
    "0%": {
        backgroundColor: vars.color.shadow,
    },
    "100%": {
        backgroundColor: "transparent",
    },
});

export const modalOverlayCSS = style([
    {
        inset: "0",
        minHeight: "100dvh",
        minWidth: "100dvw",
        position: "fixed",
        zIndex: 10,
    },
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    {
        animationFillMode: "forwards",
        background: vars.color.shadow,
    },
    withPrefersMotion({
        selectors: {
            "&[data-entering]": {
                animation: `${fadeIn} ${vars.duration.medium} ${vars.ease.ease_in_sine} forwards`,
            },
            "&[data-exiting]": {
                animation: `${fadeOut} ${vars.duration.medium} ${vars.ease.ease_out_sine} forwards`,
            },
        },
    }),
    {},
]);
