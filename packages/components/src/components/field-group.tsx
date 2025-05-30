import type { GroupProps as RACGroupProps } from 'react-aria-components'

import { type ForwardedRef } from 'react'
import { composeRenderProps, Group as RACGroup } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { fieldVariants } from '../styles/field-variants'

const fieldGroupStyles = tv({
    base: ['group relative', 'flex items-center', 'overflow-hidden'],
    extend: fieldVariants,
})

/**
 * A group represents a set of related UI controls, and supports interactive
 * states for styling.
 */
export function FieldGroup({
    isBorderless,
    ref,
    ...props
}: RACGroupProps & {
    isBorderless?: boolean
    ref?: ForwardedRef<HTMLDivElement>
}) {
    return (
        <RACGroup
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                fieldGroupStyles({
                    ...renderProps,
                    className,
                    isBorderless,
                })
            )}
            data-variant-borderless={isBorderless}
            ref={ref}
        />
    )
}
FieldGroup.displayName = 'FieldGroup'
