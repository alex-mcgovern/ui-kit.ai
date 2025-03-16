import type {
    ComponentProps,
    ComponentPropsWithoutRef,
    ForwardedRef,
} from "react";
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import { ClipboardIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
    TextField as AriaTextField,
    ButtonContext as FieldButtonContext,
    useSlottedContext,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { FieldButton } from "./field-button";
import { Tooltip, TooltipTrigger } from "./tooltip";

/**
 * A `FieldButton` to clear the text field.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Button
 */
export function TextFieldClearButton(
    props: ComponentProps<typeof FieldButton>,
) {
    return (
        <TooltipTrigger delay={0}>
            <FieldButton {...props} slot="clear">
                <XIcon />
            </FieldButton>

            <Tooltip placement="top">Clear</Tooltip>
        </TooltipTrigger>
    );
}

/**
 * A `FieldButton` to copy the text field value to the clipboard.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Button
 */
export function TextFieldCopyButton(props: ComponentProps<typeof FieldButton>) {
    return (
        <TooltipTrigger delay={0}>
            <FieldButton {...props} slot="copy">
                <ClipboardIcon />
            </FieldButton>

            <Tooltip placement="top">Copy to clipboard</Tooltip>
        </TooltipTrigger>
    );
}

/**
 * A `FieldButton` to toggle the visibility of the text field value.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Button
 */
export function TextFieldVisibilityButton(
    props: ComponentProps<typeof FieldButton>,
) {
    const context = useSlottedContext(FieldButtonContext, "visibility");

    return (
        <TooltipTrigger delay={0}>
            <FieldButton {...props} slot="visibility">
                {context?.value === "hidden" ? <EyeOffIcon /> : <EyeIcon />}
            </FieldButton>

            <Tooltip placement="top">
                {context?.value === "hidden" ? "Show" : "Hide"}
            </Tooltip>
        </TooltipTrigger>
    );
}

export function TextField({
    ref,
    ...props
}: AriaTextFieldProps & {
    ref?: ForwardedRef<HTMLInputElement>;
}) {
    const [value, setValue] = useState<AriaTextFieldProps["value"]>(
        props.value ?? props.defaultValue ?? "",
    );

    const [type, setType] = useState<AriaTextFieldProps["type"]>(props.type);

    const clearValue = useCallback(() => {
        setValue("");
    }, []);

    const toggleVisibility = useCallback(() => {
        setType((c) => (c === "password" ? "text" : "password"));
    }, []);

    const copyValue = useCallback(() => {
        if (value == null) return;

        return navigator.clipboard.writeText(value);
        // .then(() => toast.success(i18n.copied_to_clipboard)) // ToDo: Add toast
    }, [value]);

    useEffect(() => {
        setValue(props.value ?? props.defaultValue ?? "");
    }, [props.value, props.defaultValue]);

    const buttonContext: Record<
        "slots",
        Record<string, ComponentPropsWithoutRef<typeof FieldButton>>
    > = useMemo(() => {
        return {
            slots: {
                clear: {
                    isDisabled:
                        value == null ||
                        props.isDisabled === true ||
                        props.isReadOnly,
                    onPress: clearValue,
                },
                copy: {
                    isDisabled: value == null,
                    onPress: copyValue,
                },
                visibility: {
                    onPress: toggleVisibility,
                    value: type === "password" ? "hidden" : "visible",
                },
            },
        };
    }, [
        value,
        props.isDisabled,
        props.isReadOnly,
        clearValue,
        copyValue,
        toggleVisibility,
        type,
    ]);

    return (
        <FieldButtonContext.Provider value={buttonContext}>
            <AriaTextField
                {...props}
                className={(rp) =>
                    twMerge(
                        "group relative w-full grow",
                        typeof props.className === "function"
                            ? props.className(rp)
                            : props.className,
                    )
                }
                onChange={(v) => {
                    setValue(v);
                    props.onChange?.(v);
                }}
                ref={ref}
                type={type}
                value={value}
            />
        </FieldButtonContext.Provider>
    );
}
