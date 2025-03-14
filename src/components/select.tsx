import type {
    SelectProps as AriaSelectProps,
    ButtonProps,
} from "react-aria-components";

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
import { INTERNAL_OptionRenderer } from "./options";
import { Popover } from "./popover";
import type { ForwardedRef } from "react";
import {
    renderSlot,
    type SlotNode,
} from "../types/slotted-node";

const selectButtonStyles = tv({
    base: [
        "flex items-center gap-4",
        "py-2 pl-3 pr-2",
        "text-sm",
        "w-full cursor-pointer text-start",
        `group-data-[invalid]:!border-red-400
        group-data-[invalid]:!text-invalid
        group-data-[invalid]:forced-colors:text-[Mark]`,
    ],
    extend: fieldVariants,
});

/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/tooltip)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tooltip.html)
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *     Select,
 *     SelectButton
 * } from "boondoggle"
 * ```
 * ```tsx
 * <Select items={[{ id: "item-1", textValue: "Item 1"}]}>
 *     <SelectButton />
 * </Select>
 * ```
 */
export function Select<
    T extends
        OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>({
    children = SelectButton,
    items,
    ref,
    ...props
}: AriaSelectProps<T> & {
    items?: Iterable<T>;
    ref?: ForwardedRef<HTMLDivElement>;
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
            ref={ref}
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
                                    <INTERNAL_OptionRenderer
                                        {...props}
                                        type="listbox"
                                    />
                                )}
                            </AriaListBox>
                        </Popover>
                    </>
                );
            }}
        </AriaSelect>
    );
}
Select.displayName = "Select";

/**
 * A SelectButton triggers the Popover for a Select. It usually contains the
 * selected item's text value.
 */
export function SelectButton({
    isBorderless,
    slotLeft,
    slotRight,
    ...props
}: ButtonProps & {
    /**
     * A decorative node (e.g. an icon) to render on the left side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotLeft?: SlotNode;
    /**
     * A decorative node (e.g. an icon) to render on the right side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotRight?: SlotNode;
    isBorderless?: boolean;
}) {
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
            {renderSlot(slotLeft, {
                "data-slot": "slot-left",
            })}
            <AriaSelectValue
                className={twMerge([
                    "inline-flex flex-1 items-center gap-2",
                    "truncate",
                    "placeholder-shown:text-placeholder",
                    "group-data-[invalid]:placeholder-shown:text-invalid",
                ])}
            />
            {renderSlot(slotRight, {
                "data-slot": "slot-right",
            })}
        </AriaButton>
    );
}
