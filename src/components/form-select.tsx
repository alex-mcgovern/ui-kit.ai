import type { ComponentProps } from "react";

import {
    useController,
    useFormContext,
} from "react-hook-form";

import type { OptionsSchema } from "../types/options";

import { FieldError } from "./field-error";
import { Select } from "./select";

/**
 * A `FormSelect` connects a `Select` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Select.html)
 */
export function FormSelect<
    T extends
        OptionsSchema<"listbox"> = OptionsSchema<"listbox">,
>({
    children,
    ...props
}: ComponentProps<typeof Select<T>>) {
    if (props.name == null)
        throw new Error("FormSelect requires a name prop");

    const { control } = useFormContext();

    const {
        field: {
            disabled: isDisabled,
            name,
            onBlur,
            onChange,
            ref,
            value = "",
        },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue:
            props.selectedKey ?? props.defaultSelectedKey,
        name: props.name,
    });

    return (
        <Select
            {...props}
            defaultSelectedKey={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {(renderProps) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                        <FieldError>
                            {error?.message}
                        </FieldError>
                    </>
                );
            }}
        </Select>
    );
}
