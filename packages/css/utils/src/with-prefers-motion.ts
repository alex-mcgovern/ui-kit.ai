import type { StyleRule } from "@vanilla-extract/css";

export function withPrefersMotion({ ...styleRules }: StyleRule): StyleRule {
    return {
        "@media": {
            "(prefers-reduced-motion: no-preference)": {
                ...styleRules,
            },
        },
    };
}
