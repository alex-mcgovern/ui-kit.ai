import type { ColorOverlay } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import {
    COLOR_AMBER,
    COLOR_BLUE,
    COLOR_GREEN,
    COLOR_RED,
    COLOR_RESET,
} from "@boondoggle.design/css-color-palette";
import { vars } from "@boondoggle.design/css-vars";
import { assignVars } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

import { THEME_LAYER } from "../../layers/src";

type ColorOverlayStyleVariants = Record<ColorOverlay, ComplexStyleRule>;

export const variantColorOverlay = styleVariants<ColorOverlayStyleVariants>({
    amber: {
        "@layer": {
            [THEME_LAYER]: {
                vars: assignVars(vars.color, COLOR_AMBER),
            },
        },
    },
    blue: {
        "@layer": {
            [THEME_LAYER]: {
                vars: assignVars(vars.color, COLOR_BLUE),
            },
        },
    },
    gray: {
        "@layer": {
            [THEME_LAYER]: {
                vars: assignVars(vars.color, COLOR_BLUE),
            },
        },
    },
    green: {
        "@layer": {
            [THEME_LAYER]: {
                vars: assignVars(vars.color, COLOR_GREEN),
            },
        },
    },
    red: {
        "@layer": {
            [THEME_LAYER]: {
                vars: assignVars(vars.color, COLOR_RED),
            },
        },
    },
    reset: {
        "@layer": {
            [THEME_LAYER]: {
                vars: assignVars(vars.color, COLOR_RESET),
            },
        },
    },
});
