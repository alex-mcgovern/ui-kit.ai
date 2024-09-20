import { typography } from "@boondoggle/css-variants";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { css } from "../css/index.css";
import { elementPaddingRaw, floatingMenu, vars } from "../index.css";

/** -----------------------------------------------------------------------------
 * MENU CSS
 * ------------------------------------------------------------------------------- */

export const menuSectionCSS = style([
    {
        selectors: {
            "&:not(:last-child)::after": {
                background: vars.color.border_rule,
                content: "",

                display: "block",
                height: "1px",

                marginBottom: elementPaddingRaw.sm.y,
                marginLeft: floatingMenu.item.paddingX,

                marginRight: floatingMenu.item.paddingX,
                marginTop: elementPaddingRaw.sm.y,
            },
        },
    },
]);

/** -----------------------------------------------------------------------------
 * MENU ITEM CSS
 * ------------------------------------------------------------------------------- */

export const menuItemNameCSS = style([
    typography.body_sm,
    css({
        color: "text_high_contrast",
        display: "block",
    }),
]);

export const menuItemDescriptionCSS = style([
    typography.body_sm,
    css({
        color: "text_low_contrast",
        display: "block",
    }),
]);

/** -----------------------------------------------------------------------------
 * MENU SECTION HEADER
 * ------------------------------------------------------------------------------- */

export const menuHeaderCSS = style([
    typography.body_sm,
    css({
        alignItems: "center",
        color: "text_low_contrast",
        display: "flex",

        fontWeight: "normal",
        textAlign: "left",
    }),
    {
        height: calc.subtract(
            floatingMenu.item.height,
            floatingMenu.container.padding,
        ),
        paddingLeft: floatingMenu.item.paddingX,
        paddingRight: floatingMenu.item.paddingX,
    },
]);
