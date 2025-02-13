import { vars } from "@boondoggle.design/css-vars";
import { disabledStyleMacro } from "@boondoggle.design/style-rule-macros";
import { style } from "@vanilla-extract/css";

export const optionsItemStyle = style([
    {
        borderRadius: vars.border_radius.md,
        minHeight: vars.space.space_8,
        padding: `${vars.space.space_1} ${vars.space.space_2}`,
        width: "100%",
    },
    {
        backgroundColor: "transparent",
        cursor: "pointer",
        outline: 0,
        selectors: {
            "&[data-disabled]": disabledStyleMacro(),
            "&[data-focus-visible]": {
                backgroundColor: vars.color.tint_1,
            },
            "&[data-hovered]": {
                backgroundColor: vars.color.tint_1,
            },
            "&[data-pressed]": {
                backgroundColor: vars.color.tint_1,
            },
        },
    },
]);
