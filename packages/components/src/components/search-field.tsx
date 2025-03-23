import type { ComponentProps } from 'react'
import type { SearchFieldProps as RACSearchFieldProps } from 'react-aria-components'

import { X as IconX } from 'lucide-react'
import { SearchField as RACSearchField } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

// import * as i18n from "../../i18n";
import { FieldButton } from './field-button'
import { Input } from './input'
import { Kbd } from './kbd'
import { Tooltip, TooltipTrigger } from './tooltip'

export function SearchField({
  children = <Input />,
  ...props
}: RACSearchFieldProps) {
  return (
    <RACSearchField
      {...props}
      className={(renderProps) =>
        twMerge(
          typeof props.className === 'function'
            ? props.className(renderProps)
            : props.className,
          'group flex min-w-[40px] flex-col gap-1'
        )
      }
    >
      {children}
    </RACSearchField>
  )
}
SearchField.displayName = 'SearchField'

/**
 * A `FieldButton` to clear the text field.
 */
export function SearchFieldClearButton(
  props: ComponentProps<typeof FieldButton>
) {
  return (
    <TooltipTrigger delay={0}>
      <FieldButton
        {...props}
        className='group-empty:invisible'
        slot='clear'
      >
        <IconX aria-hidden />
      </FieldButton>

      <Tooltip placement='top'>
        <span className='block'>Clear</span>
        <Kbd>Esc</Kbd>
      </Tooltip>
    </TooltipTrigger>
  )
}
SearchFieldClearButton.displayName = 'SearchFieldClearButton'
