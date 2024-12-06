import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const optionsSectionHeaderStyle = style([
    typography.body_sm,
    {
        color: vars.color.text.low_contrast,
        fontWeight: vars.font_weight.medium,
        textAlign: "left",
    },
    {
        alignItems: "center",
        display: "flex",
    },
    {
        height: vars.space.space_7,
        paddingLeft: vars.space.space_2,
        paddingRight: vars.space.space_2,
    },
]);
