import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const fieldButtonStyle = style([
    typography.body_md,
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    {
        borderRadius: vars.border_radius.sm,
        flexShrink: "0",
    },
    {
        height: vars.space.space_8,
        marginRight: vars.space["space_0.5"],
        width: vars.space.space_8,
    },
    {
        transitionBehavior: "allow-discrete",
    },
    transitionRecipe([
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "background-color",
        },
        {
            duration: Duration.LONG,
            ease: Ease.EASE_OUT_CIRC,
            property: "opacity",
        },
        {
            duration: Duration.MEDIUM,
            ease: Ease.EASE_OUT_CIRC,
            property: "display",
        },
        {
            duration: Duration.MEDIUM,
            ease: Ease.EASE_OUT_CIRC,
            property: "filter",
        },
    ]),
    {
        selectors: {
            "&:first-of-type": {
                marginLeft: calc.subtract(vars.space.space_1, "1px"),
            },
            "&:is([data-focus-visible],[data-focused])": {
                outline: 0,
            },
            "&:last-of-type": {
                marginRight: calc.subtract(vars.space.space_1, "1px"),
            },
            "&[data-disabled]": {
                opacity: 0.5,
            },
            "&[data-hovered]": {
                background:
                    vars.color.button.secondary.backgroundColor.isHovered,
            },
            "&[data-pressed]": {
                background:
                    vars.color.button.secondary.backgroundColor.isHovered,
            },
        },
    },
]);
