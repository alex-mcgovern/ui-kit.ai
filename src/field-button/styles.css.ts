import { typography } from "@boondoggle/css-variants";
import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { vars } from "../index.css";

export const fieldButtonCSS = style([
    typography.body_md,
    css({
        borderRadius: "sm",

        color: "text_low_contrast",
        flexShrink: "0",

        height: "space_6",
        width: "space_6",
    }),
    withPrefersMotion({
        transitionDuration: vars.transitionDuration.short,
        transitionProperty: "background, color",
        transitionTimingFunction: vars.ease.quart_in_out,
    }),
    {
        selectors: {
            /**
             * Ensure spacing between field-buttons within a group.
             */
            "&:first-of-type": {
                marginLeft: vars.spacing.space_1,
            },
            "&:last-of-type": {
                marginRight: vars.spacing.space_1,
            },

            /**
             * Whether the button is disabled.
             */
            "&[data-disabled]": {
                opacity: 0.5,
            },
            /**
             * Whether the button is keyboard focused.
             */
            "&[data-focus-visible]": {
                background: vars.color.bg_button_secondary_active,
                color: vars.color.text_high_contrast,
                outline: 0,
            },
            /**
             * Whether the button is focused, either via a mouse or keyboard.
             */
            "&[data-focused]": {
                background: vars.color.bg_button_secondary_active,
                color: vars.color.text_high_contrast,
                outline: 0,
            },
            /**
             * Whether the button is currently hovered with a mouse.
             */
            "&[data-hovered]": {
                background: vars.color.bg_button_secondary_active,
                color: vars.color.text_high_contrast,
            },
            /**
             * Whether the button is currently in a pressed state.
             */
            "&[data-pressed]": {
                background: vars.color.bg_button_secondary_active,
                color: vars.color.text_high_contrast,
            },
        },
    },
]);
