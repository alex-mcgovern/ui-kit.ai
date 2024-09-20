import type { InputRenderProps } from "react-aria-components";

import { typography } from "@boondoggle/css-variants";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { css } from "../css/index.css";
import { variantColorOverlay, vars } from "../index.css";

export const textareaCSS = recipe<ReactAriaRecipe<InputRenderProps>>({
    base: [
        typography.body_md,
        css({
            background: "bg_field",
            border: "border_field",
            borderRadius: "md",
            color: "text_high_contrast",
            outline: "none",
            paddingX: "space_2",
            transition: "short",
            width: "100%",
        }),
        {
            minHeight: calc.multiply(vars.height.element_sm, 4),
            outline: "0px solid transparent",

            resize: "none",
        },
    ],
    variants: {
        isDisabled: {
            false: {},
            true: css({ cursor: "not-allowed", opacity: "0.5" }),
        },
        isFocused: {
            false: {},
            true: css({
                background: "bg_field_active",
                border: "focus",
                outline: "focus",
            }),
        },
        isFocusVisible: {
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
