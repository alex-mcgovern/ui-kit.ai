import type { TCountryCode } from "countries-list";

import { countries } from "countries-list";
import { forwardRef } from "react";
import { useController, useFormContext } from "react-hook-form";

import type { ComboBoxProps } from "../../packages/components/combo-box/src/components/combo-box";
import type { IterableListBoxItem } from "../../packages/components/list-box/src/components/list-box";

import { ComboBox } from "../../packages/components/combo-box/src/components/combo-box";
import { FieldError } from "../field-error";
import { FLAGS } from "../icon-flag/_map";

/** -----------------------------------------------------------------------------
 * @util get a flag icon component
 * ------------------------------------------------------------------------------- */

const getFlagComponent = (iso_code: TCountryCode) => {
    if (iso_code in FLAGS === false) {
        return undefined;
    }
    const FlagComponent =
        iso_code in FLAGS ? FLAGS[iso_code as TCountryCode] : null;

    if (!FlagComponent) {
        return undefined;
    }

    return (
        <FlagComponent
            border="border_rule"
            height="space_4"
            width="space_4"
        />
    );
};

/** -----------------------------------------------------------------------------
 * @util get a country menu item
 * ------------------------------------------------------------------------------- */

const getCountryItem = ({
    iso,
    name,
}: {
    iso: TCountryCode;
    name: string;
}): IterableListBoxItem<TCountryCode> => {
    return {
        id: iso,
        name,
        slotLeft: getFlagComponent(iso),
    };
};

/** -----------------------------------------------------------------------------
 * @constant list of country items
 * ------------------------------------------------------------------------------- */

const COUNTRIES: Array<IterableListBoxItem<TCountryCode>> = Object.entries(
    countries,
).map(([iso, { name }]) => getCountryItem({ iso: iso as TCountryCode, name }));

/** -----------------------------------------------------------------------------
 * ComboBoxCountry
 * ------------------------------------------------------------------------------- */

export type ComboBoxCountryProps = Omit<
    ComboBoxProps<TCountryCode>,
    "defaultItems" | "items"
>;

export const ComboBoxCountry = forwardRef<
    HTMLInputElement,
    ComboBoxCountryProps
>((props, ref) => {
    return (
        <ComboBox<TCountryCode>
            ref={ref}
            {...props}
            defaultItems={COUNTRIES}
        />
    );
});

/** -----------------------------------------------------------------------------
 * FormComboBox
 * ------------------------------------------------------------------------------- */

/**
 * A `FormComboBoxCountry` connects a `ComboBoxCountry` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBoxCountry({
    children,
    ...props
}: ComboBoxCountryProps) {
    if (!props.name) {
        throw new Error("FormComboBox requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey,
        name: props.name,
    });

    return (
        <ComboBoxCountry
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
        </ComboBoxCountry>
    );
}
