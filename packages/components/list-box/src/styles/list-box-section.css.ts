import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const menuSectionCSS = style([
    {
        selectors: {
            "&:not(:last-child)::after": {
                background: vars.color.border.base,
                content: "",

                display: "block",
                height: "1px",

                marginBottom: vars.space.space_1,
                marginLeft: vars.space.space_3,

                marginRight: vars.space.space_3,
                marginTop: vars.space.space_1,
            },
        },
    },
]);
