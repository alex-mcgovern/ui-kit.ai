import type { LabelProps } from 'react-aria-components'

import { Label as RACLabel } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A Label is used when composing a form field, and handles associating the
 * label with the field via the `id` and `for` attributes on your behalf.
 */
export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        'mb-2 block w-fit cursor-default',
        'text-sm font-medium text-hi-contrast',
        'group-invalid:text-error',
        'group-disabled:cursor-not-allowed group-disabled:opacity-disabled',
        props.className
      )}
    />
  )
}
Label.displayName = 'Label'
