import type { TextColor } from "@boondoggle.design/css-types";

import type { PaletteShape } from "../types";

import { step } from "../utils";

type TextColorMap = Record<TextColor, string>;

export const buildTextColorPalette = ({
    isOverlay,
    secondary,
}: {
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}): TextColorMap => {
    return {
        high_contrast: step(secondary, isOverlay ? 11 : 12),
        low_contrast: step(secondary, 11),
    };
};
