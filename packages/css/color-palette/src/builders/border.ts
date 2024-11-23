import type { PaletteShape } from "../types";

import { step } from "../utils";

type BorderColorMap = Record<string, string>;

export const border = ({
    isOverlay,
    secondary,
}: {
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}): BorderColorMap => {
    return {
        base: step(secondary, isOverlay ? 6 : 5),
    };
};
