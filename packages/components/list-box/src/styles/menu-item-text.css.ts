import type { ListBoxItemRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../../../src/_css-utils/react-aria-recipe";

import { css } from "../../../../../src/css/index.css";
import { unobtrusiveScrollBar } from "../../../../../src/index.css";

export const container = style([
    {
        overflow: "hidden",
    },
]);

const textCommon = style([
    typography.body_sm,
    {
        display: "block",
        fontWeight: vars.font_weight.normal,
        overflow: "hidden",
        selectors: {
            "&:first-letter": {
                textTransform: "capitalize",
            },
        },
        textAlign: "left",
        textDecoration: "none",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
]);

export const label = style([
    textCommon,
    {
        color: vars.color.text.high_contrast,
    },
]);

export const description = style([
    textCommon,
    {
        color: vars.color.text.low_contrast,
    },
]);

export const listBoxCSS = style([
    css({
        outline: "none",
        overflowY: "auto",
        padding: "space_1",
    }),
    {
        maxHeight: "inherit",
    },
    unobtrusiveScrollBar,
]);

export const listBoxItemCSS = recipe<ReactAriaRecipe<ListBoxItemRenderProps>>({
    base: [
        typography.body_sm,
        css({
            alignItems: "center",
            borderRadius: "sm",
            color: "text_high_contrast",
            cursor: "pointer",
            flexShrink: "0",
            fontWeight: "normal",
            minHeight: "space_8",
            paddingX: "space_2",
            paddingY: "space_1",
            textAlign: "left",
            textDecoration: "none",
            width: "100%",
        }),
        {
            selectors: {
                "&:first-letter": {
                    textTransform: "capitalize",
                },
            },
        },
    ],
    compoundVariants: [],
    variants: {
        allowsDragging: {
            false: {},
            true: {},
        },
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isDragging: {
            false: {},
            true: {},
        },
        isDropTarget: {
            false: {},
            true: {},
        },
        isFocused: {
            false: {},
            true: css({
                background: "tint_hover",
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "tint_hover",
                outline: "none",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "tint_hover",
            }),
        },
        isPressed: {
            false: {},
            true: {},
        },
        isSelected: {
            false: {},
            true: css({ fontWeight: "medium" }),
        },
        selectionBehavior: {
            replace: {},
            toggle: {},
        },
        selectionMode: {
            multiple: {},
            none: {},
            single: {},
        },
    },
});
