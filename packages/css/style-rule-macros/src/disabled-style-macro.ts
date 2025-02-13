import type { CSSProperties } from "@vanilla-extract/css";

export function disabledStyleMacro(): CSSProperties {
    return {
        cursor: "not-allowed",
        opacity: "0.5",
    };
}
