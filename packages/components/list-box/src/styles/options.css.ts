import { style } from "@vanilla-extract/css";

import { css } from "../../../../../src/css/index.css";
import { unobtrusiveScrollBar } from "../../../../../src/index.css";

// export const container = style([
//     {
//         overflow: "hidden",
//     },
// ]);

export const optionsStyle = style([
    css({
        outline: "none",
        overflowY: "auto",
        padding: "space_1",
    }),
    {
        maxHeight: "inherit",
    },
    unobtrusiveScrollBar,
]);
