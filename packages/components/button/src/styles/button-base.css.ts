import type { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../../../../../src/_css-utils/react-aria-recipe";

export const buttonBase = recipe<
    ReactAriaRecipe<ButtonRenderProps | LinkRenderProps>
>({
    base: [
        typography.body_md,
        transitionRecipe(
            Duration.MEDIUM,
            "background-color, color",
            Ease.EASE_OUT_CIRC,
        ),
        {
            alignItems: "center",
            display: "inline-flex",
            flexShrink: 0,
            gap: vars.space.space_2,
        },
        {
            fontWeight: vars.font_weight.medium,
            textDecoration: "none",
            whiteSpace: "nowrap",
        },
        {
            borderRadius: vars.border_radius.sm,
            outline: "none",
        },
    ],

    defaultVariants: {
        alignment: "center",
    },
    variants: {
        alignment: {
            center: { justifyContent: "center", textAlign: "center" },
            left: { justifyContent: "start", textAlign: "left" },
        },
    },
});
