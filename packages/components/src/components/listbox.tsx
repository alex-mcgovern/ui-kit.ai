import type { ListBoxProps as AriaListBoxProps } from "react-aria-components";

import { ListBox as AriaListBox } from "react-aria-components";

import type { OptionsSchema } from "../types/options";

import { OptionRenderer } from "./options";

type ListBoxProps<
    T extends OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
> = Omit<AriaListBoxProps<T>, "children" | "layout" | "orientation">;

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/listbox)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/ListBox)
 *
 * ## Usage
 *
 * ```tsx
 * import { ListBox } from "ui-kit.ai"
 * ```
 * ```tsx
 * <ListBox items={[{ id: "item-1", textValue: "Item 1"}]} />
 * ```
 */
export function ListBox<
    T extends OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>(props: ListBoxProps<T>) {
    return (
        <AriaListBox
            {...props}
            className={(renderProps) => (
                typeof props.className === "function"
                    ? props.className(renderProps)
                    : props.className,
                "outline-0"
            )}
        >
            {(props) => <OptionRenderer {...props} type="listbox" />}
        </AriaListBox>
    );
}
