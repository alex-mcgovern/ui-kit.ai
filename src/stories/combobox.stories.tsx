import type { Meta, StoryObj } from "@storybook/react";

import React, { type ComponentProps } from "react";

import type { OptionsSchema } from "../types/options";

import {
    ComboBox,
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combo-box";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";
import { Description } from "../components/description";
import { SearchIcon } from "lucide-react";

export const Example = (
    props: ComponentProps<
        typeof ComboBox<OptionsSchema<"listbox">>
    >,
) => (
    <ComboBox {...props}>
        <Label>Label</Label>
        <ComboBoxFieldGroup>
            <ComboBoxInput
                isBorderless
                icon={<SearchIcon />}
                placeholder="Type to search..."
            />
            <ComboBoxClearButton />
            <ComboBoxButton />
        </ComboBoxFieldGroup>
        <Description>
            This is a short description
        </Description>
    </ComboBox>
);

const meta = {
    component: ComboBox,
    title: "Components/ComboBox",
    decorators: [
        (Story) => (
            <div className="mx-auto w-96">{Story()}</div>
        ),
    ],
} satisfies Meta<typeof ComboBox<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
    render: Example,
};
export const WithSections: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: Example,
};
export const IsInvalid: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        isInvalid: true,
    },
    render: Example,
};
export const IsDisabled: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        isDisabled: true,
    },
    render: Example,
};
export const IsBorderless: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        isDisabled: true,
    },
    render: Example,
};
export const DisabledKeys: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        disabledKeys: ["france", "germany", "spain"],
    },
    render: Example,
};
