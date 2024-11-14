import type { ButtonVariant } from "@boondoggle.design/css-types";
import type { ButtonRenderProps } from "react-aria-components";

import type { PaletteShape } from "../types";

import { step } from "../utils";

type ButtonState =
    | "base"
    | keyof Pick<ButtonRenderProps, "isDisabled" | "isHovered" | "isPressed">;

type Property = "backgroundColor" | "borderColor";

type ButtonThemeConfig = Record<Property, Record<ButtonState, string>>;

type ButtonThemeMap = Record<ButtonVariant, ButtonThemeConfig>;

export const button = ({
    isOverlay,
    primary,
    secondary,
}: {
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}): ButtonThemeMap => {
    return {
        ghost: {
            backgroundColor: {
                base: "transparent",
                isDisabled: "transparent",
                isHovered: step(secondary, isOverlay ? 4 : 3),
                isPressed: step(secondary, isOverlay ? 5 : 4),
            },
            borderColor: {
                base: "transparent",
                isDisabled: "transparent",
                isHovered: "transparent",
                isPressed: "transparent",
            },
        },
        primary: {
            backgroundColor: {
                base: step(primary, 9),
                isDisabled: step(secondary, isOverlay ? 3 : 2),
                isHovered: step(primary, 10),
                isPressed: step(primary, 11),
            },
            borderColor: {
                base: step(primary, 9),
                isDisabled: step(secondary, isOverlay ? 3 : 2),
                isHovered: step(primary, 10),
                isPressed: step(primary, 11),
            },
        },
        secondary: {
            backgroundColor: {
                base: step(secondary, isOverlay ? 3 : 2),
                isDisabled: step(secondary, isOverlay ? 3 : 2),
                isHovered: step(secondary, isOverlay ? 4 : 3),
                isPressed: step(secondary, isOverlay ? 5 : 4),
            },
            borderColor: {
                base: step(secondary, isOverlay ? 3 : 2),
                isDisabled: step(secondary, isOverlay ? 3 : 2),
                isHovered: step(secondary, isOverlay ? 4 : 3),
                isPressed: step(secondary, isOverlay ? 5 : 4),
            },
        },
    };
};
