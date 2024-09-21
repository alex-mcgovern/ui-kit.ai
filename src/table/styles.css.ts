import type {
    ButtonRenderProps,
    CellRenderProps,
    ColumnRenderProps,
    RowRenderProps,
    TableRenderProps,
} from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { HOVER, unobtrusiveScrollBar, vars } from "../index.css";

/** -----------------------------------------------------------------------------
 * TableContainer
 * ------------------------------------------------------------------------------- */

export const tableContainerCSS = style([
    css({ overflowX: "auto", width: "main_lg" }),
    unobtrusiveScrollBar,
]);

/** -----------------------------------------------------------------------------
 * TableContainer
 * ------------------------------------------------------------------------------- */

export const tableCSS = recipe<ReactAriaRecipe<TableRenderProps>>({
    base: {
        borderSpacing: "0",
    },
    variants: {
        isDropTarget: { false: {}, true: {} },
        isFocused: { false: {}, true: {} },
        isFocusVisible: { false: {}, true: {} },
    },
});

/** -----------------------------------------------------------------------------
 * Column
 * ------------------------------------------------------------------------------- */

export const columnCSS = recipe<ReactAriaRecipe<ColumnRenderProps>>({
    base: [
        typography.body_md,
        css({
            borderBottom: "border_rule",
            color: "text_low_contrast",
            fontWeight: "medium",
            outline: "none",
            paddingX: "space_2",
            paddingY: "space_2",
            textAlign: "left",
            transition: "short",
        }),
    ],
    compoundVariants: [
        {
            style: css({ color: "text_high_contrast" }),
            variants: {
                allowsSorting: true,
                isHovered: true,
            },
        },
    ],
    variants: {
        allowsSorting: {
            false: {},
            true: css({
                cursor: "pointer",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: {},
        },

        isResizing: {
            false: {},
            true: {},
        },
    },
});

/** -----------------------------------------------------------------------------
 * Cell
 * ------------------------------------------------------------------------------- */

export const cellCSS = recipe<ReactAriaRecipe<CellRenderProps>>({
    base: [
        typography.body_sm,
        css({
            borderBottom: "border_rule",
            color: "text_high_contrast",
            outline: "none",
            paddingX: "space_2",
            paddingY: "space_2",
            textAlign: "left",
            transition: "short",
        }),
    ],
    variants: {
        isFocused: {
            false: {},
            true: css({
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: {},
        },
        isPressed: { false: {}, true: {} },
    },
});

/** -----------------------------------------------------------------------------
 * Row
 * ------------------------------------------------------------------------------- */

export const rowCSS = recipe<ReactAriaRecipe<RowRenderProps>>({
    base: [
        css({
            color: "text_high_contrast",
            outline: "none",
            paddingX: "space_8",
            paddingY: "space_1",
            textAlign: "left",
            transition: "short",
        }),
        {
            selectors: {
                "&[data-href]": {
                    cursor: "pointer",
                },
            },
        },
    ],
    variants: {
        allowsDragging: {
            false: {},
            true: css({
                cursor: "grab",
            }),
            undefined: {},
        },
        isDisabled: {
            false: {},
            true: css({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isDragging: {
            false: {},
            true: css({
                opacity: "0.5",
            }),
        },
        isDropTarget: {
            false: {},
            true: css({
                background: "tint_hover",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: [
                {
                    selectors: {
                        "&[data-href]": {
                            background: vars.color.bg_button_secondary_active,
                        },
                    },
                },
            ],
        },
        isPressed: { false: {}, true: {} },
        isSelected: {
            false: {},
            true: css({}),
        },
        selectionBehavior: {
            replace: {},
            toggle: {},
        },
        selectionMode: {
            multiple: css({}),
            none: css({}),
            single: css({}),
        },
    },
});

export const tableSortButtonCSS = recipe<ReactAriaRecipe<ButtonRenderProps>>({
    base: [
        css({
            alignItems: "center",
            borderRadius: "sm",
            color: "text_low_contrast",
            display: "flex",
            flexShrink: "0",
            gap: "space_2",
            marginRight: "auto",
        }),
        withPrefersMotion({
            transition: `color ${vars.transitionDuration.short} ease`,
        }),
        {
            [`&${HOVER}`]: {
                color: vars.color.text_high_contrast,
            },
        },
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({
                cursor: "not-allowed",
                opacity: "0.5",
            }),
        },
        isFocused: {
            false: {},
            true: css({
                outline: "none",
            }),
        },
        isFocusVisible: {
            false: {},
            true: css({ color: "text_high_contrast", outline: "focus" }),
        },
        isHovered: {
            false: {},
            true: css({ color: "text_high_contrast" }),
        },
        isPressed: {
            false: {},
            true: css({ color: "text_high_contrast" }),
        },
        isSorted: {
            false: {},
            true: {},
        },
    },
});

export const sortIconStyle = css({
    marginLeft: "space_1",
    opacity: "0.5",
    transition: "short",
});
