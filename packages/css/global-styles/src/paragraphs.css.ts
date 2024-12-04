import { vars } from "@boondoggle.design/css-vars";
import { globalStyle } from "@vanilla-extract/css";

import { BASE_LAYER } from "../../layers/src";

globalStyle("p", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.body_md,
            lineHeight: vars.line_height.body_md,
            marginBottom: vars.space.space_2,
            overflowWrap: "break-word",
        },
    },
});
