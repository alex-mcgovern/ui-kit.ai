import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const popoverCSS = style([
    {
        backgroundColor: vars.color.background.base,
        border: `1px solid ${vars.color.border.base}`,
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
