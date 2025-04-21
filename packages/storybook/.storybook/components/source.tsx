import type { ComponentProps } from 'react'

import { Source as SbSource } from '@storybook/blocks'
import React from 'react'

const removeEmptyEventHandlers = (code: string): string => {
    return code
        .split('\n')
        .filter((line) => !line.trim().match(/^on\w+={}\s*,?\s*$/))
        .map((line) => line.replace(/\s*on\w+={}\s*,?\s*/g, ''))
        .join('\n')
}

export const Source = (props: ComponentProps<typeof SbSource>) => {
    return (
        <SbSource
            {...props}
            transform={removeEmptyEventHandlers}
        />
    )
}
