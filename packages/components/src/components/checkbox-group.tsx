import type { CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components'

import React, { type ForwardedRef } from 'react'
import { CheckboxGroup as AriaCheckboxGroup } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 *
 * It can be composed with a Label and Description to correctly label the input
 * to assistive technologies, and provide extra context.
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
