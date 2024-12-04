import type { InputRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../../src/_css-utils/react-aria-recipe";

import { css } from "../../../../src/css/index.css";
import { variantColorOverlay } from "../../../../src/index.css";

export const inputContainerCSS = css({
    display: "inline-flex",
    position: "relative",
    width: "100%",
});

export const inputIconCSS = style([
    css({
        bottom: "0",
        color: "text_low_contrast",
        display: "flex",
        height: "100%",
        left: "0",
        marginLeft: "space_1",
        placeItems: "center",
        position: "absolute",
        top: "0",
        width: "space_6",
    }),
    { pointerEvents: "none" },
]);

export const inputCSS = recipe<ReactAriaRecipe<InputRenderProps>>({
    base: [
        typography.body_sm,
        css({
            color: "text_high_contrast",
            height: "element_sm",
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
                isFocused: true,
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
        {
            style: css({
                paddingLeft: "space_7",
                paddingRight: "space_2",
            }),
            variants: {
                hasIcon: "true",
                variant: "default",
            },
        },
        {
            style: css({
                paddingX: "space_2",
            }),
            variants: {
                hasIcon: "false",
                variant: "default",
            },
        },
        {
            style: css({
                paddingLeft: "space_7",
            }),
            variants: {
                hasIcon: "true",
                variant: "unstyled",
            },
        },
        {
            style: css({
                paddingLeft: "space_2",
            }),
            variants: {
                hasIcon: "false",
                variant: "unstyled",
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        hasIcon: {
            false: {},
            true: {},
        },
        isDisabled: {
            false: {},
            true: {},
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
                paddingX: "space_2",
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
