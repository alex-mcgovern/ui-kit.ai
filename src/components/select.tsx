import type {
    SelectProps as AriaSelectProps,
    ButtonProps,
} from "react-aria-components";

import { ChevronsUpDown } from "lucide-react";
import {
    Button as AriaButton,
    ListBox as AriaListBox,
    Select as AriaSelect,
    SelectValue as AriaSelectValue,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import type { OptionsSchema } from "../types/options";

import { fieldVariants } from "../styles/field-variants";
import { OptionRenderer } from "./options";
import { Popover } from "./popover";

const selectButtonStyles = tv({
    base: [
        "flex items-center gap-4",
        "py-2 pl-3 pr-2",
        "text-sm",
        "w-full cursor-pointer text-start",
        `group-data-[invalid]:!text-invalid group-data-[invalid]:!border-red-400
        group-data-[invalid]:forced-colors:text-[Mark]`,
    ],
    extend: fieldVariants,
});

/**
 * A select displays a collapsible list of options and allows a user to select one of them. [Built with React Aria Select component](https://react-spectrum.adobe.com/react-aria/Select.html)
 *
 * ### Usage
 *
 * ```tsx
 * import { Select, Label } from "boondoggle";
 *
 * const ITEMS: OptionsSchema<"listbox"> = [
 *    {
 *        "id": "france",
 *        "textValue": "France"
 *    },
 *    {
 *        "id": "uae",
 *        "textValue": "United Arab Emirates"
 *    },
 *    // ... more items
 * ];
 *
 * <Select
 *     items={ITEMS} // See below for guidance on composing items
 * >
 *     <Label>Choose a country</Label>
 *     <SelectButton />
 * </Select>
 * ```
 *
 * ### Items
 *
 * `Select` accepts an `items` prop, which expects an iterable of type `OptionsSchema<"listbox">`.
 *
 * `OptionsSchema` is a generic type describing either a single list item, or a
 * section containing multiple items.
 *
 * A "flat" list, containing only items might be composed like this:
 *
 * ```tsx
 * const ITEMS: OptionsSchema<"listbox"> = [
 *    {
 *        "id": "france",
 *        "textValue": "France"
 *    },
 *    {
 *        "id": "uae",
 *        "textValue": "United Arab Emirates"
 *    },
 *    // ... more items
 *];
 * ```
 *
 * A more complex list, broken up into sections, might be composed like this:
 *
 * ```tsx
 * const ITEMS: OptionsSchema<"listbox"> = [
 *     {
 *         "id": "europe",
 *         "items": [
 *             {
 *                 "id": "france",
 *                 "textValue": "France"
 *             },
 *             // ... more items
 *         ],
 *         "textValue": "Europe"
 *     },
 *     {
 *         "id": "mena",
 *         "items": [
 *             {
 *                 "id": "uae",
 *                 "textValue": "United Arab Emirates"
 *             },
 *            // ... more items
 *         ],
 *         "textValue": "MENA"
 *     }
 * ];
 * ```
 */
export function Select<
    T extends OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>({
    children = SelectButton,
    items,
    ...props
}: AriaSelectProps<T> & {
    items?: Iterable<T>;
}) {
    return (
        <AriaSelect
            {...props}
            className={(rp) =>
                twMerge(
                    "group relative",
                    typeof props.className === "function"
                        ? props.className(rp)
                        : props.className,
                )
            }
        >
            {(rp) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(rp)
                            : children}
                        <Popover className="min-w-[--trigger-width]">
                            <AriaListBox<T>
                                className="max-h-[inherit] overflow-auto p-1 outline-none
                                    [clip-path:inset(0_0_0_0_round_.75rem)]"
                                items={items}
                            >
                                {(props) => (
                                    <OptionRenderer {...props} type="listbox" />
                                )}
                            </AriaListBox>
                        </Popover>
                    </>
                );
            }}
        </AriaSelect>
    );
}

export function SelectButton({
    isBorderless,
    ...props
}: ButtonProps & { isBorderless?: boolean }) {
    return (
        <AriaButton
            {...props}
            className={(rp) =>
                twMerge(
                    selectButtonStyles({
                        isBorderless,
                    }),
                    typeof props.className === "function"
                        ? props.className(rp)
                        : props.className,
                )
            }
        >
            <AriaSelectValue
                className={twMerge([
                    "inline-flex flex-1 items-center gap-2",
                    "truncate",
                    "placeholder-shown:text-placeholder",
                    "group-data-[invalid]:placeholder-shown:text-invalid",
                ])}
            />
            <ChevronsUpDown aria-hidden className={"size-3"} />
        </AriaButton>
    );
}
