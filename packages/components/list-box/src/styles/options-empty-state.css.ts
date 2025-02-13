import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const optionsEmptyStateStyle = style([
    typography.body_sm,
    {
        alignItems: "center",
        display: "flex",
        justifyItems: "center",
    },
    {
        color: vars.color.fg_1,
        display: "flex",
        whiteSpace: "nowrap",
    },
]);
