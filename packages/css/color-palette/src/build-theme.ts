import type { PaletteShape } from "./types";

import { background } from "./builders/background";
import { border } from "./builders/border";
import { button } from "./builders/button";
import { focus } from "./builders/focus";
import { input } from "./builders/input";
import { menuItem } from "./builders/menu-item";
import { text } from "./builders/text";
import { step } from "./utils";

export const buildTheme = ({
    alpha,
    alphaWhite,
    isOverlay,
    primary,
    secondary,
}: {
    alpha: PaletteShape;
    alphaWhite: PaletteShape;
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}) => {
    return {
        background: background({ alpha, alphaWhite, secondary }),
        black: step(secondary, 12),
        border: border({ isOverlay, primary, secondary }),
        button: button({ isOverlay, primary, secondary }),
        focus: focus({ isOverlay, primary }),
        input: input({ isOverlay, primary, secondary }),
        menu_item: menuItem({ isOverlay, primary, secondary }),
        text: text({ isOverlay, primary, secondary }),
        white: step(secondary, 1),
    };
};
