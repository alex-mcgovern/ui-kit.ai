import type { PaletteShape } from "./types";

import { buildButtonTheme } from "./builders/button";
import { focus } from "./builders/focus";
import { buildTextColorPalette } from "./builders/text";
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
        button: buildButtonTheme({ isOverlay, primary, secondary }),
        focus: focus({ isOverlay, primary }),
        text: buildTextColorPalette({ isOverlay, primary, secondary }),
        white: step(secondary, 1),
    };
};
