import type { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components'

import { type ForwardedRef } from 'react'
import { CheckboxGroup as AriaCheckboxGroup } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 */
export const CheckboxGroup = ({
    ref,
    ...props
}: AriaCheckboxGroupProps & {
    ref?: ForwardedRef<HTMLDivElement>
}) => {
    return (
        <AriaCheckboxGroup
            {...props}
            className={(renderProps) =>
                twMerge(
                    'group',
                    props.isInvalid === true ? 'error' : '',
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
            ref={ref}
        >
            {props.children}
        </AriaCheckboxGroup>
    )
}
CheckboxGroup.displayName = 'CheckboxGroup'
