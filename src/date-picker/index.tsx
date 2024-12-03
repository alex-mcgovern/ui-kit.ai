import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { DatePickerProps as RACDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { forwardRef } from "react";
import { DatePicker as RACDatePicker } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { Calendar } from "../calendar";
import { css } from "../css/index.css";
import { Dialog } from "../../packages/components/dialog";
import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { Popover } from "../../packages/components/popover/src/components/popover";

/** -----------------------------------------------------------------------------
 * DatePickerButton
 * ------------------------------------------------------------------------------- */

export const DatePickerButton = () => {
    return (
        <FieldButton>
            <Icon icon={faCalendar} />
        </FieldButton>
    );
};

/** -----------------------------------------------------------------------------
 * DatePicker
 * ------------------------------------------------------------------------------- */

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */

export type DatePickerProps = RACDatePickerProps<CalendarDate | ZonedDateTime>;

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
    ({ children, ...props }, ref) => {
        return (
            <RACDatePicker
                {...props}
                ref={ref}
            >
                {(values) => {
                    return (
                        <>
                            {typeof children === "function"
                                ? children(values)
                                : children}
                            <Popover
                                className={css({ padding: "space_2" })}
                                placement="bottom end"
                            >
                                <Dialog>
                                    <Calendar />
                                </Dialog>
                            </Popover>
                        </>
                    );
                }}
            </RACDatePicker>
        );
    },
);

/** -----------------------------------------------------------------------------
 * FormDatePicker
 * ------------------------------------------------------------------------------- */

/**
 * A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker({
    children,
    defaultValue,
    ...props
}: DatePickerProps) {
    if (!props.name) {
        throw new Error("FormDatePicker requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value, ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: defaultValue,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <DatePicker
            {...props}
            {...field}
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
        </DatePicker>
    );
}
