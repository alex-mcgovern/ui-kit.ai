import type { ComponentProps } from 'react'

import { Canvas as StorybookCanvas } from '@storybook/blocks'
import { twMerge } from 'tailwind-merge'

export function Canvas(props: ComponentProps<typeof StorybookCanvas>) {
    return (
        <StorybookCanvas
            {...props}
            className={twMerge(props.className, '!border-muted-200 !my-4 !rounded !border')}
        />
    )
}
