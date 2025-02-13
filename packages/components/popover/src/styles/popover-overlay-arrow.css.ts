import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const overlayArrow = style([
    {
        height: vars.space.space_3,
        width: vars.space.space_3,
    },
]);

export const overlayArrowSvg = style([
    {
        fill: vars.color.bg_1,
        stroke: vars.color.border_1,
        strokeWidth: 1,
    },
    {
        selectors: {
            "[data-placement='bottom'] &": {
                transform: "rotate(180deg)",
            },
            "[data-placement='left'] &": {
                transform: "rotate(-90deg)",
            },
            "[data-placement='right'] &": {
                transform: "rotate(90deg)",
            },
            "[data-placement='top'] &": {
                transform: "rotate(0deg)",
            },
        },
    },
]);
