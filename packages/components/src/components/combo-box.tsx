import type {
    ComponentProps,
    CSSProperties,
    ForwardedRef,
    RefObject,
} from "react";
import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import { ChevronsUpDown as IconChevronsUpDown, X as IconX } from "lucide-react";
import React, {
    createContext,
    useContext,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import {
    ComboBox as AriaComboBox,
    ComboBoxStateContext,
    ListBox,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import type { OptionsSchema } from "../types/options";

import { FieldButton } from "./field-button";
import { FieldGroup } from "./field-group";
import { Input } from "./input";
import { OptionRenderer } from "./options";
import { Popover } from "./popover";

/**
 * A button that triggers the ComboBox Popover. Props such as onPress and
 * isDisabled will be set by the ComboBox.
 */
export function ComboBoxButton(
    props: Omit<
        ComponentProps<typeof FieldButton>,
        "children" | "isDisabled" | "onPress"
    >,
) {
    return (
        <FieldButton {...props}>
            <IconChevronsUpDown aria-hidden />
        </FieldButton>
    );
}
ComboBoxButton.displayName = "ComboBoxButton";

/**
 * A button that clears the selected key from the ComboBox. Only visible when
 * the ComboBox has a selected key. Props such as onPress and isDisabled will be
 * set by the ComboBox.
 */
export function ComboBoxClearButton(
    props: Omit<
        ComponentProps<typeof FieldButton>,
        "children" | "isDisabled" | "onPress" | "slot"
    >,
) {
    const state = useContext(ComboBoxStateContext);

    const isEmpty = state?.inputValue == null || state.inputValue === "";

    return (
        <FieldButton
            {...props}
            aria-label="Clear"
            className={(renderProps) =>
                twMerge(
                    "transition-opacity",
                    isEmpty ? "invisible hidden opacity-0" : "opacity-100",
                    typeof props.className === "function"
                        ? props.className(renderProps)
                        : props.className,
                )
            }
            isDisabled={isEmpty}
            onPress={() => {
                state?.setInputValue("");
                state?.setSelectedKey(null);
            }}
            slot={null} // Don't inherit default Button behavior from ComboBox.
        >
            <IconX aria-hidden className="size-4" />
        </FieldButton>
    );
}
ComboBoxClearButton.displayName = "ComboBoxClearButton";

/**
 * A group that holds a ComboBoxInput and the related button controls.
 * Responsible for setting a ref used to measure the input and size the Popover
 * correctly.
 */
export function ComboBoxFieldGroup(props: ComponentProps<typeof FieldGroup>) {
    const ref = useContext(ComboBoxRefContext);
    if (!ref) throw Error("ComboBoxFieldGroup must be used within a ComboBox");
    return <FieldGroup {...props} ref={ref} />;
}
ComboBoxFieldGroup.displayName = "ComboBoxFieldGroup";

/**
 * An input that is used to interact with a ComboBox. Is customized to
 * toggle the ComboBox on click.
 */
export const ComboBoxInput = ({
    ref,
    ...props
}: ComponentProps<typeof Input> & {
    ref?: ForwardedRef<HTMLInputElement>;
}) => {
    const state = useContext(ComboBoxStateContext);

    const { selectedItem, toggle } = state ?? {};
    const { value } = selectedItem ?? {};
    const { icon } = value ?? {};

    return (
        <Input
            {...props}
            defaultValue={value?.name ?? props.defaultValue}
            icon={icon ?? props.icon}
            onClick={(e) => {
                toggle?.(null, "focus");
                props.onClick?.(e);
            }}
            placeholder={selectedItem?.value.name ?? props.placeholder ?? ""}
            ref={ref}
        />
    );
};
ComboBoxInput.displayName = "ComboBoxInput";

const ComboBoxRefContext =
    createContext<null | RefObject<HTMLDivElement | null>>(null);
ComboBoxRefContext.displayName = "ComboBoxRefContext";

/**
 * A combo box combines a text input with a listbox, allowing users to filter a
 * list of options to items matching a query.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/combobox)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/ComboBox)
 *
 * ## Usage
 *
 * ```typescript
 * import {
 *     ComboBox,
 *     ComboBoxFieldGroup,
 *     ComboBoxButton,
 *     ComboBoxInput,
 *     ComboBoxClearButton
 * } from "ui-kit.ai"
 *
 * <ComboBox items={[{ id: "item-1", textValue: "Item 1"}]}>
 *     <ComboBoxFieldGroup>
 *         <ComboBoxInput
 *             isBorderless
 *             icon={<SearchIcon />}
 *             placeholder="Type to search..."
 *         />
 *         <ComboBoxClearButton />
 *         <ComboBoxButton />
 *     </ComboBoxFieldGroup>
 * </ComboBox>
 * ```
 */
export function ComboBox<
    T extends OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>({
    children,
    items,
    ref,
    renderEmptyState,
    ...props
}: AriaComboBoxProps<T> &
    Pick<ComponentProps<typeof ListBox>, "renderEmptyState"> & {
        ref?: ForwardedRef<HTMLDivElement>;
    }) {
    const [groupRef, groupWidth] = usePopoverWidth();

    return (
        <ComboBoxRefContext.Provider value={groupRef}>
            <AriaComboBox<T>
                {...props}
                className={(renderProps) =>
                    twMerge(
                        "group relative w-full grow",
                        typeof props.className === "function"
                            ? props.className(renderProps)
                            : props.className,
                    )
                }
                ref={ref}
            >
                {(rp) => (
                    <>
                        {typeof children === "function"
                            ? children(rp)
                            : children}

                        <Popover
                            className="w-[--trigger-width]"
                            style={
                                {
                                    "--trigger-width": `${groupWidth}px`,
                                } as CSSProperties
                            }
                        >
                            <ListBox<T>
                                className="max-h-[inherit] overflow-auto p-1 outline-0
                                    [clip-path:inset(0_0_0_0_round_.25rem)]"
                                items={items}
                                renderEmptyState={renderEmptyState}
                            >
                                {(props) => (
                                    <OptionRenderer {...props} type="listbox" />
                                )}
                            </ListBox>
                        </Popover>
                    </>
                )}
            </AriaComboBox>
        </ComboBoxRefContext.Provider>
    );
}
ComboBox.displayName = "ComboBox";

/**
 * React Aria components provides a `trigger-width` CSS variable that can be used to
 * set the width of the popover. In some cases, this doesn't work as expected, so we
 * need to calculate the width of the trigger element ourselves.
 */
function usePopoverWidth() {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<null | number>(null);

    useLayoutEffect(() => {
        const targetElement = ref.current;
        if (!targetElement) return;

        const updateWidth = () => {
            setWidth(targetElement.offsetWidth);
        };

        updateWidth();

        const observer = new MutationObserver(() => {
            updateWidth();
        });

        observer.observe(targetElement, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, []);

    return [ref, width] as const;
}
