import { typography } from "@boondoggle/css-variants";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { HOVER, a11yFocusStyleRule, vars } from "../index.css";

const DOT_SIZE = vars.spacing.space_4;
const SWITCH_MARGIN = vars.spacing["space_0.5"];
const SWITCH_HEIGHT = calc.add(DOT_SIZE, calc.multiply(SWITCH_MARGIN, 2));
const SWITCH_WIDTH = calc.add(
    calc.multiply(DOT_SIZE, 2),
    calc.multiply(SWITCH_MARGIN, 2),
);

export const switchCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        gap: "space_2",

        /**
         * @note Required to prevent the hidden, absolutely
         * positioned input from upsetting the layout.
         */
        position: "relative",
    }),
    {
        selectors: {
            [`&${HOVER}`]: {
                cursor: "pointer",
            },
        },
    },
]);

export const switchLabelCSS = style([
    typography.body_md,
    css({
        color: "text_high_contrast",
    }),
]);

export const switchIndicatorCSS = style([
    css({
        borderRadius: "pill",
    }),
    {
        background: vars.color.bg_switch,
        height: SWITCH_HEIGHT,
        width: SWITCH_WIDTH,

        ...withPrefersMotion({
            transitionDuration: vars.transitionDuration.short,
            transitionProperty: "background",
            transitionTimingFunction: vars.ease.quart_in_out,
        }),

        selectors: {
            "&::before": {
                background: vars.color.switch_foreground,
                borderRadius: vars.borderRadius["50%"],

                content: "",
                display: "block",
                height: DOT_SIZE,

                margin: SWITCH_MARGIN,

                width: DOT_SIZE,

                ...withPrefersMotion({
                    transitionDuration: vars.transitionDuration.short,
                    transitionProperty: "transform",
                    transitionTimingFunction: vars.ease.quart_in_out,
                }),
            },

            /** ---------------------------------------------
             * PRESSED
             * ----------------------------------------------- */

            // [`${switchCSS}[data-pressed] &`]: {
            // 	borderColor: vars.color.border_field_active,
            // },
            // [`${switchCSS}[data-pressed] &::before`]: {
            // 	background: vars.color.tint_active,
            // },

            /** ---------------------------------------------
             * SELECTED
             * ----------------------------------------------- */

            [`${switchCSS}[data-focused] &::before`]: {},
            [`${switchCSS}[data-focused] &`]: {
                ...a11yFocusStyleRule,
                // 	background: vars.color.bg_switch_active,
                // 	// borderColor: vars.color.focus_ring,
            },

            /** ---------------------------------------------
             * FOCUSED
             * ----------------------------------------------- */

            [`${switchCSS}[data-selected] &::before`]: {
                // background: vars.color.bg_button_primary,
                transform: "translateX(100%)",
            },
            [`${switchCSS}[data-selected] &`]: {
                background: vars.color.bg_switch_active,
                // borderColor: vars.color.focus_ring,
            },
        },
    },
]);
