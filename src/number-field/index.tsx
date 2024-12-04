import { FieldButton } from "@boondoggle.design/field-button";
import { faMinus } from "@fortawesome/pro-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    NumberField as RACNumberField,
    type NumberFieldProps as RACNumberFieldProps,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { numberFieldCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * NumberFieldIncrementButton
 * ------------------------------------------------------------------------------- */

export const NumberFieldIncrementButton = () => {
    return (
        <FieldButton slot="increment">
            <Icon icon={faPlus} />
        </FieldButton>
    );
};

/** -----------------------------------------------------------------------------
 * NumberFieldDecrementButton
 * ------------------------------------------------------------------------------- */

export const NumberFieldDecrementButton = () => {
    return (
        <FieldButton slot="decrement">
            <Icon icon={faMinus} />
        </FieldButton>
    );
};

/** -----------------------------------------------------------------------------
 * NumberField
 * ------------------------------------------------------------------------------- */

export type NumberFieldProps = RACNumberFieldProps;

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
    (props, ref) => {
        return (
            <RACNumberField
                {...props}
                className={clsx(props.className, numberFieldCSS)}
                ref={ref}
            />
        );
    },
);

/** -----------------------------------------------------------------------------
 * FormNumberField
 * ------------------------------------------------------------------------------- */

/**
 * A form number field connects a `NumberField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
export function FormNumberField({ children, ...props }: NumberFieldProps) {
    if (!props.name) {
        throw new Error("FormNumberField requires a name prop");
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
        <NumberField
            {...props}
            {...field}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onChange={(k) => {
                onChange(k);
                props.onChange?.(k);
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
        </NumberField>
    );
}
