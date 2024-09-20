import type {
    DateInputRenderProps,
    DateSegmentRenderProps,
} from "react-aria-components";

import { typography } from "@boondoggle/css-variants";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const dateInputCSS = recipe<
    ReactAriaRecipe<
        DateInputRenderProps & { isInvalid: boolean } // Bug in react-aria-components, this type is missing — https://github.com/adobe/react-spectrum/issues/5662
    >
>({
    base: [
        typography.body_sm,
        css({
            alignItems: "center",
            color: "text_high_contrast",
            display: "flex",
            height: "element_sm",
            paddingX: "space_2",
            width: "100%",
        }),
    ],
    compoundVariants: [
        {
            style: css({ cursor: "not-allowed", opacity: "0.5" }),
            variants: {
                isDisabled: true,
                variant: "default",
            },
        },
        {
            style: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
            variants: {
                isFocusWithin: true,
                variant: "default",
            },
        },
        {
            style: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
            variants: {
                isFocusVisible: true,
                variant: "default",
            },
        },
        {
            style: css({
                background: "bg_field_active",
                border: "border_field_active",
            }),
            variants: {
                isHovered: true,
                variant: "default",
            },
        },
        {
            style: [
                variantColorOverlay.red,
                css({
                    border: "focus",
                    outline: "focus",
                }),
            ],
            variants: {
                isInvalid: true,
                variant: "default",
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        isDisabled: {
            false: {},
            true: {},
        },

        isFocusVisible: {
            false: {},
            true: {},
        },

        isFocusWithin: {
            false: {},
            true: {},
        },

        isHovered: {
            false: {},
            true: {},
        },

        isInvalid: {
            false: {},
            true: {},
        },

        variant: {
            default: css({
                background: "bg_field",
                border: "border_field",
                borderRadius: "md",
                outline: "none",
                transition: "short",
            }),
            unstyled: css({
                background: "transparent",
                border: "none",
                outline: "none",
            }),
        },
    },
});

export const dateSegmentCSS = recipe<ReactAriaRecipe<DateSegmentRenderProps>>({
    base: [
        css({
            borderRadius: "sm",
            color: "text_high_contrast",
            display: "flex",
            height: "space_6",
            paddingX: "space_0.5",
            placeItems: "center",
            transition: "short",
        }),
        {
            fontVariantNumeric: "tabular-nums",
            textAlign: "end",
        },
    ],
    variants: {
        isFocused: {
            false: {},
            true: [
                variantColorOverlay.blue,
                css({
                    background: "tint_hover",
                    color: "text_high_contrast",
                    outline: "none",
                }),
                {
                    caretColor: "transparent",
                },
            ],
        },
        isFocusVisible: {
            false: {},
            true: [
                variantColorOverlay.blue,
                css({
                    background: "tint_hover",
                    color: "text_high_contrast",
                    outline: "none",
                }),
                {
                    caretColor: "transparent",
                },
            ],
        },
        isHovered: {
            false: {},
            true: css({
                background: "tint_hover",
                color: "text_high_contrast",
            }),
        },
        isInvalid: {
            false: {},
            true: [
                css({ color: "text_low_contrast" }),
                variantColorOverlay.red,
            ],
        },
        isPlaceholder: { false: {}, true: css({ color: "text_low_contrast" }) },
        isReadOnly: { false: {}, true: {} },
        type: {
            day: {},
            dayPeriod: {},
            era: {},
            hour: {},
            literal: css({ padding: "none" }),
            minute: {},
            month: {},
            second: {},
            timeZoneName: {},
            year: {},
        },
    },
});
