import type { SelectValueRenderProps } from "react-aria-components";

import { typography } from "@boondoggle/css-variants";
import { red, redA } from "@radix-ui/colors";
import { assignVars, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import type { ReactAriaRecipe } from "../_css-utils/react-aria-recipe";

import { makeTheme, withPrefersMotion } from "../_css-utils";
import { css } from "../css/index.css";
import { vars } from "../index.css";

export const selectValueCSS = recipe<
    ReactAriaRecipe<SelectValueRenderProps<string>>
>({
    base: [
        css({
            alignItems: "center",
            display: "flex",
            gap: "space_2",
            paddingX: "space_2",
        }),
    ],
    variants: {
        isPlaceholder: {
            false: {},
            true: css({ color: "text_low_contrast" }),
        },
    },
});

export const selectCSS = style([
    css({ flexShrink: "0" }),
    {
        selectors: {
            /**
             * Whether the select is disabled.
             */
            "&[data-disabled]": {
                cursor: "not-allowed !important",
                opacity: 0.5,
            },

            /**
             * Whether the select is invalid.
             */
            "&[data-invalid]": {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: redA,
                        isOverlay: true,
                        primary: red,
                        secondary: red,
                    }),
                ),
            },
        },
    },
]);

export const selectButtonCSS = recipe({
    base: [
        typography.body_md,
        css({
            alignItems: "center",
            color: "text_high_contrast",

            display: "flex",

            flexShrink: "0",

            height: "element_sm",
            width: "100%",
        }),
        withPrefersMotion({
            transitionDuration: vars.transitionDuration.short,
            transitionProperty:
                "color, background, border-color, outline, opacity",
            transitionTimingFunction: vars.ease.quart_in_out,
        }),
        {
            outline: "0px solid transparent",

            selectors: {
                "&[data-disabled]": {
                    cursor: "not-allowed !important",
                    opacity: 0.5,
                },

                /**
                 * Whether the select button is disabled.
                 */

                "&[data-placeholder]": {
                    color: vars.color.text_low_contrast,
                },
            },
        },
    ],
    defaultVariants: {
        variant: "default",
    },
    variants: {
        variant: {
            borderless: {
                selectors: {
                    /**
                     * Whether the select button is keyboard focused.
                     */
                    "&[data-focus-visible]": {
                        outline: 0,
                    },

                    /**
                     * Whether the select button is focused, either via a mouse or keyboard.
                     */
                    "&[data-focused]": {
                        outline: 0,
                    },
                },
            },
            default: [
                css({
                    background: "bg_field",
                    border: "border_field",

                    borderRadius: "md",
                }),
                withPrefersMotion({
                    transitionDuration: vars.transitionDuration.short,
                    transitionProperty:
                        "color, background, border-color, outline, opacity",
                    transitionTimingFunction: vars.ease.quart_in_out,
                }),
                {
                    outline: "0px solid transparent",

                    selectors: {
                        /**
                         * Whether the select button is currently hovered with a mouse.
                         */

                        "&[data-disabled]": {
                            cursor: "not-allowed !important",
                            opacity: 0.5,
                        },

                        /**
                         * Whether the select button is currently in a pressed state.
                         */

                        "&[data-focus-visible]": {
                            background: vars.color.bg_field_active,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },

                        /**
                         * Whether the select button is focused, either via a mouse or keyboard.
                         */

                        "&[data-focused]": {
                            background: vars.color.bg_field_active,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },

                        /**
                         * Whether the select button is keyboard focused.
                         */

                        "&[data-hovered]": {
                            background: vars.color.bg_field_active,
                            borderColor: vars.color.border_field_active,
                        },

                        /**
                         * Whether the select button is disabled.
                         */

                        "&[data-pressed]": {
                            background: vars.color.bg_field_active,
                            borderColor: vars.color.focus_border,
                            outline: `2px solid ${vars.color.focus_ring}`,
                        },
                    },
                },
            ],
        },
    },
});
