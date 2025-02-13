import { typography } from "@boondoggle.design/css-variants";
import { style } from "@vanilla-extract/css";

export const calendarHeadingCSS = style([
    typography.body_md,
    {
        flexGrow: "1",
        margin: 0,
        textAlign: "center",
    },
]);
