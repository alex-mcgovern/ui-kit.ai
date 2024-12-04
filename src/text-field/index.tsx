import {
    FieldButton,
    type FieldButtonProps,
} from "@boondoggle.design/field-button";
import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { forwardRef, useCallback, useMemo, useState } from "react";
import {
    ButtonContext as FieldButtonContext,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps,
    useSlottedContext,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { i18n } from "../_i18n";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { toast } from "../toaster";
import { Tooltip, TooltipTrigger } from "../tooltip";
import { textFieldCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * TextFieldClearButton
 * ------------------------------------------------------------------------------- */

export const TextFieldClearButton = () => {
    return (
        <TooltipTrigger>
            <FieldButton slot="clear">
                <Icon icon={faTimesCircle} />
            </FieldButton>
            <Tooltip placement="top">{i18n.clear}</Tooltip>
        </TooltipTrigger>
    );
};

/** -----------------------------------------------------------------------------
 * TextFieldCopyButton
 * ------------------------------------------------------------------------------- */

export const TextFieldCopyButton = (props: FieldButtonProps) => {
    return (
        <TooltipTrigger>
            <FieldButton
                {...props}
                slot="copy"
            >
                <Icon icon={faCopy} />
            </FieldButton>
            <Tooltip placement="top">{i18n.copy_to_clipboard}</Tooltip>
        </TooltipTrigger>
    );
};

/** -----------------------------------------------------------------------------
 * TEXT FIELD VISIBILITY BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldVisibilityButton = (props: FieldButtonProps) => {
    const context = useSlottedContext(FieldButtonContext, "visibility");

    return (
        <TooltipTrigger>
            <FieldButton
                {...props}
                slot="visibility"
            >
                <Icon icon={context?.value === "hidden" ? faEyeSlash : faEye} />
            </FieldButton>
            <Tooltip placement="top">
                {context?.value === "hidden" ? i18n.hide : i18n.show}
            </Tooltip>
        </TooltipTrigger>
    );
};

/** -----------------------------------------------------------------------------
 * TextField
 * ------------------------------------------------------------------------------- */

export type TextFieldProps = RACTextFieldProps;

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => {
        const [value, setValue] = useState<TextFieldProps["value"]>(
            props.value || props.defaultValue,
        );

        const [type, setType] = useState<TextFieldProps["type"]>(props.type);

        const clearValue = useCallback(() => {
            setValue("");
        }, [setValue]);

        const toggleVisibility = useCallback(() => {
            setType((c) => (c === "password" ? "text" : "password"));
        }, [setType]);

        const copyValue = useCallback(() => {
            if (!value) return;

            return navigator.clipboard
                .writeText(value)
                .then(() => toast.success(i18n.copied_to_clipboard));
        }, [value]);

        const buttonContext: Record<
            "slots",
            Record<string, FieldButtonProps>
        > = useMemo(() => {
            return {
                slots: {
                    clear: {
                        isDisabled: !value,
                        onPress: clearValue,
                    },
                    copy: {
                        isDisabled: !value,
                        onPress: copyValue,
                    },
                    tooltip_trigger: {},
                    visibility: {
                        onPress: toggleVisibility,
                        value: type === "password" ? "hidden" : "visible",
                    },
                },
            };
        }, [clearValue, copyValue, toggleVisibility, value, type]);

        return (
            <FieldButtonContext.Provider value={buttonContext}>
                <RACTextField
                    {...props}
                    className={(p) => clsx(props.className, textFieldCSS(p))}
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
    },
);

/** -----------------------------------------------------------------------------
 * FormTextField
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `TextField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
export function FormTextField({ children, ...props }: TextFieldProps) {
    if (!props.name) {
        throw new Error("FormTextField requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.defaultValue,
        name: props.name,
    });

    return (
        <TextField
            {...props}
            {...field}
            defaultValue={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onChange={(v) => {
                onChange(v);
                props.onChange?.(v);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </TextField>
    );
}
