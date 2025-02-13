import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const dialogFooterCSS = style({
    borderTop: `1px solid ${vars.color.border_1}`,
    marginTop: "auto",
    padding: `${vars.space.space_3} ${vars.space.space_4}`,
});
