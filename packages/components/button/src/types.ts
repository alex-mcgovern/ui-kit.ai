import type {
    ButtonVariant,
    Color,
    SizeVariant,
} from "@boondoggle.design/css-types";

export type ButtonProps = {
    alignment?: "center" | "left";
    colorOverlay?: Color;
    isSquare?: boolean;
    size?: SizeVariant;
    variant?: ButtonVariant;
};
