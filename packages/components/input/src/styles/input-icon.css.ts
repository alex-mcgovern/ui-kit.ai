import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const inputIconContainerStyle = style([
    {
        marginLeft: vars.space.space_1,
        marginRight: vars.space.space_1,
    },
    {
        bottom: "0",
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
    },
]);
