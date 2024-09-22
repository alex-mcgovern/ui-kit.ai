import { globalStyle } from "@vanilla-extract/css";

import { BASE_LAYER } from "../../layers/src";

globalStyle(":disabled, [data-disabled]", {
    "@layer": {
        [BASE_LAYER]: {
            cursor: "not-allowed",
        },
    },
});
