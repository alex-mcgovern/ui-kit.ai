import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const selectValueStyle = style({
    alignItems: "center",
    display: "flex",
    gap: vars.spacing.space_2,
    padding: `0 ${vars.spacing.space_2}`,
    selectors: {
        "&[data-placeholder]": {
            color: vars.color.text.low_contrast,
        },
    },
});
