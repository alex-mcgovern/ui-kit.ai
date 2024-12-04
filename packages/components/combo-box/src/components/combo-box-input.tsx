import type { ListSchema } from "@boondoggle.design/types";
import type { ComboBoxState } from "@react-stately/combobox";
import type { ComponentProps, Context } from "react";

import { Input } from "@boondoggle.design/input";
import { forwardRef, useContext } from "react";
import { ComboBoxStateContext } from "react-aria-components";

export const ComboBoxInput = forwardRef<
    HTMLInputElement,
    ComponentProps<typeof Input>
>((props, ref) => {
    // NOTE: `ComboBoxStateContext` is not generic, but thanks to how we have wired
    // up the parent component, we can safely cast it to `ComboBoxState<ListSchema>`.
    const state = useContext(
        ComboBoxStateContext as Context<ComboBoxState<ListSchema> | null>,
    );
    const { selectedItem, toggle } = state || {};
    const { textValue, value } = selectedItem || {};
    const { slotLeft, slotRight } = value || {};

    return (
        <Input
            {...props}
            defaultValue={textValue || props.defaultValue}
            onClick={(e) => {
                toggle?.(null, "focus");
                props.onClick?.(e);
            }}
            placeholder={textValue || props.placeholder || ""}
            ref={ref}
            slotLeft={slotLeft ?? slotRight ?? props.slotLeft}
        />
    );
});
