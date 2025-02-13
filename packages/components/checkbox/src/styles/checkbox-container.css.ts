import { COLOR_RED } from "@boondoggle.design/css-color-palette";
import { typography } from "@boondoggle.design/css-variants";
import { vars } from "@boondoggle.design/css-vars";
import { assignVars, style } from "@vanilla-extract/css";

export const checkboxContainerStyle = style([
    typography.body_md,
    {
        borderRadius: vars.border_radius.md,
        padding: vars.space.space_1,
    },
    {
        alignItems: "center",
        display: "flex",
        gap: vars.space.space_2,
    },
    {
        color: vars.color.fg_2,
    },
    {
        selectors: {
            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },
            "&[data-invalid]": {
                vars: assignVars(vars.color, COLOR_RED),
            },
        },
    },
]);
