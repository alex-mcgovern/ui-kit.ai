import type { ComponentProps } from "react";
import {
    useController,
    useFormContext,
} from "react-hook-form";
import { FieldError } from "./field-error";
import { CheckboxGroup } from "./checkbox-group";

/**
 * A `FormCheckboxGroup` connects a `CheckboxGroup` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)
 */
export function FormCheckboxGroup({
    children,
    ...props
}: ComponentProps<typeof CheckboxGroup>) {
    if (props.name == null)
        throw new Error(
            "FormCheckboxGroup requires a name prop",
        );

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
            props.value ?? props.defaultValue ?? [],
        name: props.name,
    });

    return (
        <CheckboxGroup
            {...props}
            isDisabled={isDisabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onChange={(k) => {
                onChange(k);
                props.onChange?.(k);
            }}
            ref={ref}
            value={value}
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
        </CheckboxGroup>
    );
}
