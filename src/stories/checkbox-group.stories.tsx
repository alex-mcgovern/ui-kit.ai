import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "../components/checkbox";
import React from "react";
import { Label } from "../components/label";
import { Description } from "../components/description";

const meta = {
    title: "Components/CheckboxGroup",
    component: CheckboxGroup,
    args: {
        children: (
            <>
                <Label>This is the label</Label>
                <Checkbox value="option_1" label="Option 1" />
                <Checkbox value="option_2" label="Option 2" />
                <Checkbox value="option_3" label="Option 3" />
                <Description>This is the description</Description>
            </>
        ),
    },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const example: Story = {
    args: {},
};
export const isInvalid: Story = {
    args: {
        isInvalid: true,
    },
};
export const isDisabled: Story = {
    args: {
        isDisabled: true,
    },
};
