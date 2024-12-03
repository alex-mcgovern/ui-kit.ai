import type { InputRenderProps } from "react-aria-components";

import type { PaletteShape } from "../types";

import { step } from "../utils";

type InputState = "base" | keyof Omit<InputRenderProps, "isInvalid">;

type Property = "backgroundColor" | "borderColor";

type InputThemeConfig = Record<Property, Record<InputState, string>>;

type InputThemeMap = Record<"borderless" | "default", InputThemeConfig>;

export const input = ({
    isOverlay,
    primary,
    secondary,
}: {
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}): InputThemeMap => {
    return {
        borderless: {
            backgroundColor: {
                base: "transparent",
                isDisabled: "transparent",
                isFocused: "transparent",
                isFocusVisible: "transparent",
                isHovered: "transparent",
            },
            borderColor: {
                base: "transparent",
                isDisabled: "transparent",
                isFocused: "transparent",
                isFocusVisible: "transparent",
                isHovered: "transparent",
            },
        },
        default: {
            backgroundColor: {
                base: step(secondary, isOverlay ? 3 : 2),
                isDisabled: step(secondary, isOverlay ? 2 : 1),
                isFocused: step(secondary, 0),
                isFocusVisible: step(secondary, 0),
                isHovered: step(secondary, isOverlay ? 2 : 1),
            },
            borderColor: {
                base: step(secondary, isOverlay ? 7 : 6),
                isDisabled: step(secondary, isOverlay ? 3 : 2),
                isFocused: step(primary, 6),
                isFocusVisible: step(primary, 6),
                isHovered: step(secondary, isOverlay ? 8 : 7),
            },
        },
    };
};
