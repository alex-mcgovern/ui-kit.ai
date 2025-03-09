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
