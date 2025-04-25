import type { SelectProps as AriaSelectProps, ButtonProps } from 'react-aria-components'

import { ChevronsUpDownIcon } from 'lucide-react'
import { type ForwardedRef, type ReactNode, useContext } from 'react'
import {
    Button as AriaButton,
    ListBox as AriaListBox,
    Select as AriaSelect,
    SelectValue as AriaSelectValue,
    SelectStateContext,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { OptionsSchema } from '../types/options'

import { fieldVariants } from '../styles/field-variants'
import { renderSlot, type SlotNode } from '../types/slotted-node'
import { OptionRenderer } from './options'
import { Popover } from './popover'

const selectButtonStyles = tv({
    base: [
        'flex items-center gap-1',
        'py-2 pr-2 pl-3',
        '[&:has([data-slot=slot-left])]:pl-1',
        '[&:has([data-slot=slot-right])]:pr-1',
        'text-sm',
        'w-full cursor-pointer text-start',
    ],
    extend: fieldVariants,
})

/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 */
export function Select<T extends OptionsSchema<'listbox'> = OptionsSchema<'listbox'>>({
    children = SelectButton,
    items,
    ref,
    showCheckmarkOnSelected = true,
    ...props
}: AriaSelectProps<T> & {
    items?: Iterable<T>
    ref?: ForwardedRef<HTMLDivElement>
    showCheckmarkOnSelected?: boolean
}) {
    return (
        <AriaSelect
            {...props}
            className={(rp) =>
                twMerge(
                    'group invalid:error relative w-full',
                    typeof props.className === 'function' ? props.className(rp) : props.className
                )
            }
            ref={ref}
        >
            {(rp) => {
                return (
                    <>
                        {typeof children === 'function' ? children(rp) : children}
                        <Popover className='min-w-[--trigger-width]'>
                            <AriaListBox<T>
                                className='max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]'
                                items={items}
                            >
                                {(props) => (
                                    <OptionRenderer
                                        {...props}
                                        showCheckmarkOnSelected={showCheckmarkOnSelected}
                                        type='listbox'
                                    />
                                )}
                            </AriaListBox>
                        </Popover>
                    </>
                )
            }}
        </AriaSelect>
    )
}
Select.displayName = 'Select'

/**
 * A SelectButton triggers the Popover for a Select. It usually contains the
 * selected item's text value.
 */
export function SelectButton({
    isBorderless,
    slotLeft,
    slotRight = <ChevronsUpDownIcon aria-hidden />,
    ...props
}: ButtonProps & {
    isBorderless?: boolean
    /**
     * A decorative node (e.g. an icon) to render on the left side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotLeft?: SlotNode
    /**
     * A decorative node (e.g. an icon) to render on the right side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotRight?: SlotNode
}) {
    const state = useContext(SelectStateContext)
    const selectedItemIcon: null | ReactNode = state?.selectedItem?.props.icon

    return (
        <AriaButton
            {...props}
            className={(rp) =>
                twMerge(
                    selectButtonStyles({
                        isBorderless,
                    }),
                    typeof props.className === 'function' ? props.className(rp) : props.className
                )
            }
        >
            {renderSlot(
                // @ts-expect-error - TODO: Fix select types
                selectedItemIcon ?? slotLeft,
                {
                    'data-slot': 'slot-left',
                }
            )}
            <AriaSelectValue
                className={twMerge([
                    'inline-flex flex-1 items-center gap-2',
                    'truncate',
                    'placeholder-shown:text-lo-contrast',
                ])}
            >
                {({ selectedText }) => selectedText}
            </AriaSelectValue>
            {renderSlot(slotRight, {
                'data-slot': 'slot-right',
            })}
        </AriaButton>
    )
}
SelectButton.displayName = 'SelectButton'
