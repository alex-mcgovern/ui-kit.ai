import type { Config } from "tailwindcss";

import TailwindAnimate from "tailwindcss-animate";
import TailwindReactAria from "tailwindcss-react-aria-components";
import colors from "tailwindcss/colors";
import {
    borderWidth,
    fontSize,
    height,
    opacity,
    spacing,
    transitionDuration,
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
            black: colors.black,
            brand: colors.stone,
            current: "currentColor",
            green: colors.emerald,
            inherit: "inherit",
            muted: colors.stone,
            red: colors.red,
            transparent: "transparent",
            yellow: colors.amber,
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

            fontSize: {
                ...fontSize,
                xs: ["0.6875rem", { lineHeight: "0.875rem" }],
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
            opacity: {
                ...opacity,
                disabled: opacity[50],
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
