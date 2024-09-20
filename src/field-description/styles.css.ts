import { typography } from "@boondoggle/css-variants";
import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

export const descriptionCSS = style([
    typography.body_sm,
    css({
        color: "text_low_contrast",

        marginY: "space_1",
    }),
]);
