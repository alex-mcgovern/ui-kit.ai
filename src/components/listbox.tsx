import type { ListBoxProps as AriaListBoxProps } from "react-aria-components";
import { ListBox as AriaListBox } from "react-aria-components";
import type { OptionsSchema } from "../types/options";
import { INTERNAL_OptionRenderer } from "./options";

type ListBoxProps<
    T extends
        OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
> = Omit<
    AriaListBoxProps<T>,
    "layout" | "orientation" | "children"
>;

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/listbox)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/ListBox.html)
 *
 * ## Usage
 *
 * ```tsx
 * import { ListBox } from "boondoggle"
 * ```
 * ```tsx
 * <ListBox items={[{ id: "item-1", textValue: "Item 1"}]} />
 * ```
 */
export function ListBox<
    T extends
        OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
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
            {(props) => (
                <INTERNAL_OptionRenderer
                    {...props}
                    type="listbox"
                />
            )}
        </AriaListBox>
    );
}
