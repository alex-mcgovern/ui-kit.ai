export enum Color {
    BG_BASE = 'bg-base',
    BG_BASE_RAISED = 'bg-base-raised',
    BG_PRIMARY = 'bg-primary',
    BG_PRIMARY_HOVER = 'bg-primary-hover',
    BG_TINT = 'bg-tint',
    BORDER_DEFAULT = 'border-default',
    BORDER_FIELD = 'border-field',
    BORDER_FIELD_HOVER = 'border-field-hover',
    TEXT_ACCENT = 'text-accent',
    TEXT_HI_CONTRAST = 'text-hi-contrast',
    TEXT_LO_CONTRAST = 'text-lo-contrast',
    TEXT_PLACEHOLDER = 'text-placeholder',
}

export enum Intent {
    DEFAULT = 'default',
    ERROR = 'error',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
}

export enum TwBorderUtility {
    DEFAULT = 'border-default',
    FIELD = 'border-field',
    FIELD_HOVER = 'border-field-hover',
}

export type ColorPaletteInput = {
    accent: string
    error: string
    success: string
    warning: string
}
