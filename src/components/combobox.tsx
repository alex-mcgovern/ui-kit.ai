import type {
    ComponentProps,
    CSSProperties,
    ForwardedRef,
    RefObject,
} from "react";
import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import {
    ChevronsUpDown as IconChevronsUpDown,
    X as IconX,
} from "lucide-react";
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

import { genericForwardRef } from "../lib/forward-ref";
import { FieldButton } from "./field-button";
import { FieldGroup } from "./field-group";
import { Input } from "./input";
import { INTERNAL_OptionRenderer } from "./options";
import { Popover } from "./popover";

export function ComboBoxButton() {
    return (
        <FieldButton>
            <IconChevronsUpDown aria-hidden />
        </FieldButton>
    );
}

export function ComboBoxClearButton() {
    const state = useContext(ComboBoxStateContext);

    const isEmpty =
        state?.inputValue == null ||
        state.inputValue === "";

    return (
        <FieldButton
            aria-label="Clear"
            onPress={() => {
                state?.setInputValue("");
                state?.setSelectedKey(null);
            }}
            className={twMerge(
                "transition-opacity",
                isEmpty
                    ? "invisible hidden opacity-0"
                    : "opacity-100",
            )}
            slot={null} // Don't inherit default Button behavior from ComboBox.
        >
            <IconX aria-hidden className="size-4" />
        </FieldButton>
    );
}

export function ComboBoxFieldGroup(
    props: ComponentProps<typeof FieldGroup>,
) {
    const ref = useContext(ComboBoxRefContext);
    if (!ref)
        throw Error(
            "ComboBoxFieldGroup must be used within a ComboBox",
        );
    return <FieldGroup {...props} ref={ref} />;
}

export const ComboBoxInput = genericForwardRef<
    HTMLInputElement,
    ComponentProps<typeof Input>
>((props, ref) => {
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
            placeholder={
                selectedItem?.value.name ??
                props.placeholder ??
                ""
            }
            ref={ref}
        />
    );
});

const ComboBoxRefContext =
    createContext<null | RefObject<HTMLDivElement>>(null);

function BaseComboBox<
    T extends
        OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>(
    {
        children,
        items,
        renderEmptyState,
        ...props
    }: AriaComboBoxProps<T> &
        Pick<
            ComponentProps<typeof ListBox>,
            "renderEmptyState"
        >,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const [groupRef, groupWidth] = usePopoverWidth();

    return (
        <ComboBoxRefContext.Provider value={groupRef}>
            <AriaComboBox<T>
                {...props}
                className={(renderProps) =>
                    twMerge(
                        "group relative w-full grow",
                        typeof props.className ===
                            "function"
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
                                renderEmptyState={
                                    renderEmptyState
                                }
                            >
                                {(props) => (
                                    <INTERNAL_OptionRenderer
                                        {...props}
                                        type="listbox"
                                    />
                                )}
                            </ListBox>
                        </Popover>
                    </>
                )}
            </AriaComboBox>
        </ComboBoxRefContext.Provider>
    );
}

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

export const ComboBox = genericForwardRef(BaseComboBox);
