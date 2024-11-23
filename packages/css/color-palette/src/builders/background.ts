import type { PaletteShape } from "../types";

import { step } from "../utils";

type BorderColorMap = Record<string, string>;

export const background = ({
    alpha,
    secondary,
}: {
    alpha: PaletteShape;
    secondary: PaletteShape;
}): BorderColorMap => {
    return {
        base: step(secondary, 1),
        overlay: step(alpha, 11),
    };
};
