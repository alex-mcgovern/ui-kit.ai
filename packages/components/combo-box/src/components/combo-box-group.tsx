import type { ComponentProps } from "react";

import { FieldGroup } from "@boondoggle.design/field-group";
import { useContext } from "react";

import { ComboBoxRefContext } from "./combo-box-ref-context";

export function ComboBoxGroup(props: ComponentProps<typeof FieldGroup>) {
    const ref = useContext(ComboBoxRefContext);
    if (!ref) {
        throw Error("ComboBoxGroup must be a child of ComboBox");
    }

    return (
        <FieldGroup
            {...props}
            ref={ref}
        />
    );
}
