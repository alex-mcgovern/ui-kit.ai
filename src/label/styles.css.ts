import { typography } from "@boondoggle/css-variants";
import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const labelCSS = style([
    typography.body_md,
    css({
        alignItems: "center",
        color: "text_high_contrast",
        display: "flex",
        fontWeight: "medium",
        gap: "space_1",

        marginBottom: "space_1",
    }),
]);
