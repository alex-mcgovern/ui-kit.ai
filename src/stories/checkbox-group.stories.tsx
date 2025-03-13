import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";
import React, { type ComponentProps } from "react";
import { Label } from "../components/label";
import { Description } from "../components/description";
import { CheckboxGroup } from "../components/checkbox-group";

function Template(
    args: ComponentProps<typeof CheckboxGroup>,
) {
    return (
        <CheckboxGroup
            defaultValue={["account-updates"]}
            {...args}
        >
            <Label>This is a label for the field</Label>
            <Checkbox
                value="item-a"
                label="Item A"
                description="Optional description"
            />
            <Checkbox
                value="item-b"
                label="Item B"
                description="Optional description"
            />
            <Checkbox
                value="item-c"
                label="Item B"
                description="Optional description"
            />
            <Description>
                This is a description for the field group.
            </Description>
        </CheckboxGroup>
    );
}

const meta = {
    title: "Components/CheckboxGroup",
    component: CheckboxGroup,
    render: Template,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const IsInvalid: Story = {
    args: {
        isInvalid: true,
    },
};
export const IsDisabled: Story = {
    args: {
        isDisabled: true,
    },
};
