import type { CheckboxRenderProps } from "react-aria-components";

import { typography } from "@boondoggle/css-variants";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay, vars } from "../index.css";

export const checkboxTickCSS = recipe({
    base: [
        {
            fill: "none",
            stroke: vars.color.white,
            strokeDasharray: 22,
            strokeDashoffset: "66px",
            strokeWidth: vars.spacing.space_1,
        },
        css({
            height: "space_3",
            transition: "medium",
            width: "space_3",
        }),
    ],
    variants: {
        isSelected: {
            false: {},
            true: {
                strokeDashoffset: "44px",
            },
        },
    },
});

export const checkboxWrapperCSS = recipe<ReactAriaRecipe<CheckboxRenderProps>>({
    base: [
        typography.body_sm,
        css({
            alignItems: "center",
            color: "text_high_contrast",
            display: "flex",
            gap: "space_2",
        }),
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: { false: {}, true: {} },
        isFocusVisible: {
            false: {},
            true: {},
        },
        isHovered: {
            false: {},
            true: {},
        },
        isIndeterminate: {
            false: {},
            true: {},
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
        isPressed: {
            false: {},
            true: {},
        },
        isReadOnly: {
            false: {},
            true: {},
        },
        isRequired: {
            false: {},
            true: {},
        },
        isSelected: {
            false: {},
            true: {},
        },
    },
});

export const checkboxCSS = recipe<ReactAriaRecipe<CheckboxRenderProps>>({
    base: css({
        alignItems: "center",
        border: "border_field",
        borderRadius: "sm",
        display: "flex",
        height: "space_4",
        padding: "space_0.75",
        placeItems: "center",
        transition: "short",
        width: "space_4",
    }),
    compoundVariants: [
        {
            style: css({ background: "bg_button_primary_active" }),
            variants: {
                isHovered: true,
                isSelected: true,
            },
        },
        {
            style: css({ background: "bg_button_secondary_active" }),
            variants: {
                isHovered: true,
                isSelected: false,
            },
        },
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: { false: {}, true: {} },
        isFocusVisible: {
            false: {},
            true: {},
        },
        isHovered: {
            false: {},
            true: {},
        },
        isIndeterminate: {
            false: {},
            true: {},
        },
        isInvalid: {
            false: {},
            true: variantColorOverlay.red,
        },
        isPressed: {
            false: {},
            true: css({ background: "bg_button_primary" }),
        },
        isReadOnly: {
            false: {},
            true: {},
        },
        isRequired: {
            false: {},
            true: {},
        },
        isSelected: {
            false: css({ background: "bg_button_secondary" }),
            true: css({ background: "bg_button_primary", border: "focus" }),
        },
    },
});
