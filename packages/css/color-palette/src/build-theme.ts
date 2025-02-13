import type { PaletteShape } from "./types";

import { step } from "./utils";

export const buildTheme = ({
    alpha,
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
        bg_1: step(secondary, 1),
        bg_2: step(secondary, 2),
        border_1: step(secondary, 5),
        border_2: step(secondary, 6),
        fg_1: step(secondary, 11),
        fg_1_inverted: step(secondary, 2),
        fg_2: step(secondary, 12),
        fg_2_inverted: step(secondary, 1),
        focus_ring: step(primary, 8),
        primary_1: step(primary, 10),
        primary_2: step(primary, 11),
        shadow: step(alpha, 5),
        tint_1: step(secondary, 3),
        tint_2: step(secondary, 4),
    } as const;
};
