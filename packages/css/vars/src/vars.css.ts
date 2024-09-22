import { COLOR_BASE } from "@boondoggle.design/css-color-palette";
import { createGlobalTheme } from "@vanilla-extract/css";

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from "./defs/font";
import { SPACING } from "./defs/space";

/**
 * Global CSS variables attached to the `:root` selector.
 *
 * @see https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */
export const vars = createGlobalTheme(":root", {
    color: COLOR_BASE,
    font_family: FONT_FAMILY,
    font_size: FONT_SIZE,
    font_weight: FONT_WEIGHT,
    line_height: LINE_HEIGHT,
    spacing: SPACING,
});
