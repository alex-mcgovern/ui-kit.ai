import type { ReactNode } from 'react'
import type {
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxSectionProps as AriaListBoxSectionProps,
  MenuItemProps as AriaMenuItemProps,
  MenuSectionProps as AriaMenuSectionProps,
} from 'react-aria-components'

import type { Intent } from './intent'

export interface OptionsItemSchema<
  TType extends OptionType,
  TItemId extends string = string,
  TValue extends object = object,
> extends AriaItemProps<TValue>,
    OptionSchemaBase<TType, TItemId> {
  children?: ReactNode
  description?: string
  href?: string
  icon?: ReactNode
  id: TItemId
  intent?: Intent
  items?: never
  textValue: string
}

export type OptionsSchema<
  TType extends OptionType,
  TItemId extends string = string,
  TValue extends object = object,
> =
  | OptionsItemSchema<TType, TItemId, TValue>
  | OptionsSectionSchema<TType, TItemId, TValue>

export interface OptionsSectionSchema<
  TType extends OptionType,
  TItemId extends string = string,
  TValue extends object = object,
> extends AriaSectionProps<OptionsItemSchema<TType, TItemId, TValue>>,
    OptionSchemaBase<TType, TItemId> {
  children?: never
  description?: never
  href?: never
  icon?: ReactNode
  id: string
  intent?: never
  items?: OptionsItemSchema<TType, TItemId, TValue>[]
  textValue?: string
}

export type OptionType = 'listbox' | 'menu'

type AriaItemProps<TValue extends object = object> = Omit<
  AriaListBoxItemProps<TValue> & AriaMenuItemProps<TValue>,
  'children' | 'id' | 'textValue'
>

type AriaSectionProps<TValue extends object = object> = Omit<
  AriaListBoxSectionProps<TValue> & AriaMenuSectionProps<TValue>,
  'children' | 'id' | 'title'
>

interface OptionSchemaBase<
  TType extends OptionType,
  TItemId extends string = string,
> {
  children?: ReactNode
  description?: string
  href?: string
  icon?: ReactNode
  id: string | TItemId
  intent?: Intent
  items?: OptionSchemaBase<TType, TItemId>[]
  textValue?: string
}
