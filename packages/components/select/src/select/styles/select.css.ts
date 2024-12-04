import { COLOR_RED } from "@boondoggle.design/css-color-palette";
import { vars } from "@boondoggle.design/css-vars";
import { assignVars, style } from "@vanilla-extract/css";

export const selectStyle = style([
    { flexShrink: "0" },
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
