import type { ForwardedRef } from "react";
import type {
    ButtonProps as RACButtonProps,
    SelectProps as RACSelectProps,
} from "react-aria-components";

import { typography } from "@boondoggle/css-variants";
import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    Button as RACButton,
    Select as RACSelect,
    SelectValue as RACSelectValue,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../list-box";
import type { PopoverProps } from "../popover";

import { css } from "../css/index.css";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import { selectButtonCSS, selectCSS, selectValueCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * SelectButton
 * ------------------------------------------------------------------------------- */

export type SelectTriggerProps = RACButtonProps & {
    variant?: "borderless" | "default";
};

function _SelectButton<TItemId extends string = string>(
    { variant = "default", ...props }: SelectTriggerProps,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    return (
        <RACButton
            {...props}
            className={clsx(
                props.className,
                selectButtonCSS({ variant: variant }),
            )}
            ref={ref}
        >
            <RACSelectValue<IterableListBoxItem<TItemId>>
                className={({ isPlaceholder }) =>
                    selectValueCSS({ isPlaceholder })
                }
            />
            <Icon
                className={clsx(
                    typography.body_md,
                    css({
                        height: "space_6",
                        marginLeft: "auto",
                        marginRight: "space_1",
                        width: "space_6",
                    }),
                )}
                color="text_low_contrast"
                icon={faAnglesUpDown}
            />
        </RACButton>
    );
}

export const SelectButton = forwardRef(_SelectButton);

/** -----------------------------------------------------------------------------
 * Select
 * ------------------------------------------------------------------------------- */

export type SelectProps<TItemId extends string = string> = RACSelectProps<
    IterableListBoxItem<TItemId>
> & {
    items: Iterable<IterableListBoxItem<TItemId>>;
    placement?: PopoverProps["placement"];
};

function _Select<TItemId extends string = string>(
    { children, ...props }: SelectProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACSelect<IterableListBoxItem<TItemId>>
            {...props}
            className={clsx(props.className, selectCSS)}
            ref={ref}
        >
            {(values) => (
                <>
                    {typeof children === "function"
                        ? children(values)
                        : children}

                    <Popover placement={props.placement}>
                        <ListBox<TItemId> items={props.items} />
                    </Popover>
                </>
            )}
        </RACSelect>
    );
}

export const Select = forwardRef(_Select);

/** -----------------------------------------------------------------------------
 * FormSelect
 * ------------------------------------------------------------------------------- */

/**
 * A `FormSelect` connects a `Select` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Select.html)
 */
export function FormSelect<TItemId extends string = string>({
    children,
    ...props
}: SelectProps<TItemId>) {
    if (!props.name) {
        throw new Error("FormSelect requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey || props.defaultSelectedKey,
        name: props.name,
    });

    return (
        <Select<TItemId>
            {...props}
            {...field}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </Select>
    );
}
