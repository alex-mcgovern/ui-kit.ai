/**
 * We expose all stories wrapped in `composeStories` which allows them to be consumed
 * as "portable" stories that can be used for testing and documentation purposes.
 */

import { composeStories as storybookComposeStories } from '@storybook/react'

import * as AlertStories from './stories/alert.stories'
import * as AvatarStories from './stories/avatar.stories'
import * as BreadcrumbsStories from './stories/breadcrumbs.stories'
import * as ButtonStories from './stories/button.stories'
import * as CardStories from './stories/card.stories'
import * as ChatStories from './stories/chat.stories'
import * as CheckboxGroupStories from './stories/checkbox-group.stories'
import * as CheckboxStories from './stories/checkbox.stories'
import * as CodeBlockStories from './stories/code-block.stories'
import * as CodeInlineStories from './stories/code-inline.stories'
import * as ColorFieldStories from './stories/color-field.stories'
import * as ColorSliderStories from './stories/color-slider.stories'
import * as ColorSwatchStories from './stories/color-swatch.stories'
import * as ComboBoxStories from './stories/combo-box.stories'
import * as DescriptionStories from './stories/description.stories'
import * as DialogStories from './stories/dialog.stories'
import * as DisclosureStories from './stories/disclosure.stories'
import * as EmptyStateStories from './stories/empty-state.stories'
import * as FieldButtonStories from './stories/field-button.stories'
import * as FieldErrorStories from './stories/field-error.stories'
import * as FieldGroupStories from './stories/field-group.stories'
import * as FormCheckboxGroupStories from './stories/form-checkbox-group.stories'
import * as FormComboBoxStories from './stories/form-combo-box.stories'
import * as FormResetOnSubmitStories from './stories/form-reset-on-submit.stories'
import * as FormSelectStories from './stories/form-select.stories'
import * as FormSubmitButtonStories from './stories/form-submit-button.stories'
import * as FormTextFieldStories from './stories/form-text-field.stories'
import * as FormStories from './stories/form.stories'
import * as HeadingStories from './stories/heading.stories'
import * as InputStories from './stories/input.stories'
import * as KbdStories from './stories/kbd.stories'
import * as LabelStories from './stories/label.stories'
import * as LinkStories from './stories/link.stories'
import * as ListBoxStories from './stories/list-box.stories'
import * as LoaderStories from './stories/loader.stories'
import * as MarkdownStories from './stories/markdown.stories'
import * as MenuStories from './stories/menu.stories'
import * as PopoverStories from './stories/popover.stories'
import * as SearchFieldStories from './stories/search-field.stories'
import * as SelectStories from './stories/select.stories'
import * as SkeletonStories from './stories/skeleton.stories'
import * as TableStories from './stories/table.stories'
import * as TabsStories from './stories/tabs.stories'
import * as TagStories from './stories/tag.stories'
import * as TextAreaStories from './stories/text-area.stories'
import * as TextFieldStories from './stories/text-field.stories'
import * as TooltipStories from './stories/tooltip.stories'
import * as TopNavStories from './stories/top-nav.stories'

const compose = (
    module: Parameters<typeof storybookComposeStories>[0]
): ReturnType<typeof storybookComposeStories> => {
    return storybookComposeStories(module, {
        applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
    })
}

type Composed = ReturnType<typeof compose>

export const Alert: Composed = compose(AlertStories)
export const Avatar: Composed = compose(AvatarStories)
export const Breadcrumbs: Composed = compose(BreadcrumbsStories)
export const Button: Composed = compose(ButtonStories)
export const Card: Composed = compose(CardStories)
export const Chat: Composed = compose(ChatStories)
export const CheckboxGroup: Composed = compose(CheckboxGroupStories)
export const Checkbox: Composed = compose(CheckboxStories)
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
export const FormCheckboxGroup: Composed = compose(FormCheckboxGroupStories)
export const FormComboBox: Composed = compose(FormComboBoxStories)
export const FormResetOnSubmit: Composed = compose(FormResetOnSubmitStories)
export const FormSelect: Composed = compose(FormSelectStories)
export const FormSubmitButton: Composed = compose(FormSubmitButtonStories)
export const FormTextField: Composed = compose(FormTextFieldStories)
export const Form: Composed = compose(FormStories)
export const Heading: Composed = compose(HeadingStories)
export const Input: Composed = compose(InputStories)
export const Kbd: Composed = compose(KbdStories)
export const Label: Composed = compose(LabelStories)
export const Link: Composed = compose(LinkStories)
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
export const TopNav: Composed = compose(TopNavStories)
