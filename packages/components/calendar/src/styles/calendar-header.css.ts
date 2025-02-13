import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const calendarHeaderStyle = style([
    {
        marginBottom: vars.space.space_1,
        marginLeft: vars.space.space_1,
        marginRight: vars.space.space_1,
    },
    {
        alignItems: "center",
        display: "flex",
    },
]);
