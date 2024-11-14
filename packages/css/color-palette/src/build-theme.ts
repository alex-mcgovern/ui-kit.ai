import type { PaletteShape } from "./types";

import { button } from "./builders/button";
import { focus } from "./builders/focus";
import { menuItem } from "./builders/menu-item";
import { text } from "./builders/text";
import { step } from "./utils";

export const buildTheme = ({
    // alpha,
    isOverlay,
    primary,
    secondary,
}: {
    alpha: PaletteShape;
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}) => {
    return {
        black: step(secondary, 12),
        button: button({ isOverlay, primary, secondary }),
        focus: focus({ isOverlay, primary }),
        menu_item: menuItem({ isOverlay, primary, secondary }),
        text: text({ isOverlay, primary, secondary }),
        white: step(secondary, 1),
    };
};
