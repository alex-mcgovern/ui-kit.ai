import type { Meta, StoryObj } from "@storybook/react";

import React, { type ComponentProps } from "react";

import type { OptionsSchema } from "../types/options";

import {
    ComboBox,
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combobox";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";
import { TextField } from "../components/text-field";
import { Description } from "../components/description";

const meta = {
    component: ComboBox,
    title: "Components/ComboBox",
    decorators: [(Story) => <div className="mx-auto w-96">{Story()}</div>],
} satisfies Meta<typeof ComboBox<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (
    props: ComponentProps<typeof ComboBox<OptionsSchema<"listbox">>>,
) => (
    <ComboBox {...props}>
        <Label>Label</Label>
        <ComboBoxFieldGroup>
            <ComboBoxInput isBorderless />
            <ComboBoxClearButton />
            <ComboBoxButton />
        </ComboBoxFieldGroup>
        <Description>This is a short description</Description>
    </ComboBox>
);

export const example: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
    render: Template,
};
export const flatList: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
    render: Template,
};
export const withSections: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
    },
    render: Template,
};
export const isInvalid: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        isInvalid: true,
    },
    render: Template,
};
export const isDisabled: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        isDisabled: true,
    },
    render: Template,
};
export const isBorderless: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        isDisabled: true,
    },
    render: Template,
};
export const disabledKeys: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        disabledKeys: ["france", "germany", "spain"],
    },
    render: Template,
};
