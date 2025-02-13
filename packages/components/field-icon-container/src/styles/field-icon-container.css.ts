import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const fieldIconContainerStyle = style([
    {
        height: vars.space.space_6,
        width: vars.space.space_6,
    },
    {
        color: vars.color.fg_1,
    },
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
]);
