import type { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";
import type { ColorOverlay } from "../index.css";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const buttonCSS = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        typography.body_md,
        css({
            alignItems: "center",
            borderRadius: "md",
            display: "inline-flex",
            flexShrink: "0",
            fontWeight: "medium",

            gap: "space_2",
            outline: "none",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
        }),
    ],

    compoundVariants: [
        /** ---------------------------------------------
         * Primary
         * ----------------------------------------------- */
        {
            style: css({
                background: "bg_button_primary_active",
            }),
            variants: {
                appearance: "primary",
                isHovered: true,
            },
        },
        {
            style: css({
                background: "bg_button_primary_active",
            }),
            variants: {
                appearance: "primary",
                isPressed: true,
            },
        },
        {
            style: css({
                background: "bg_button_primary_active",
            }),
            variants: {
                appearance: "primary",
                isCurrent: true,
            },
        },
        {
            style: css({
                outline: "none",
            }),
            variants: {
                appearance: "primary",
                isFocused: true,
            },
        },
        {
            style: css({
                background: "bg_button_primary_active",
                outline: "focus",
            }),
            variants: {
                appearance: "primary",
                isFocusVisible: true,
            },
        },
        /** ---------------------------------------------
         * Secondary
         * ----------------------------------------------- */
        {
            style: css({
                background: "bg_button_secondary_active",
                border: "border_field_active",
            }),
            variants: {
                appearance: "secondary",
                isHovered: true,
            },
        },
        {
            style: css({
                background: "bg_button_secondary_active",
                border: "border_field_active",
            }),
            variants: {
                appearance: "secondary",
                isPressed: true,
            },
        },
        {
            style: css({
                background: "bg_button_secondary_active",
                border: "border_field_active",
            }),
            variants: {
                appearance: "secondary",
                isCurrent: true,
            },
        },
        {
            style: css({
                outline: "none",
            }),
            variants: {
                appearance: "secondary",
                isFocused: true,
            },
        },
        {
            style: css({
                background: "bg_button_secondary_active",
                border: "focus",
                outline: "focus",
            }),
            variants: {
                appearance: "secondary",
                isFocusVisible: true,
            },
        },
        /** ---------------------------------------------
         * Ghost
         * ----------------------------------------------- */
        {
            style: css({
                background: "bg_button_ghost_active",
            }),
            variants: {
                appearance: "ghost",
                isHovered: true,
            },
        },
        {
            style: css({
                background: "bg_button_ghost_active",
            }),
            variants: {
                appearance: "ghost",
                isPressed: true,
            },
        },
        {
            style: css({
                background: "bg_button_ghost_active",
            }),
            variants: {
                appearance: "ghost",
                isCurrent: true,
            },
        },
        {
            style: css({
                outline: "none",
            }),
            variants: {
                appearance: "ghost",
                isFocused: true,
            },
        },
        {
            style: css({
                background: "bg_button_ghost_active",
                outline: "focus",
            }),
            variants: {
                appearance: "ghost",
                isFocusVisible: true,
            },
        },
    ],
    defaultVariants: {
        alignment: "center",
        appearance: "primary",
        size: "sm",
    },
    variants: {
        alignment: {
            center: [css({ justifyContent: "center", textAlign: "center" })],
            left: [css({ justifyContent: "start", textAlign: "left" })],
        },
        appearance: {
            ghost: css({
                background: "bg_button_ghost",
                color: "text_high_contrast",
            }),
            primary: css({
                background: "bg_button_primary",
                color: "white",
            }),

            secondary: css({
                border: "border_field",
                color: "text_high_contrast",
            }),
        },
        colorOverlay: variantColorOverlay,
        isCurrent: {
            false: {},
            true: {},
        },
        isDisabled: {
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: {},
        },
        isFocusVisible: {
            false: {},
            true: {},
        },
        isHovered: {
            false: {},
            true: {},
        },
        isPressed: {
            false: {},
            true: {},
        },
        size: {
            lg: css({
                height: "space_12",
                paddingX: "space_6",
                paddingY: "space_3",
            }),
            md: css({
                height: "space_10",
                paddingX: "space_4",
                paddingY: "space_3",
            }),
            sm: css({
                height: "space_8",
                paddingX: "space_3",
                paddingY: "space_1",
            }),
            square_lg: css({
                aspectRatio: "square",
                flexGrow: "0",
                height: "space_12",
                width: "space_12",
            }),
            square_md: css({
                aspectRatio: "square",
                flexGrow: "0",
                height: "space_10",
                width: "space_10",
            }),
            square_sm: css({
                aspectRatio: "square",
                flexGrow: "0",
                height: "space_8",
                width: "space_8",
            }),
            square_xs: css({
                aspectRatio: "square",
                flexGrow: "0",
                height: "space_6",
                width: "space_6",
            }),
            xs: css({
                height: "space_6",
                paddingX: "space_3",
                paddingY: "space_0",
            }),
        },
    },
});

export type ButtonVariants = {
    alignment?: "center" | "left";
    appearance?: "ghost" | "primary" | "secondary";
    colorOverlay?: ColorOverlay;
    size?:
        | "lg"
        | "md"
        | "sm"
        | "square_lg"
        | "square_md"
        | "square_sm"
        | "square_xs"
        | "xs";
};
