import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const dialogTitleStyle = style([
    typography.body_lg,
    {
        color: vars.color.text.high_contrast,
        fontWeight: vars.font_weight.semibold,
        margin: 0,
    },
]);
