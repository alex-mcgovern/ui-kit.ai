import type { ForwardedRef } from 'react'
import type { ColorFieldProps as AriaColorFieldProps } from 'react-aria-components'

import { ColorField as AriaColorField } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { Input } from './input'

export function ColorField({
  children = <Input />,
  ref,
  ...props
}: AriaColorFieldProps & {
  ref?: ForwardedRef<HTMLInputElement>
}) {
  return (
    <AriaColorField
      {...props}
      className={(rp) =>
        twMerge(
          'group relative w-full grow',
          typeof props.className === 'function'
            ? props.className(rp)
            : props.className
        )
      }
      ref={ref}
    >
      {(renderProps) =>
        typeof children === 'function' ? children(renderProps) : children
      }
    </AriaColorField>
  )
}
ColorField.displayName = 'ColorField'
