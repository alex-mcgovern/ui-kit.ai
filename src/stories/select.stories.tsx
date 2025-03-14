import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps, ComponentType } from "react";

import React from "react";

import type { OptionsSchema } from "../types/options";

import { Description } from "../components/description";
import { Label } from "../components/label";
import { Select, SelectButton } from "../components/select";
import { getMockOptions } from "../mocks/options";

function Template(
    props: ComponentProps<
        typeof Select<OptionsSchema<"listbox">>
    >,
) {
    return (
        <Select {...props}>
            <Label>Label</Label>
            <SelectButton />
            <Description>
                This is a short description
            </Description>
        </Select>
    );
}

const meta = {
    args: {
        items: getMockOptions({ withIcon: true }),
    },
    component: Select,
    decorators: [
        (Story) => (
            <div className="mx-auto w-96">{Story()}</div>
        ),
    ],
    render: Template,
    subcomponents: {
        SelectButton:
            SelectButton as ComponentType<unknown>,
    },
    title: "Components/Select",
} satisfies Meta<typeof Select<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: getMockOptions({ withIcon: true }),
    },
};
export const IsInvalid: Story = {
    args: {
        isInvalid: true,
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const IsDisabled: Story = {
    args: {
        isDisabled: true,
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const IsBorderless: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: (props) => (
        <Select {...props}>
            <Label>Label</Label>
            <SelectButton />
            <Description>
                This is a short description
            </Description>
        </Select>
    ),
};
export const DisabledKeys: Story = {
    args: {
        disabledKeys: ["france", "germany", "spain"],
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
