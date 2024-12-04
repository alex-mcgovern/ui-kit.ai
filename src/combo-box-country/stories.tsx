import type { Meta, StoryObj } from "@storybook/react";

import { ComboBoxCountry } from ".";
import { ComboBoxButton } from "../../packages/components/combo-box/src/components/combo-box";
import { FieldGroup } from "../../packages/components/field-group/src/components/field-group";
import { Input } from "../../packages/components/input/src/components/input";
import { Label } from "../label";

const meta = {
    component: ComboBoxCountry,
    render: (args) => {
        return (
            <ComboBoxCountry {...args}>
                <Label>Country/Region</Label>
                <FieldGroup>
                    <Input variant="unstyled" />
                    <ComboBoxButton />
                </FieldGroup>
            </ComboBoxCountry>
        );
    },
    title: "ComboBoxCountry",
} satisfies Meta<typeof ComboBoxCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
