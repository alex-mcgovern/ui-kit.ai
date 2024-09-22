import type { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

import { typography } from "@boondoggle.design/css-variants";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../../../src/_css-utils/react-aria-recipe";

import { css } from "../../../../../src/css/index.css";

export const buttonBase = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        typography.body_md,
        css({
            alignItems: "center",
            borderRadius: "sm",
            display: "inline-flex",
            flexShrink: "0",
            fontWeight: "medium",

            gap: "space_2",
            outline: "none",
            textDecoration: "none",
            transition: "short",
            whiteSpace: "nowrap",
        }),
    ],

    defaultVariants: {
        alignment: "center",
    },
    variants: {
        alignment: {
            center: [css({ justifyContent: "center", textAlign: "center" })],
            left: [css({ justifyContent: "start", textAlign: "left" })],
        },
    },
});
