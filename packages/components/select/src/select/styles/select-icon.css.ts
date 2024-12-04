import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const selectIconStyle = style([
    typography.body_md,
    {
        color: vars.color.text.low_contrast,
    },
    {
        height: vars.space.space_3,
        width: vars.space.space_3,
    },
    {
        marginLeft: "auto",
        marginRight: vars.space.space_2,
    },
]);
