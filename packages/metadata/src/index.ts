/**
 * We expose all stories from the `@ui-kit.ai/storybook` package wrapped in
 * `composeStories` this allows them to be consumed as "portable" stories, which
 * can be used for testing and documentation purposes.
 */
import { composeStories as storybookComposeStories } from '@storybook/react'
import { Alert as AlertStories } from '@ui-kit.ai/storybook'
import { Button as ButtonStories } from '@ui-kit.ai/storybook'
import { CheckboxGroup as CheckboxGroupStories } from '@ui-kit.ai/storybook'
import { Checkbox as CheckboxStories } from '@ui-kit.ai/storybook'
import { ComboBox as ComboBoxStories } from '@ui-kit.ai/storybook'
import { Dialog as DialogStories } from '@ui-kit.ai/storybook'
import { EmptyState as EmptyStateStories } from '@ui-kit.ai/storybook'
import { FieldGroup as FieldGroupStories } from '@ui-kit.ai/storybook'
import { Label as LabelStories } from '@ui-kit.ai/storybook'
import { FormTextField as FormTextFieldStories } from '@ui-kit.ai/storybook'
import { Form as FormStories } from '@ui-kit.ai/storybook'
import { Heading as HeadingStories } from '@ui-kit.ai/storybook'
import { Input as InputStories } from '@ui-kit.ai/storybook'
import { ListBox as ListBoxStories } from '@ui-kit.ai/storybook'
import { Menu as MenuStories } from '@ui-kit.ai/storybook'
import { Popover as PopoverStories } from '@ui-kit.ai/storybook'
import { Select as SelectStories } from '@ui-kit.ai/storybook'
import { Table as TableStories } from '@ui-kit.ai/storybook'
import { Tag as TagStories } from '@ui-kit.ai/storybook'
import { TextField as TextFieldStories } from '@ui-kit.ai/storybook'
import { Tooltip as TooltipStories } from '@ui-kit.ai/storybook'

const compose = (
  module: Parameters<typeof storybookComposeStories>[0]
): ReturnType<typeof storybookComposeStories> => {
  return storybookComposeStories(module, {
    applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
  })
}

type Composed = ReturnType<typeof compose>

export const Alert: Composed = compose(AlertStories)
export const Button: Composed = compose(ButtonStories)
export const Checkbox: Composed = compose(CheckboxStories)
export const CheckboxGroup: Composed = compose(CheckboxGroupStories)
export const ComboBox: Composed = compose(ComboBoxStories)
export const Dialog: Composed = compose(DialogStories)
export const EmptyState: Composed = compose(EmptyStateStories)
export const FieldGroup: Composed = compose(FieldGroupStories)
export const Form: Composed = compose(FormStories)
export const FormTextField: Composed = compose(FormTextFieldStories)
export const Heading: Composed = compose(HeadingStories)
export const Input: Composed = compose(InputStories)
export const Label: Composed = compose(LabelStories)
export const ListBox: Composed = compose(ListBoxStories)
export const Menu: Composed = compose(MenuStories)
export const Popover: Composed = compose(PopoverStories)
export const Select: Composed = compose(SelectStories)
export const Table: Composed = compose(TableStories)
export const Tag: Composed = compose(TagStories)
export const TextField: Composed = compose(TextFieldStories)
export const Tooltip: Composed = compose(TooltipStories)
