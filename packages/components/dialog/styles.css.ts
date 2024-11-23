import { typography } from "@boondoggle.design/css-variants";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { withPrefersMotion } from "../../../src/_css-utils";
import { css } from "../../../src/css/index.css";
import {
    MEDIA_QUERY_MOBILE,
    MEDIA_QUERY_TABLET,
    variantColorOverlay,
    vars,
} from "../../../src/index.css";

/** -----------------------------------------------------------------------------
 * Dialog
 * ------------------------------------------------------------------------------- */

export const dialogCSS = css({ outline: "none" });

/** -----------------------------------------------------------------------------
 * MODAL OVERLAY
 * ------------------------------------------------------------------------------- */

const kfModalOverlayIn = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
});
const kfModalOverlayOut = keyframes({
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
});

export const modalOverlayCSS = style([
    css({
        background: "backdrop",
        display: "flex",
        placeItems: "center",
    }),
    {
        inset: "0",
        minHeight: "100dvh",
        minWidth: "100vw",
        position: "fixed",
        zIndex: 10,

        ...withPrefersMotion({
            transition: `opacity ${vars.transitionDuration.short} ${vars.ease.quart_in_out}, background ${vars.transitionDuration.short} ${vars.ease.quart_in_out}`,
        }),

        selectors: {
            "&[data-entering]": {
                ...withPrefersMotion({
                    animation: `${kfModalOverlayIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                }),
            },
            "&[data-exiting]": {
                ...withPrefersMotion({
                    animation: `${kfModalOverlayOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                }),
            },
        },
    },
]);

/** -----------------------------------------------------------------------------
 * MODAL
 * ------------------------------------------------------------------------------- */

const kfModalIn = keyframes({
    "0%": { opacity: 0, transform: "scale(0.99)" },
    "100%": { opacity: 1 },
});
const kfModalOut = keyframes({
    "0%": { opacity: 1 },
    "100%": { opacity: 0, transform: "scale(0.99)" },
});

export const modalCSS = recipe({
    base: [
        css({
            background: "background",
            border: "border_rule",
            borderRadius: "md",
            boxShadow: "lg",
            maxWidth: "100vw",
        }),
        {
            outline: "none",

            selectors: {
                "&[data-entering]": {
                    ...withPrefersMotion({
                        animation: `${kfModalIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                    }),
                },
                "&[data-exiting]": {
                    ...withPrefersMotion({
                        animation: `${kfModalOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
                    }),
                },
            },
        },
    ],
    defaultVariants: {
        width: "lg",
    },
    variants: {
        colorOverlay: variantColorOverlay,
        width: {
            lg: {
                "@media": {
                    [MEDIA_QUERY_MOBILE]: {
                        width: "100vw",
                    },
                    [MEDIA_QUERY_TABLET]: {
                        width: "50rem",
                    },
                },
            },
            sm: {
                "@media": {
                    [MEDIA_QUERY_MOBILE]: {
                        width: "100vw",
                    },
                    [MEDIA_QUERY_TABLET]: {
                        width: "30rem",
                    },
                },
            },
        },
    },
});

/** -----------------------------------------------------------------------------
 * DIALOG
 * ------------------------------------------------------------------------------- */

export const dialogModalCSS = style([
    css({
        // stick to bottom of container
        display: "flex",

        // Use flex to allow footer element to
        flexDirection: "column",
        position: "relative",
    }),
    {
        "@media": {
            [MEDIA_QUERY_MOBILE]: {
                height: "100vh",
                maxHeight: "100dvh",
            },
            [MEDIA_QUERY_TABLET]: {
                maxHeight: "75dvh",
            },
        },
        outline: 0,
    },
]);

export const dialogHeaderCSS = style([
    css({
        alignItems: "center",
        borderBottom: "border_rule",
        display: "flex",

        justifyContent: "space-between",

        maxWidth: "100%",
        paddingLeft: "space_4",
        paddingRight: "space_2",

        paddingY: "space_2",
        position: "sticky",

        top: "0",
    }),
]);

export const dialogTitleCSS = style([
    typography.body_lg,
    css({
        color: "text_high_contrast",
        fontWeight: "semibold",
        marginY: "none",
    }),
]);
