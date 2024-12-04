import { COLOR_BASE } from "@boondoggle.design/css-color-palette";
import { createGlobalTheme } from "@vanilla-extract/css";

import { DURATION } from "./defs/duration";
import { EASE } from "./defs/ease";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from "./defs/font";
import { BORDER_RADIUS } from "./defs/radius";
import { BOX_SHADOW } from "./defs/shadow";
import { SPACING } from "./defs/space";

/**
 * Global CSS variables attached to the `:root` selector.
 *
 * @see https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */
export const vars = createGlobalTheme(":root", {
    border_radius: BORDER_RADIUS,
    box_shadow: BOX_SHADOW,
    color: COLOR_BASE,
    duration: DURATION,
    ease: EASE,
    font_family: FONT_FAMILY,
    font_size: FONT_SIZE,
    font_weight: FONT_WEIGHT,
    line_height: LINE_HEIGHT,
    space: SPACING,
});
