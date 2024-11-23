import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const dialogFooterCSS = style({
    borderTop: `1px solid ${vars.color.border.base}`,
    marginTop: "auto",
    padding: `${vars.spacing.space_3} ${vars.spacing.space_4}`,
});
