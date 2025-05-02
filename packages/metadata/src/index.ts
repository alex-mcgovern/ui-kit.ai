import { composeStories as storybookComposeStories } from '@storybook/react'
/**
 * We expose all stories from the `@ui-kit.ai/storybook` package wrapped in
 * `composeStories` this allows them to be consumed as "portable" stories, which
 * can be used for testing and documentation purposes.
 */
import { Alert as AlertStories } from '@ui-kit.ai/storybook'
import { Autocomplete as AutocompleteStories } from '@ui-kit.ai/storybook'
import { Avatar as AvatarStories } from '@ui-kit.ai/storybook'
import { Button as ButtonStories } from '@ui-kit.ai/storybook'
import { Card as CardStories } from '@ui-kit.ai/storybook'
import { Chat as ChatStories } from '@ui-kit.ai/storybook'
import { Checkbox as CheckboxStories } from '@ui-kit.ai/storybook'
import { CheckboxGroup as CheckboxGroupStories } from '@ui-kit.ai/storybook'
import { CodeBlock as CodeBlockStories } from '@ui-kit.ai/storybook'
import { CodeInline as CodeInlineStories } from '@ui-kit.ai/storybook'
import { ColorField as ColorFieldStories } from '@ui-kit.ai/storybook'
import { ColorSlider as ColorSliderStories } from '@ui-kit.ai/storybook'
import { ColorSwatch as ColorSwatchStories } from '@ui-kit.ai/storybook'
import { ComboBox as ComboBoxStories } from '@ui-kit.ai/storybook'
import { Description as DescriptionStories } from '@ui-kit.ai/storybook'
import { Dialog as DialogStories } from '@ui-kit.ai/storybook'
import { Disclosure as DisclosureStories } from '@ui-kit.ai/storybook'
import { EmptyState as EmptyStateStories } from '@ui-kit.ai/storybook'
import { FieldButton as FieldButtonStories } from '@ui-kit.ai/storybook'
import { FieldError as FieldErrorStories } from '@ui-kit.ai/storybook'
import { FieldGroup as FieldGroupStories } from '@ui-kit.ai/storybook'
import { Form as FormStories } from '@ui-kit.ai/storybook'
import { FormCheckboxGroup as FormCheckboxGroupStories } from '@ui-kit.ai/storybook'
import { FormComboBox as FormComboBoxStories } from '@ui-kit.ai/storybook'
import { FormResetOnSubmit as FormResetOnSubmitStories } from '@ui-kit.ai/storybook'
import { FormSelect as FormSelectStories } from '@ui-kit.ai/storybook'
import { FormSubmitButton as FormSubmitButtonStories } from '@ui-kit.ai/storybook'
import { FormTextField as FormTextFieldStories } from '@ui-kit.ai/storybook'
import { Heading as HeadingStories } from '@ui-kit.ai/storybook'
import { Input as InputStories } from '@ui-kit.ai/storybook'
import { Kbd as KbdStories } from '@ui-kit.ai/storybook'
import { Label as LabelStories } from '@ui-kit.ai/storybook'
import { ListBox as ListBoxStories } from '@ui-kit.ai/storybook'
import { Loader as LoaderStories } from '@ui-kit.ai/storybook'
import { Markdown as MarkdownStories } from '@ui-kit.ai/storybook'
import { Menu as MenuStories } from '@ui-kit.ai/storybook'
import { Popover as PopoverStories } from '@ui-kit.ai/storybook'
import { SearchField as SearchFieldStories } from '@ui-kit.ai/storybook'
import { Select as SelectStories } from '@ui-kit.ai/storybook'
import { Skeleton as SkeletonStories } from '@ui-kit.ai/storybook'
import { Table as TableStories } from '@ui-kit.ai/storybook'
import { Tabs as TabsStories } from '@ui-kit.ai/storybook'
import { Tag as TagStories } from '@ui-kit.ai/storybook'
import { TextArea as TextAreaStories } from '@ui-kit.ai/storybook'
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
export const Autocomplete: Composed = compose(AutocompleteStories)
export const Avatar: Composed = compose(AvatarStories)
export const Button: Composed = compose(ButtonStories)
export const Card: Composed = compose(CardStories)
export const Chat: Composed = compose(ChatStories)
export const Checkbox: Composed = compose(CheckboxStories)
export const CheckboxGroup: Composed = compose(CheckboxGroupStories)
export const CodeBlock: Composed = compose(CodeBlockStories)
export const CodeInline: Composed = compose(CodeInlineStories)
export const ColorField: Composed = compose(ColorFieldStories)
export const ColorSlider: Composed = compose(ColorSliderStories)
export const ColorSwatch: Composed = compose(ColorSwatchStories)
export const ComboBox: Composed = compose(ComboBoxStories)
export const Description: Composed = compose(DescriptionStories)
export const Dialog: Composed = compose(DialogStories)
export const Disclosure: Composed = compose(DisclosureStories)
export const EmptyState: Composed = compose(EmptyStateStories)
export const FieldButton: Composed = compose(FieldButtonStories)
export const FieldError: Composed = compose(FieldErrorStories)
export const FieldGroup: Composed = compose(FieldGroupStories)
export const Form: Composed = compose(FormStories)
export const FormCheckboxGroup: Composed = compose(FormCheckboxGroupStories)
export const FormComboBox: Composed = compose(FormComboBoxStories)
export const FormResetOnSubmit: Composed = compose(FormResetOnSubmitStories)
export const FormSelect: Composed = compose(FormSelectStories)
export const FormSubmitButton: Composed = compose(FormSubmitButtonStories)
export const FormTextField: Composed = compose(FormTextFieldStories)
export const Heading: Composed = compose(HeadingStories)
export const Input: Composed = compose(InputStories)
export const Kbd: Composed = compose(KbdStories)
export const Label: Composed = compose(LabelStories)
export const ListBox: Composed = compose(ListBoxStories)
export const Loader: Composed = compose(LoaderStories)
export const Markdown: Composed = compose(MarkdownStories)
export const Menu: Composed = compose(MenuStories)
export const Popover: Composed = compose(PopoverStories)
export const SearchField: Composed = compose(SearchFieldStories)
export const Select: Composed = compose(SelectStories)
export const Skeleton: Composed = compose(SkeletonStories)
export const Table: Composed = compose(TableStories)
export const Tabs: Composed = compose(TabsStories)
export const Tag: Composed = compose(TagStories)
export const TextArea: Composed = compose(TextAreaStories)
export const TextField: Composed = compose(TextFieldStories)
export const Tooltip: Composed = compose(TooltipStories)
