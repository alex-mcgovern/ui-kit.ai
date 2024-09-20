import { typography } from "@boondoggle/css-variants";
import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const confirmTextCSS = style([
    typography.body_md,
    css({
        display: "inline-block",
        marginBottom: "space_2",
    }),
    {
        userSelect: "none",
    },
]);
