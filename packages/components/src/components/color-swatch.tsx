import type { ColorSwatchProps as RACColorSwatchProps } from 'react-aria-components'

import { ColorSwatch as RACColorSwatch } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const colorSwatchStyles = tv({
    base: ['inline-block', 'size-8', 'rounded', 'border-light border', 'shadow-sm'],
})

/**
 * A component for displaying a color swatch.
 * Provides visual representation of a color with proper accessibility semantics.
 */
export function ColorSwatch(props: RACColorSwatchProps) {
    return (
        <RACColorSwatch
            {...props}
            className={(renderProps) =>
                twMerge(
                    colorSwatchStyles(),
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
        />
    )
}
ColorSwatch.displayName = 'ColorSwatch'
