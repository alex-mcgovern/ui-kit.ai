import type { ButtonVariant, Color, Size } from "@boondoggle.design/css-types";

export type ButtonProps = {
    alignment?: "center" | "left";
    colorOverlay?: Color;
    isSquare?: boolean;
    size?: Size;
    variant?: ButtonVariant;
};
