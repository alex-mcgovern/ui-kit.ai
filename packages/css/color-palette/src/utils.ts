import type { PaletteKey } from "./types";

export const step = (
    palette: Record<PaletteKey, string>,
    target_step: number,
) => {
    return palette[Object.keys(palette)[target_step - 1] as PaletteKey];
};
