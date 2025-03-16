import type { ComponentProps } from "react";

import { useController, useFormContext } from "react-hook-form";

import type { OptionsSchema } from "../types/options";

import { ComboBox } from "./combo-box";
import { FieldError } from "./field-error";

/**
 * A `FormComboBox` connects a `ComboBox` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox)
 */
export function FormComboBox<
    T extends OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>({ children, ...props }: ComponentProps<typeof ComboBox<T>>) {
    if (props.name == null)
        throw new Error("FormComboBox requires a name prop");

    const { control } = useFormContext();

    const {
        field: { disabled, name, onBlur, onChange, ref, value = "" },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey ?? props.defaultSelectedKey,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <ComboBox
            {...props}
            isDisabled={disabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value ?? ""}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {(rp) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(rp)
                            : children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </ComboBox>
    );
}
FormComboBox.displayName = "FormComboBox";
