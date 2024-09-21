import type { GroupRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay } from "../index.css";

export const groupCSS = recipe<ReactAriaRecipe<GroupRenderProps>>({
    base: [
        typography.body_sm,
        css({
            alignItems: "center",
            background: "bg_field",
            border: "border_field",
            borderRadius: "md",
            display: "flex",
            height: "space_8",
            outline: "none",
            overflow: "hidden",
            position: "relative",
            transition: "short",
            width: "100%",
        }),
    ],

    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocusVisible: {
            false: {},
            true: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isFocusWithin: {
            false: {},
            true: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isHovered: {
            false: {},
            true: css({
                background: "bg_field_active",
                border: "border_field_active",
            }),
        },
        isInvalid: {
            false: {},
            true: [
                variantColorOverlay.red,
                css({
                    border: "focus",
                    outline: "focus",
                }),
            ],
        },
    },
});
