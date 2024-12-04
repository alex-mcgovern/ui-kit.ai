import { vars } from "@boondoggle.design/css-vars";
import { globalStyle } from "@vanilla-extract/css";

import { BASE_LAYER } from "../../layers/src";

globalStyle("h1, h2, h3, h4, h5, h6", {
    "@layer": {
        [BASE_LAYER]: {
            display: "block",
            marginBottom: vars.space.space_2,
            overflowWrap: "break-word",
            textWrap: "balance",
        },
    },
});

globalStyle("h1", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.h1,
            fontWeight: vars.font_weight.bold,
            lineHeight: vars.line_height.h1,
        },
    },
});

globalStyle("h2", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.h2,
            fontWeight: vars.font_weight.semibold,
            lineHeight: vars.line_height.h2,
        },
    },
});

globalStyle("h3", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.h3,
            fontWeight: vars.font_weight.semibold,
            lineHeight: vars.line_height.h3,
        },
    },
});

globalStyle("h4", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.h4,
            fontWeight: vars.font_weight.semibold,
            lineHeight: vars.line_height.h4,
        },
    },
});

globalStyle("h5", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.h5,
            fontWeight: vars.font_weight.semibold,
            lineHeight: vars.line_height.h5,
        },
    },
});

globalStyle("h6", {
    "@layer": {
        [BASE_LAYER]: {
            fontSize: vars.font_size.h6,
            fontWeight: vars.font_weight.semibold,
            lineHeight: vars.line_height.h6,
        },
    },
});
