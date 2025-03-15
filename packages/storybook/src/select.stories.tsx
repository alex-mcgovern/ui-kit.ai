import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps, ComponentType } from "react";

import React from "react";

import {
    Description,
    type OptionsSchema,
    Select,
    SelectButton,
    Label,
} from "@ui-kit.ai/components";
import { getMockOptions } from "@ui-kit.ai/mocks";

function Template(
    props: ComponentProps<typeof Select<OptionsSchema<"listbox">>>,
) {
    return (
        <Select {...props}>
            <Label>Label</Label>
            <SelectButton />
            <Description>This is a short description</Description>
        </Select>
    );
}

const meta: Meta<typeof Select<OptionsSchema<"listbox">>> = {
    args: {
        items: getMockOptions({ withIcon: true }),
    },
    component: Select,
    decorators: [(Story) => <div className="mx-auto w-96">{Story()}</div>],
    render: Template,
    subcomponents: {
        SelectButton: SelectButton as ComponentType<unknown>,
    },
    title: "Components/Select",
};

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
            <Description>This is a short description</Description>
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
