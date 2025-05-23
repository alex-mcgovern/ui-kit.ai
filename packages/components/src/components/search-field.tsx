import type { SearchFieldProps as RACSearchFieldProps } from 'react-aria-components'

import { X as IconX } from 'lucide-react'
import { type ComponentProps, type ForwardedRef, forwardRef } from 'react'
import { SearchField as RACSearchField } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { FieldButton } from './field-button'
import { Input } from './input'
import { Tooltip, TooltipTrigger } from './tooltip'

/**
 * A search field allows a user to enter and clear a search query.
 */
export const SearchField = forwardRef(
    (
        { children = <Input />, ...props }: RACSearchFieldProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <RACSearchField
                {...props}
                className={(renderProps) =>
                    twMerge(
                        typeof props.className === 'function'
                            ? props.className(renderProps)
                            : props.className,
                        'group relative w-full grow'
                    )
                }
                ref={ref}
            >
                {children}
            </RACSearchField>
        )
    }
)
SearchField.displayName = 'SearchField'

/**
 * A `FieldButton` to clear the text field.
 */
export function SearchFieldClearButton(props: ComponentProps<typeof FieldButton>) {
    return (
        <TooltipTrigger delay={0}>
            <FieldButton
                {...props}
                className='group-empty:invisible'
                slot='clear'
            >
                <IconX aria-hidden />
            </FieldButton>

            <Tooltip placement='top'>Clear</Tooltip>
        </TooltipTrigger>
    )
}
SearchFieldClearButton.displayName = 'SearchFieldClearButton'
