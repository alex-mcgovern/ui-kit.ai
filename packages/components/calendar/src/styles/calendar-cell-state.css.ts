import { COLOR_RED } from "@boondoggle.design/css-color-palette";
import { transitionRecipe } from "@boondoggle.design/css-recipes";
import { Duration, Ease } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { disabledStyleMacro } from "@boondoggle.design/style-rule-macros";
import { is } from "@boondoggle.design/style-rule-macros";
import { assignVars, style } from "@vanilla-extract/css";

export const calendarCellStyle = style([
    {
        borderRadius: vars.border_radius["50%"],
        cursor: "pointer",
        outline: "none",
    },
    {
        height: vars.space.space_8,
        margin: vars.space["space_0.25"],
        width: vars.space.space_8,
    },
    {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    {
        color: "inherit",
        fontVariantLigatures: "tabular-nums",
    },
    transitionRecipe([
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "background-color",
        },
        {
            duration: Duration.SHORT,
            ease: Ease.EASE_OUT_CIRC,
            property: "color",
        },
    ]),
    {
        backgroundColor: "transparent",
        borderColor: "transparent",
        selectors: {
            "&[data-invalid]": {
                vars: assignVars(vars.color, COLOR_RED),
            },
            "&[data-selected]": {
                backgroundColor: vars.color.primary_1,
                color: vars.color.fg_1_inverted,
            },
            [is(
                "[data-disabled]",
                "[data-unavailable]",
                "[data-outside-month]",
                "[data-outside-visible-range]",
            )]: disabledStyleMacro(),
            [is(
                "[data-focus-visible]:not([data-selected])",
                "[data-hovered]:not([data-selected])",
            )]: {
                backgroundColor: vars.color.tint_2,
            },
        },
    },
]);
