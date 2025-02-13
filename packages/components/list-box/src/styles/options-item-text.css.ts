import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

const base = style([
    {
        fontSize: vars.font_size.body_md,
        lineHeight: vars.line_height.body_sm,
    },
    {
        display: "block",
        fontWeight: vars.font_weight.normal,
        overflow: "hidden",
        selectors: {
            "&:first-letter": {
                textTransform: "capitalize",
            },
        },
        textAlign: "left",
        textDecoration: "none",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
]);

export const optionsItemTextValueStyle = style([
    base,
    {
        color: vars.color.fg_2,
    },
]);

export const optionsItemDescriptionStyle = style([
    base,
    {
        color: vars.color.fg_1,
    },
]);
