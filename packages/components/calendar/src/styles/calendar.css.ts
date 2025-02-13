import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const calendarStyle = style([
    {
        color: vars.color.fg_2,
    },
    {
        maxWidth: "100%",
        width: "fit-content",
    },
]);
