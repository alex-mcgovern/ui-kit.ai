import {
    Checkbox,
    CheckboxGroup,
    ComboBox,
    Icon,
    ComboBoxFieldGroup,
    ComboBoxInput,
    ComboBoxClearButton,
    ComboBoxButton,
} from "@ui-kit.ai/components";
import React from "react";
import { Description } from "./packages/components/src/components/description";
import { Label } from "./packages/components/src/components/label";

const foo = "foo bar";

export function YourComponent() {
    return (
        <ComboBox
            items={[
                {
                    icon: <Icon />,
                    id: "apple",
                    textValue: "Apple",
                },
                {
                    icon: <Icon />,
                    id: "banana",
                    textValue: "Banana",
                },
                {
                    icon: <Icon />,
                    id: "carrot",
                    textValue: "Carrot",
                },
                {
                    icon: <Icon />,
                    id: "spinach",
                    textValue: "Spinach",
                },
            ]}
        >
            <Label>Label</Label>
            <ComboBoxFieldGroup>
                <ComboBoxInput
                    icon={<Icon />}
                    isBorderless
                    placeholder="Type to search..."
                />
                <ComboBoxClearButton />
                <ComboBoxButton />
            </ComboBoxFieldGroup>
            <Description>This is a short description</Description>
        </ComboBox>
    );
}
