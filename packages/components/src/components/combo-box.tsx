import type { ComponentProps, ForwardedRef } from 'react'
import type { ComboBoxProps as AriaComboBoxProps } from 'react-aria-components'

import { ChevronsUpDownIcon, XIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { ComboBox as AriaComboBox, ComboBoxStateContext, ListBox } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import type { OptionsSchema } from '../types/options'

import { FieldButton } from './field-button'
import { FieldGroup } from './field-group'
import { Input } from './input'
import { OptionRenderer } from './options'
import { Popover } from './popover'

/**
 * A button that triggers the ComboBox Popover. Props such as onPress and
 * isDisabled will be set by the ComboBox.
 */
export function ComboBoxButton(
    props: Omit<ComponentProps<typeof FieldButton>, 'children' | 'isDisabled' | 'onPress'>
) {
    return (
        <FieldButton {...props}>
            <ChevronsUpDownIcon aria-hidden />
        </FieldButton>
    )
}
ComboBoxButton.displayName = 'ComboBoxButton'

/**
 * A button that clears the selected key from the ComboBox. Only visible when
 * the ComboBox has a selected key. Props such as onPress and isDisabled will be
 * set by the ComboBox.
 */
export function ComboBoxClearButton(
    props: Omit<ComponentProps<typeof FieldButton>, 'children' | 'isDisabled' | 'onPress' | 'slot'>
) {
    const state = useContext(ComboBoxStateContext)

    const isEmpty = state?.inputValue == null || state.inputValue === ''

    return (
        <FieldButton
            {...props}
            aria-label='Clear'
            className={(renderProps) =>
                twMerge(
                    'transition-opacity',
                    isEmpty ? 'invisible hidden opacity-0' : 'opacity-100',
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
            isDisabled={isEmpty}
            onPress={() => {
                state?.setInputValue('')
                state?.setSelectedKey(null)
            }}
            slot={null} // Don't inherit default Button behavior from ComboBox.
        >
            <XIcon
                aria-hidden
                className='size-4'
            />
        </FieldButton>
    )
}
ComboBoxClearButton.displayName = 'ComboBoxClearButton'

/**
 * A group that holds a ComboBoxInput and the related button controls.
 * Responsible for setting a ref used to measure the input and size the Popover
 * correctly.
 */
export function ComboBoxFieldGroup(props: ComponentProps<typeof FieldGroup>) {
    return <FieldGroup {...props} />
}
ComboBoxFieldGroup.displayName = 'ComboBoxFieldGroup'

/**
 * An input that is used to interact with a ComboBox. Is customized to
 * toggle the ComboBox on click.
 */
export const ComboBoxInput = ({
    ref,
    ...props
}: ComponentProps<typeof Input> & {
    ref?: ForwardedRef<HTMLInputElement>
}) => {
    const state = useContext(ComboBoxStateContext)

    const { selectedItem, toggle } = state ?? {}
    const { value } = selectedItem ?? {}
    const { icon } = value ?? {}

    return (
        <Input
            {...props}
            defaultValue={value?.name ?? props.defaultValue}
            icon={icon ?? props.icon}
            onClick={(e) => {
                toggle?.(null, 'focus')
                props.onClick?.(e)
            }}
            placeholder={selectedItem?.value.name ?? props.placeholder ?? ''}
            ref={ref}
        />
    )
}
ComboBoxInput.displayName = 'ComboBoxInput'

/**
 * A combo box combines a text input with a listbox, allowing users to filter a
 * list of options to items matching a query.
 */
export function ComboBox<T extends OptionsSchema<'listbox'> = OptionsSchema<'listbox'>>({
    children,
    items,
    ref,
    renderEmptyState,
    showCheckmarkOnSelected = true,
    ...props
}: AriaComboBoxProps<T> &
    Pick<ComponentProps<typeof ListBox>, 'renderEmptyState'> & {
        ref?: ForwardedRef<HTMLDivElement>
        showCheckmarkOnSelected?: boolean
    }) {
    return (
        <AriaComboBox<T>
            {...props}
            className={(renderProps) =>
                twMerge(
                    'group relative w-full grow',
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
            ref={ref}
        >
            {(rp) => (
                <>
                    {typeof children === 'function' ? children(rp) : children}

                    <Popover
                        className='w-[calc(var(--trigger-width)+var(--spacing))]' // Account for the margin on the combobox button
                    >
                        <ListBox<T>
                            className='max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.25rem)]'
                            items={items}
                            renderEmptyState={renderEmptyState}
                        >
                            {(props) => (
                                <OptionRenderer
                                    {...props}
                                    showCheckmarkOnSelected={showCheckmarkOnSelected}
                                    type='listbox'
                                />
                            )}
                        </ListBox>
                    </Popover>
                </>
            )}
        </AriaComboBox>
    )
}
ComboBox.displayName = 'ComboBox'
