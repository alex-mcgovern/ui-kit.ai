import { vars } from "@boondoggle.design/css-vars";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { css } from "../../../../../src/css/index.css";

const BACKGROUND_COLOR = createVar();

export const menuItem = style([
    {
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: vars.border_radius.sm,
        cursor: "pointer",
        minHeight: vars.spacing.space_8,
        outline: 0,
        padding: `${vars.spacing.space_1} ${vars.spacing.space_2}`,
        selectors: {
            "&[data-disabled]": {
                cursor: "not-allowed",
                opacity: "0.5",
            },
            "&[data-focus-visible]": {
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isHovered,
                },
            },
            "&[data-hovered]": {
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isHovered,
                },
            },
            "&[data-pressed]": {
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isPressed,
                },
            },
        },
        vars: {
            [BACKGROUND_COLOR]: vars.color.menu_item.backgroundColor.base,
        },

        width: "100%",
    },
]);

export const listBoxItemCSS = recipe({
    base: [
        {
            minHeight: vars.spacing.space_8,
            padding: `${vars.spacing.space_1} ${vars.spacing.space_2}`,
        },
        css({
            borderRadius: "sm",
            cursor: "pointer",
            fontWeight: "normal",
            width: "100%",
        }),
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
