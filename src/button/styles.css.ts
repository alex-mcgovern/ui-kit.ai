import type { Size } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";
import type { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { createVar, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";
// import type { ColorOverlay } from "../index.css";

import { DEFAULT_SIZE } from "../../packages/css/config/src";
import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

/** -----------------------------------------------------------------------------
 * Padding
 * ------------------------------------------------------------------------------- */

const paddingX = createVar();
const paddingY = createVar();

const paddingVariant = styleVariants<Record<Size, ComplexStyleRule>>({
    lg: {
        vars: {
            [paddingX]: vars.spacing.space_6,
            [paddingY]: vars.spacing.space_3,
        },
    },
    md: {
        vars: {
            [paddingX]: vars.spacing.space_4,
            [paddingY]: vars.spacing.space_3,
        },
    },
    sm: {
        vars: {
            [paddingX]: vars.spacing.space_3,
            [paddingY]: vars.spacing.space_1,
        },
    },
    xs: {
        vars: {
            [paddingX]: vars.spacing.space_3,
            [paddingY]: vars.spacing.space_1,
        },
    },
});

export const buttonPaddingRecipe = recipe({
    base: {
        padding: `${paddingY} ${paddingX}`,
    },
    defaultVariants: {
        size: DEFAULT_SIZE,
    },
    variants: {
        isSquare: {
            false: {},
            true: {
                vars: {
                    [paddingX]: paddingY,
                },
            },
        },
        size: paddingVariant,
    },
});

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
    },
});
