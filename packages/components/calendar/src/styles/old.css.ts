import type { CalendarCellRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../../../src/_css-utils/react-aria-recipe";

import { css } from "../../../../../src/css/index.css";
import { variantColorOverlay } from "../../../../../src/index.css";

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
