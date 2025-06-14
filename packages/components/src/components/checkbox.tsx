import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components'

import { Check as IconCheck, Minus as IconMinus } from 'lucide-react'
import React from 'react'
import { Checkbox as AriaCheckbox, composeRenderProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description } from './description'
import { Label } from './label'

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
        '-mx-1 px-1',
        'rounded-sm transition',
        'group',
        '[[role=group]_&]:mb-1',
        '[[role=group]_&]:last-of-type:mb-2',
        'hover:cursor-pointer disabled:cursor-not-allowed',
        'invalid:error',
    ],
})

const boxStyles = tv({
    base: [
        'bg-base',
        'border-field border',
        'size-4',
        'transition-colors',
        'flex flex-shrink-0 items-center justify-center',
        'rounded-sm',
        // disabled
        'group-disabled:opacity-50',
        // hover
        'group-hover:bg-tint',
        'group-hover:border-field-hover',
        // selected
        'group-selected:bg-primary',
        'group-selected:group-hover:bg-primary',
        'group-selected:border-accent',
        'group-selected:group-hover:border-accent',
        // indeterminate
        'group-indeterminate:bg-primary',
        'group-indeterminate:group-hover:bg-primary',
        'group-indeterminate:border-accent',
        'group-indeterminate:group-hover:border-accent',
    ],
})

const iconStyles = tv({
    base: [
        'size-3',
        'transition-colors',
        'stroke-transparent',
        // hover
        'group-hover:stroke-[var(--theme-default-text-lo-contrast)]',
        'group-hover/row:stroke-[var(--theme-default-text-lo-contrast)]',
        'group-selected:stroke-[var(--theme-default-text-accent)]',
        'group-indeterminate:stroke-[var(--theme-default-text-accent)]',
    ],
})

/**
 * A checkbox allows a user to select multiple items from a list of individual
 * items, or to mark one individual item as selected.
 */
export function Checkbox({ description, label, textPosition = 'right', ...props }: CheckboxProps) {
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
                            label={label}
                        />
                    ) : null}
                </>
            )}
        </AriaCheckbox>
    )
}
Checkbox.displayName = 'Checkbox'

function CheckboxLabel({ description, label }: { description?: string; label: string }) {
    return (
        <div>
            <Label className='text-hi-contrast mb-0 flex items-center gap-1'>{label}</Label>
            {description != null ? (
                <Description className='!mt-0'>{description}</Description>
            ) : null}
        </div>
    )
}
CheckboxLabel.displayName = 'CheckboxLabel'
