import { vars } from "@boondoggle.design/css-vars";
import { globalStyle } from "@vanilla-extract/css";

import { BASE_LAYER } from "../../layers/src";

globalStyle("ul, ol", {
    "@layer": {
        [BASE_LAYER]: {
            marginBlockEnd: 0,
            marginBlockStart: 0,
            marginInlineStart: vars.space.space_3,
            paddingInlineStart: 0,
        },
    },
});

globalStyle("ul li, ol li", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.body_md,
            lineHeight: vars.line_height.body_md,
            marginBottom: 0,
        },
    },
});

globalStyle("ul li::marker, ol li::marker", {
    "@layer": {
        [BASE_LAYER]: {
            // color: vars.color.text_low_contrast,
            fontWeight: vars.font_weight.semibold,
        },
    },
});
