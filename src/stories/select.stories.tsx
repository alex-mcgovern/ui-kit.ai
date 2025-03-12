import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import type { OptionsSchema } from "../types/options";

import { Select, SelectButton } from "../components/select";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";
import type { ComponentProps, ComponentType } from "react";
import { type StoryArgsList } from "../types/storybook";
import { Description } from "../components/description";

export function Example(
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
    title: "Components/Select",
    subcomponents: {
        SelectButton:
            SelectButton as ComponentType<unknown>,
    },
    render: Example,
    decorators: [
        (Story) => (
            <div className="mx-auto w-96">{Story()}</div>
        ),
    ],
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
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        isInvalid: true,
    },
};
export const IsDisabled: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        isDisabled: true,
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
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        disabledKeys: ["france", "germany", "spain"],
    },
};
