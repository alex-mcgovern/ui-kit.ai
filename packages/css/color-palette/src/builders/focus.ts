import type { PaletteShape } from "../types";

import { step } from "../utils";

export const focus = ({
    isOverlay,
    primary,
}: {
    isOverlay: boolean;
    primary: PaletteShape;
}) => {
    return {
        borderColor: step(primary, isOverlay ? 9 : 8),
        outlineColor: step(primary, 8),
    };
};
