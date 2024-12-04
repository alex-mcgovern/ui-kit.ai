import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const dialogContentCSS = style({
    overflowY: "auto",
    padding: `${vars.space.space_3} ${vars.space.space_4}`,
});
