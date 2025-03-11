import type { Config } from "tailwindcss";

import TailwindAnimate from "tailwindcss-animate";
import TailwindReactAria from "tailwindcss-react-aria-components";
import colors from "tailwindcss/colors";
import {
    borderWidth,
    fontSize,
    height,
    spacing,
    transitionDuration,
    opacity,
} from "tailwindcss/defaultTheme";

export default {
    darkMode: [
        "variant",
        [
            "@media (prefers-color-scheme: dark) { &:not(.light *) }",
            "&:is(.dark *)",
        ],
    ],
    plugins: [TailwindReactAria, TailwindAnimate],
    theme: {
        colors: {
            brand: colors.stone,
            muted: colors.stone,
            red: colors.red,
            green: colors.emerald,
            yellow: colors.amber,
            current: "currentColor",
            inherit: "inherit",
            transparent: "transparent",
        },
        extend: {
            backgroundColor: {
                base: colors.white,
                "modal-overlay": `var(--bg-modal-overlay)`,
            },
            borderWidth: {
                ...borderWidth,
                DEFAULT: "0.5px",
            },

            opacity: {
                ...opacity,
                disabled: opacity[50],
            },
            fontSize: {
                ...fontSize,
                xs: [
                    "0.6875rem",
                    { lineHeight: "0.875rem" },
                ],
            },
            height: {
                ...height,
                ["ui-element"]: spacing[8],
            },
            maxHeight: {
                ...height,
                ["ui-element"]: spacing[9],
            },
            minHeight: {
                ...height,
                ["ui-element"]: spacing[9],
            },
            textColor: {
                disabled: colors.stone[300],
                invalid: colors.red[600],
                inverted: colors.black,
                placeholder: colors.gray[500],
                ["primary"]: colors.stone[700],
                ["secondary"]: colors.stone[500],
            },
            transitionDuration: {
                ...transitionDuration,
                DEFAULT: "100ms",
            },
        },
    },
} satisfies Partial<Config>;
