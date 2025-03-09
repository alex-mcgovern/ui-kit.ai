import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";
import React, { type ComponentProps } from "react";
import { Label } from "../components/label";
import { Description } from "../components/description";
import { CheckboxGroup } from "../components/checkbox-group";

const Template = (
    args: ComponentProps<typeof CheckboxGroup>,
) => (
    <CheckboxGroup
        defaultValue={["account-updates"]}
        {...args}
    >
        <Label>Communication preferences</Label>
        <Checkbox
            value="account-updates"
            isDisabled
            isRequired
            label="Account updates"
            description="Necessary emails about your account & account security."
        />
        <Checkbox
            value="newsletter"
            label="Newsletter"
            description="No more than one email per month with updates from our team."
        />
        <Checkbox
            value="promotions"
            label="Promotions and Offers"
            description="Deals, discounts and suggestions we think you'll love."
        />
        <Description>
            Your preferences can be updated at any time in
            your account settings.
        </Description>
    </CheckboxGroup>
);

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
