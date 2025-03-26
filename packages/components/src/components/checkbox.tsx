import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components'

import { Check as IconCheck, Minus as IconMinus } from 'lucide-react'
import React from 'react'
import {
  Checkbox as AriaCheckbox,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { i18n } from '../i18n'
import { focusRing } from '../styles/focus-ring'
import { Description } from './description'
import { Label } from './label'
import { Tag } from './tag'

type CheckboxProps = Omit<AriaCheckboxProps, 'children'> &
  (
    | {
        description?: string
        label: string
        textPosition?: 'left' | 'right'
      }
    | {
        description?: string
        label?: never
        textPosition?: never
      }
  )

const checkboxContainerStyles = tv({
  base: [
    'flex gap-3',
    'items-center',
    // "items-start",
    // "has-[[slot='description']]:items-start",
    // "[:has([slot=description])]:items-start",
    '-mx-1 px-1',
    'group',
    '[[role=group]_&]:mb-1',
    '[[role=group]_&]:last-of-type:mb-2',
    'hover:cursor-pointer disabled:cursor-not-allowed',
    'rounded-sm outline-offset-2 transition invalid:text-error-dark',
  ],
  extend: focusRing,
  variants: {
    isDisabled: {
      false: '',
      true: 'text-mid-contrast',
    },
  },
})

const boxStyles = tv({
  base: [
    'bg-background',
    'border border-mid-contrast',
    'size-4',
    'transition-colors',
    'flex flex-shrink-0 items-center justify-center',
    'rounded-sm',
    // disabled
    'group-disabled:opacity-disabled',
    // hover
    'group-hover:bg-tint',
    'group-hover:border-mid-contrast',
    // selected
    'group-selected:bg-hi-contrast',
    'group-selected:group-hover:bg-hi-contrast',
    'group-selected:border-hi-contrast',
    'group-selected:group-hover:border-hi-contrast',
    // indeterminate
    'group-indeterminate:bg-hi-contrast',
    'group-indeterminate:group-hover:bg-hi-contrast',
    'group-indeterminate:border-hi-contrast',
    'group-indeterminate:group-hover:border-hi-contrast',
    // invalid
    'group-invalid:border-error-light',
    'group-hover:group-invalid:bg-error-tint-light',
    'group-hover:group-invalid:border-error',
    // invalid selected
    'group-selected:group-invalid:bg-error',
    'group-selected:group-invalid:group-hover:bg-error-light',
    'group-selected:group-invalid:border-error',
    'group-selected:group-invalid:group-hover:border-error-light',
    // invalid indeterminate
    'group-indeterminate:group-invalid:bg-error',
    'group-indeterminate:group-invalid:group-hover:bg-error-light',
    'group-indeterminate:group-invalid:border-error',
    'group-indeterminate:group-invalid:group-hover:border-error-light',
    // w. description
    // "group-has-[[data-slot='description']]:mt-1",
  ],
})

const iconStyles = tv({
  base: [
    'size-3',
    'transition-colors',
    'stroke-transparent',
    // hover
    'group-hover:stroke-mid-contrast',
    'group-hover/row:stroke-mid-contrast',
    'group-selected:stroke-tint-light',
    'group-indeterminate:stroke-tint-light',
    // invalid
    'group-hover:group-invalid:stroke-error',
    'group-hover/row:group-invalid:stroke-error',
    'group-selected:group-invalid:stroke-error-tint-light',
    'group-indeterminate:group-invalid:stroke-error-tint-light',
  ],
})

/**
 * A checkbox allows a user to select multiple items from a list of individual
 * items, or to mark one individual item as selected.
 */
export function Checkbox({
  description,
  label,
  textPosition = 'right',
  ...props
}: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxContainerStyles({
          ...renderProps,
          className,
        })
      )}
    >
      {(renderProps) => (
        <>
          {textPosition === 'left' && label != null ? (
            <CheckboxLabel
              description={description}
              isRequired={renderProps.isRequired}
              label={label}
            />
          ) : null}

          <div className={boxStyles()}>
            {renderProps.isIndeterminate ? (
              <IconMinus
                aria-hidden
                className={iconStyles()}
              />
            ) : (
              <IconCheck
                aria-hidden
                className={iconStyles()}
              />
            )}
          </div>

          {textPosition === 'right' && label != null ? (
            <CheckboxLabel
              description={description}
              isRequired={renderProps.isRequired}
              label={label}
            />
          ) : null}
        </>
      )}
    </AriaCheckbox>
  )
}
Checkbox.displayName = 'Checkbox'

function CheckboxLabel({
  description,
  isRequired,
  label,
}: {
  description?: string
  isRequired: boolean
  label: string
}) {
  return (
    <div>
      <Label className='mb-0 flex items-center gap-1'>
        {label}
        {isRequired ? <Tag>{i18n.form.required}</Tag> : null}
      </Label>
      {description != null ? (
        <Description className='!mt-0'>{description}</Description>
      ) : null}
    </div>
  )
}
CheckboxLabel.displayName = 'CheckboxLabel'
