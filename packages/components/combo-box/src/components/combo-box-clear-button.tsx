import type { ListSchema } from "@boondoggle.design/types";
import type { ComboBoxState } from "@react-stately/combobox";
import type { Context } from "react";

import { FieldButton } from "@boondoggle.design/field-button";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import { useContext } from "react";
import { ComboBoxStateContext } from "react-aria-components";

import { Icon } from "../../../../../src/icon";

export function ComboBoxClearButton() {
    // NOTE: `ComboBoxStateContext` is not generic, but thanks to how we have wired
    // up the parent component, we can safely cast it to `ComboBoxState<ListSchema>`.
    const state = useContext(
        ComboBoxStateContext as Context<ComboBoxState<ListSchema> | null>,
    );

    if (!state?.inputValue) {
        return null;
    }

    return (
        <FieldButton
            aria-label="Clear"
            onPress={() => {
                state.setInputValue("");
                state.setSelectedKey(null);
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
