import { frostedGlassBgStyle } from "@boondoggle.design/css-recipes";
import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const popoverCSS = style([
    frostedGlassBgStyle,
    {
        border: `1px solid ${vars.color.border_1}`,
        borderRadius: vars.border_radius.md,
        boxShadow: vars.box_shadow.md,
    },
    {
        selectors: {
            "&[data-trigger='ComboBox']": {
                minWidth: "var(--trigger-width)",
            },
            "&[data-trigger='DatePicker']": {
                width: "unset",
            },
            "&[data-trigger='Select']": {
                minWidth: "var(--trigger-width)",
            },
        },
    },
]);
