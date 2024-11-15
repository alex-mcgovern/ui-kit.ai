import type { StyleRule } from "@vanilla-extract/css";

/**
 * @deprecated
 */
export function withPrefersMotion({ ...styleRules }: StyleRule): StyleRule {
    return {
        "@media": {
            "(prefers-reduced-motion: no-preference)": {
                ...styleRules,
            },
        },
    };
}

type PaletteKey = `${string}${number}`;

type PaletteShape = Record<PaletteKey, string>;

const step = (palette: Record<PaletteKey, string>, target_step: number) => {
    return palette[Object.keys(palette)[target_step - 1] as PaletteKey];
};

export const makeTheme = ({
    alpha,
    isOverlay,
    primary,
    secondary,
}: {
    alpha: PaletteShape;
    isOverlay: boolean;
    primary: PaletteShape;
    secondary: PaletteShape;
}) => {
    return {
        backdrop: step(alpha, 11),

        background: step(secondary, 1),

        bg_button_ghost: "transparent",
        bg_button_ghost_active: step(secondary, isOverlay ? 4 : 3),

        bg_button_primary: step(primary, 9),
        bg_button_primary_active: step(primary, 10),

        bg_button_secondary: step(secondary, isOverlay ? 3 : 2),
        bg_button_secondary_active: step(secondary, isOverlay ? 4 : 3),

        bg_field: step(secondary, isOverlay ? 3 : 2),
        bg_field_active: step(secondary, 1),

        bg_filter_button: step(secondary, isOverlay ? 4 : 3),
        bg_filter_button_active: step(secondary, isOverlay ? 5 : 4),

        bg_switch: step(secondary, 7),

        bg_switch_active: step(primary, 9),
        bg_toast: step(secondary, 12),

        black: step(secondary, 12),

        border_field: step(secondary, isOverlay ? 7 : 6),
        border_field_active: step(secondary, isOverlay ? 8 : 7),

        border_rule: step(secondary, isOverlay ? 6 : 5),
        button_tint: step(primary, 5),

        focus_border: step(primary, isOverlay ? 9 : 8),
        focus_ring: step(primary, 6),

        switch_foreground: step(secondary, 1),
        tab_hover_color: step(secondary, isOverlay ? 4 : 3),

        tab_selected_color: step(primary, isOverlay ? 4 : 3),
        text_high_contrast: step(secondary, isOverlay ? 11 : 12),

        text_low_contrast: step(secondary, 11),
        tint_active: step(secondary, isOverlay ? 5 : 4),

        tint_default: step(secondary, isOverlay ? 3 : 2),
        tint_hover: step(secondary, isOverlay ? 4 : 3),

        toast_icon: step(primary, 7),
        toast_text: step(primary, 1),
        white: step(secondary, 1),
    };
};
