import { vars } from "@boondoggle.design/css-vars";
import { createVar, style } from "@vanilla-extract/css";

const BACKGROUND_COLOR = createVar();

export const listBoxItemStyle = style([
    {
        borderRadius: vars.border_radius.md,
        minHeight: vars.space.space_8,
        padding: `${vars.space.space_2} ${vars.space.space_2}`,
        width: "100%",
    },
    {
        backgroundColor: BACKGROUND_COLOR,
        cursor: "pointer",
        outline: 0,
        selectors: {
            "&[data-disabled]": {
                cursor: "not-allowed",
                opacity: "0.5",
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isDisabled,
                },
            },
            "&[data-focus-visible]": {
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isHovered,
                },
            },
            "&[data-hovered]": {
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isHovered,
                },
            },
            "&[data-pressed]": {
                vars: {
                    [BACKGROUND_COLOR]:
                        vars.color.menu_item.backgroundColor.isPressed,
                },
            },
        },
        vars: {
            [BACKGROUND_COLOR]: vars.color.menu_item.backgroundColor.base,
        },
    },
]);
