import type {
    ButtonVariant,
    ColorOverlay,
    Size,
} from "@boondoggle.design/css-types";

export type ButtonProps = {
    alignment?: "center" | "left";
    colorOverlay?: ColorOverlay;
    isSquare?: boolean;
    size?: Size;
    variant?: ButtonVariant;
};
