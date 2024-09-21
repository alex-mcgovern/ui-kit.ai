import { typography } from "@boondoggle.design/css-variants";
import { style } from "@vanilla-extract/css";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { a11yFocus, vars } from "../index.css";

export const radioButtonWrapperStyles = style([
    css({
        alignItems: "start",
        borderRadius: "sm",
        display: "flex",
        gap: "space_2",
    }),
]);

export const radioButtonInputStyles = style([
    a11yFocus,
    css({ borderRadius: "50%", marginTop: "space_1" }),
]);

export const radioButtonLabelStyles = style([
    typography.body_sm,
    css({
        position: "relative",
    }),
    {
        ...withPrefersMotion({
            transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
        }),
        accentColor: vars.color.bg_button_primary,
        selectors: {
            "&:hover": {
                cursor: "pointer",
            },
        },
    },
]);
