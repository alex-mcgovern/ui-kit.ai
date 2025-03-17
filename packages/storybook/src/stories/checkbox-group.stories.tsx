import type { Meta, StoryObj } from "@storybook/react";

import {
    Checkbox,
    CheckboxGroup,
    Description,
    Label,
} from "@ui-kit.ai/components";
import React, { type ComponentProps } from "react";

function Template(args: ComponentProps<typeof CheckboxGroup>) {
    return (
        <CheckboxGroup defaultValue={["account-updates"]} {...args}>
            <Label>This is a label for the field</Label>
            <Checkbox
                description="Optional description"
                label="Item A"
                value="item-a"
            />
            <Checkbox
                description="Optional description"
                label="Item B"
                value="item-b"
            />
            <Checkbox
                description="Optional description"
                label="Item B"
                value="item-c"
            />
            <Description>
                This is a description for the field group.
            </Description>
        </CheckboxGroup>
    );
}

const meta = {
    component: CheckboxGroup,
    render: Template,
    title: "Components/CheckboxGroup",
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
