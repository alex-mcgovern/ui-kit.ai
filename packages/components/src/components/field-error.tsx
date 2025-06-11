import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components'

import { type ForwardedRef } from 'react'
import { FieldError as RACFieldError } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A field error displays validation errors for a field within a form.
 */
export function FieldError({
    ref,
    ...props
}: RACFieldErrorProps & {
    ref?: ForwardedRef<HTMLDivElement>
}) {
    return (
        <RACFieldError
            {...props}
            className={(renderProps) =>
                twMerge(
                    'error text-lo-contrast block text-sm font-medium',
                    'mt-1',
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
            ref={ref}
        />
    )
}
FieldError.displayName = 'FieldError'
