export enum Color {
    BG_ACCENT_DARK = 'bg-accent-dark',
    BG_ACCENT_LIGHT = 'bg-accent-light',
    BG_ACCENT_MID = 'bg-accent-mid',
    BG_BASE = 'bg-base',
    BG_RAISED = 'bg-raised',
    BG_TINT = 'bg-tint',
    BG_TINT_DARK = 'bg-tint-dark',
    BG_TINT_LIGHT = 'bg-tint-light',
    BORDER_DARK = 'border-dark',
    BORDER_LIGHT = 'border-light',
    BORDER_MID = 'border-mid',
    TEXT_ACCENT = 'text-accent',
    TEXT_DARK = 'text-dark',
    TEXT_LIGHT = 'text-light',
    TEXT_MID = 'text-mid',
}

export enum Intent {
    DEFAULT = 'default',
    ERROR = 'error',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
}

export enum TwBgUtility {
    ACCENT_DARK = 'bg-accent-dark',
    ACCENT_LIGHT = 'bg-accent-light',
    ACCENT_MID = 'bg-accent-mid',
    BASE = 'bg-base',
    RAISED = 'bg-raised',
    TINT = 'bg-tint',
    TINT_DARK = 'bg-tint-dark',
    TINT_LIGHT = 'bg-tint-light',
}

export enum TwBorderUtility {
    DARK = 'border-dark',
    LIGHT = 'border-light',
    MID = 'border-mid',
}

export enum TwTextUtility {
    ACCENT = 'text-accent',
    DARK = 'text-dark',
    LIGHT = 'text-light',
    MID = 'text-mid',
}

export type ColorPaletteInput = {
    accent: string
    error: string
    gray?: string
    success: string
    warning: string
}
