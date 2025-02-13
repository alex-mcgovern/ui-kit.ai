import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const selectValueStyle = style({
    alignItems: "center",
    display: "flex",
    padding: `0 ${vars.space.space_3}`,
    selectors: {
        "&[data-placeholder]": {
            color: vars.color.fg_1,
        },
    },
});
