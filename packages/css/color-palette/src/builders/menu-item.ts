import type { PaletteShape } from "../types";

import { step } from "../utils";

export const menuItem = ({
    isOverlay,
    secondary,
}: {
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}) => {
    return {
        backgroundColor: {
            base: "transparent",
            isDisabled: "transparent",
            isHovered: step(secondary, isOverlay ? 4 : 3),
            isPressed: step(secondary, isOverlay ? 5 : 4),
        },
    };
};
