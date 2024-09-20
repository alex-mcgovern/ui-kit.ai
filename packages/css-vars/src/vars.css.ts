import { createGlobalTheme } from "@vanilla-extract/css";

import { FONT_SIZE, LINE_HEIGHT } from "./defs/typography";

/**
 * Global CSS variables attached to the `:root` selector.
 * 
 * @see https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */
export const vars = createGlobalTheme(":root", {
	font_size: FONT_SIZE,
	line_height: LINE_HEIGHT,
});
