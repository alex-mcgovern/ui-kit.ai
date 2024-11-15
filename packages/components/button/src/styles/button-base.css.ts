import type { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

import { transitionRecipe } from "@boondoggle.design/css-recipes/src/transition.css";
import { Duration } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../../../src/_css-utils/react-aria-recipe";

import { css } from "../../../../../src/css/index.css";

export const buttonBase = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        typography.body_md,
        transitionRecipe(Duration.SHORT, "background-color, color"),
        {
            alignItems: "center",
            display: "inline-flex",
            flexShrink: 0,
            gap: vars.spacing.space_2,
        },
        {
            fontWeight: "medium",
            textDecoration: "none",
            whiteSpace: "nowrap",
        },
        {
            borderRadius: vars.border_radius.sm,
        },
        css({
            outline: "none",
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
