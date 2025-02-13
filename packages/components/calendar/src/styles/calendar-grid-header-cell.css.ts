import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const calendarGridHeaderCellCSS = style([
    typography.body_md,
    {
        color: vars.color.fg_2,
        fontWeight: vars.font_weight.medium,
    },
    { height: vars.space.space_8 },
    {
        textAlign: "center",
        verticalAlign: "middle",
    },
]);
