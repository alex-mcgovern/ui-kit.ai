import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const dialogHeaderStyle = style([
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
    },
    {
        paddingBottom: vars.space.space_2,
        paddingLeft: vars.space.space_4,
        paddingRight: vars.space.space_2,
        paddingTop: vars.space.space_2,
    },
    { borderBottom: `1px solid ${vars.color.border.base}` },
    {
        position: "sticky",
        top: "0",
    },
]);
