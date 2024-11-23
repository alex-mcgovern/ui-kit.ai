import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const dialogContentCSS = style({
    overflowY: "auto",
    padding: `${vars.spacing.space_3} ${vars.spacing.space_4}`,
});
