import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const overlayArrow = style([
    {
        height: vars.spacing.space_3,
        width: vars.spacing.space_3,
    },
]);

export const overlayArrowSvg = style([
    {
        fill: vars.color.background.base,
        stroke: vars.color.border.base,
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
