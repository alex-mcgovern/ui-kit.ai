import type { CalendarCellRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const calendarCSS = style([
    css({
        color: "text_high_contrast",
        maxWidth: "100%",
    }),
    {
        width: "fit-content",
    },
]);

export const calendarHeaderCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        marginBottom: "space_1",
        marginX: "space_1",
    }),
]);

export const calendarHeadingCSS = style([
    typography.body_md,
    css({
        flexGrow: "1",
        margin: "none",
        textAlign: "center",
    }),
]);

export const calendarGridHeaderCSS = style([
    css({
        borderBottom: "border_rule",
    }),
]);

export const calendarGridHeaderCellCSS = style([
    typography.body_md,
    css({
        color: "text_low_contrast",
        fontWeight: "medium",
        height: "space_8",
        textAlign: "center",
    }),
    {
        verticalAlign: "middle",
    },
]);

export const calendarCellCSS = recipe<ReactAriaRecipe<CalendarCellRenderProps>>(
    {
        base: [
            typography.body_md,
            css({
                aspectRatio: "square",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                height: "space_8",
                margin: "space_0.25",
                outline: "none",
                placeItems: "center",
                textAlign: "center",
                width: "space_8",
            }),
        ],
        variants: {
            isDisabled: {
                false: {},
                true: css({ cursor: "not-allowed", opacity: "0.5" }),
            },
            isFocused: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "bg_button_primary",
                    outline: "focus",
                }),
            },
            isFocusVisible: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "bg_button_primary",
                    outline: "focus",
                }),
            },
            isHovered: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "bg_button_primary",
                }),
            },
            isInvalid: {
                false: {},
                true: variantColorOverlay.red,
            },
            isOutsideMonth: {
                false: {},
                true: css({ cursor: "default", opacity: "0.5" }),
            },
            isOutsideVisibleRange: {
                false: {},
                true: css({ cursor: "default", opacity: "0.5" }),
            },
            isPressed: {
                false: {},
                true: css({
                    background: "button_tint",
                    color: "bg_button_primary",
                }),
            },
            isSelected: {
                false: {},
                true: css({
                    background: "button_tint",
                    border: "focus",
                    color: "bg_button_primary",
                }),
            },
            isSelectionEnd: {
                false: {},
                true: {},
            },
            isSelectionStart: {
                false: {},
                true: {},
            },
            isUnavailable: {
                false: {},
                true: css({ cursor: "not-allowed", opacity: "0.5" }),
            },
        },
    },
);
