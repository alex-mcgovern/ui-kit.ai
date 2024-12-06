import type { PaletteShape } from "../types";

import { step } from "../utils";

type BorderColorMap = Record<string, string>;

export const background = ({
    alpha,
    alphaWhite,
    secondary,
}: {
    alpha: PaletteShape;
    alphaWhite: PaletteShape;
    secondary: PaletteShape;
}): BorderColorMap => {
    return {
        base: step(secondary, 1),
        frosted: step(alphaWhite, 11),
        overlay: step(alpha, 6),
        tint: step(secondary, 2),
    } as const;
};
