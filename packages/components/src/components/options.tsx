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

type OptionsSectionProps<TType extends OptionType> =
  OptionsSectionSchema<TType> & {
    type: TType
  }

const optionStyle = tv({
  base: [
    'group/options-item',
    'disabled:text-disabled disabled:forced-colors:text-[GrayText]',
    'flex items-center gap-2',
    'cursor-default',
    'text-sm text-primary',
    'outline outline-0',
    'select-none rounded',
    'px-2.5 py-0.5',
    // hover
    `hover:bg-muted-200 hover:open:bg-muted-200 hover:forced-colors:bg-[Highlight]
    hover:forced-colors:text-[HighlightText]`,
    // focus
    `focus:bg-muted-200 focus:open:bg-muted-200 focus:forced-colors:bg-[Highlight]
    focus:forced-colors:text-[HighlightText]`,
    // selected
    `selected:bg-muted-200 selected:open:bg-muted-200
    selected:forced-colors:bg-[Highlight]
    selected:forced-colors:text-[HighlightText]`,
    // destructive
    'data-[destructive]:text-invalid',
    'data-[destructive]:focus:bg-red-200',
    'forced-color-adjust-none',
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
  isDestructive,
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
      className={optionStyle()}
      data-destructive={isDestructive}
    >
      {({ isSelected }) => (
        <>
          {props.icon != null ? (
            <div
              className={twMerge(
                'pointer-events-none flex size-3 items-center justify-center',
                '[&_svg]:size-3 [&_svg]:shrink-0'
              )}
            >
              {props.icon}
            </div>
          ) : null}
          <div className='flex-1'>
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
              <span
                className='truncate text-sm font-normal text-secondary
                  group-focus/options-item:text-muted-50'
              >
                {props.description}
              </span>
            ) : null}
          </div>
          {showCheckmarkOnSelected === true && isSelected ? (
            <IconCheck className='size-3' />
          ) : null}
        </>
      )}
    </Component>
  )
}
OptionsItem.displayName = 'OptionsItem'

function OptionsSection<TType extends OptionType>({
  type,
  ...props
}: OptionsSectionProps<TType>) {
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
      className='px-2.5 py-1 text-xs font-medium uppercase text-secondary'
      {...props}
    />
  )
}
OptionsSectionHeader.displayName = 'OptionsSectionHeader'
