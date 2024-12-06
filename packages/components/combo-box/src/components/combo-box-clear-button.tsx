import type { FieldButtonProps } from "@boondoggle.design/field-button";
import type { ListSchema } from "@boondoggle.design/types";
import type { ComboBoxState } from "@react-stately/combobox";
import type { Context } from "react";

import { FieldButton } from "@boondoggle.design/field-button";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { useContext } from "react";
import { ComboBoxStateContext } from "react-aria-components";

import { Icon } from "../../../../../src/icon";
import { comboBoxClearButtonStyle } from "../styles/combo-box-clear-button.css";

export function ComboBoxClearButton({
    "aria-label": arialLabel = "Clear",
    ...props
}: Omit<FieldButtonProps, "slot">) {
    // NOTE: `ComboBoxStateContext` is not generic, but thanks to how we have wired
    // up the parent component, we can safely cast it to `ComboBoxState<ListSchema>`.
    const { inputValue, setInputValue, setSelectedKey } =
        useContext(
            ComboBoxStateContext as Context<ComboBoxState<ListSchema> | null>,
        ) || {};

    const isEmpty: boolean = !inputValue;

    return (
        <FieldButton
            {...props}
            aria-label={arialLabel}
            className={clsx(comboBoxClearButtonStyle, props.className)}
            data-empty={isEmpty}
            onPress={(e) => {
                props.onPress?.(e);
                setInputValue?.("");
                setSelectedKey?.(null);
            }}
            // Don't inherit default Button behavior from ComboBox.
            slot={null}
        >
            <Icon
                aria-hidden
                icon={faTimesCircle}
            />
        </FieldButton>
    );
}
