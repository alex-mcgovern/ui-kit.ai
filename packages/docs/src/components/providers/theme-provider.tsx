'use client'

import type { Dispatch, SetStateAction } from 'react'

import { ColorPalette, DEFAULT_COLOR_PALETTE_INPUT } from '@ui-kit.ai/theme'
import { createContext, useState } from 'react'

export const ThemeContext = createContext<null | {
    accent: string
    error: string
    setAccent: Dispatch<SetStateAction<string>>
    setError: Dispatch<SetStateAction<string>>
    setSuccess: Dispatch<SetStateAction<string>>
    setWarning: Dispatch<SetStateAction<string>>
    success: string
    warning: string
}>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [accent, setAccent] = useState<string>(DEFAULT_COLOR_PALETTE_INPUT.accent)
    const [error, setError] = useState<string>(DEFAULT_COLOR_PALETTE_INPUT.error)
    const [success, setSuccess] = useState<string>(DEFAULT_COLOR_PALETTE_INPUT.success)
    const [warning, setWarning] = useState<string>(DEFAULT_COLOR_PALETTE_INPUT.warning)

    const palette = new ColorPalette({
        accent: accent,
        error: error,
        success: success,
        warning: warning,
    })

    // const cssVars = palette.cssVars()
    const css = palette.css({
        overrideTwColors: true,
        selector: ':root',
    })

    return (
        <ThemeContext.Provider
            value={{
                accent,
                error,
                setAccent,
                setError,
                setSuccess,
                setWarning,
                success,
                warning,
            }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: css,
                }}
            />
            {children}
        </ThemeContext.Provider>
    )
}
