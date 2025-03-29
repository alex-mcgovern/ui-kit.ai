import type { LabelProps } from 'react-aria-components'

import { Text as RACText } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A Description is text with attributes that improve screen reader
 * announcements, usually used to provide more context on a field or control.
 */
export function Description(props: LabelProps) {
  return (
    <RACText
      {...props}
      className={twMerge(
        'mb-1 block w-fit cursor-default last:mt-2',
        'text-sm font-normal text-mid-contrast',
        'group-invalid:text-error',
        'group-disabled:cursor-not-allowed group-disabled:opacity-50',
        props.className
      )}
      slot='description'
    />
  )
}
Description.displayName = 'Description'
