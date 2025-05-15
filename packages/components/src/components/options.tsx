import type { HeadingProps } from 'react-aria-components'

import { Check as IconCheck } from 'lucide-react'
import {
    ListBoxItem as AriaListBoxItem,
    ListBoxSection as AriaListBoxSection,
    MenuItem as AriaMenuItem,
    MenuSection as AriaMenuSection,
    Collection,
    Header,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type {
    OptionsItemSchema,
    OptionsSchema,
    OptionsSectionSchema,
    OptionType,
} from '../types/options'

type OptionsSectionProps<TType extends OptionType> = OptionsSectionSchema<TType> & {
    type: TType
}

const optionStyle = tv({
    base: [
        'group/options-item',
        'flex items-center gap-1.5',
        'cursor-default',
        'text-dark text-sm',
        'outline outline-0',
        'rounded select-none',
        'px-1.5 py-0.5',
        'forced-color-adjust-none',
        // disabled
        'disabled:text-light',
        // hover
        'hover:bg-tint-light',
        // focus
        'focus:bg-tint-light',
        // pressed
        'pressed:bg-tint-dark',
        // selected
        'selected:bg-tint',
    ],
})

/**
 * An OptionRenderer is an internal implementation detail, that handles
 * rendering ListBox items or Menu items consistently.
 */
export function OptionRenderer<
    TType extends OptionType,
    TItemId extends string = string,
    TValue extends object = object,
>(
    props: OptionsSchema<TType, TItemId, TValue> & {
        showCheckmarkOnSelected?: boolean
        type: TType
    }
) {
    if (isItem(props)) {
        return <OptionsItem {...props} />
    } else if (isSection(props)) {
        return <OptionsSection<TType> {...props} />
    }

    return null
}
OptionRenderer.displayName = 'OptionRenderer'

function isItem<TType extends OptionType>(
    props: OptionsSchema<TType>
): props is OptionsItemSchema<TType> {
    return !('items' in props)
}

function isSection<TType extends OptionType>(
    item: OptionsSchema<TType> & { type: TType }
): item is OptionsSectionProps<TType> {
    return 'items' in item === true
}

function OptionsItem<TType extends OptionType>({
    intent,
    showCheckmarkOnSelected,
    type,
    ...props
}: OptionsSchema<TType> & {
    showCheckmarkOnSelected?: boolean
    type: TType
}) {
    const Component = type === 'listbox' ? AriaListBoxItem : AriaMenuItem

    return (
        <Component
            {...props}
            aria-label={props.textValue}
            className={(renderProps) =>
                twMerge(
                    optionStyle(),
                    intent,
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
        >
            {({ isSelected }) => (
                <>
                    {props.icon != null ? (
                        <div
                            className={twMerge(
                                'flex items-center justify-center',
                                'text-mid',
                                'pointer-events-none',
                                'size-4 [&_svg]:size-3 [&_svg]:shrink-0'
                            )}
                        >
                            {props.icon}
                        </div>
                    ) : null}
                    <div className='flex-1 truncate'>
                        <span
                            className={twMerge(
                                'flex items-center gap-1',
                                'truncate font-normal',
                                'group-selected/options-item:font-medium'
                            )}
                        >
                            {props.children ?? props.textValue}
                        </span>
                        {props.description != null ? (
                            <span className='text-mid group-focus/options-item:text-dark truncate text-sm font-normal'>
                                {props.description}
                            </span>
                        ) : null}
                    </div>
                    {showCheckmarkOnSelected === true && isSelected ? (
                        <IconCheck className='text-mid size-3' />
                    ) : null}
                </>
            )}
        </Component>
    )
}
OptionsItem.displayName = 'OptionsItem'

function OptionsSection<TType extends OptionType>({ type, ...props }: OptionsSectionProps<TType>) {
    const Component = type === 'listbox' ? AriaListBoxSection : AriaMenuSection

    return (
        <Component className='mb-2 last:mb-0'>
            {props.textValue != null ? (
                <OptionsSectionHeader>{props.textValue}</OptionsSectionHeader>
            ) : null}

            <Collection items={props.items}>
                {(props) => (
                    <OptionsItem
                        {...props}
                        type={type}
                    />
                )}
            </Collection>
        </Component>
    )
}
OptionsSection.displayName = 'OptionsSection'

function OptionsSectionHeader(props: HeadingProps) {
    return (
        <Header
            className='text-mid px-1.5 py-1 text-xs font-medium tracking-wide uppercase'
            {...props}
        />
    )
}
OptionsSectionHeader.displayName = 'OptionsSectionHeader'
