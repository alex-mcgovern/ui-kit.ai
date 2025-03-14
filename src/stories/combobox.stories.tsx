import type { Meta, StoryObj } from "@storybook/react";

import { SearchIcon } from "lucide-react";
import React, { type ComponentProps } from "react";

import type { OptionsSchema } from "../types/options";

import {
    ComboBox,
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combo-box";
import { Description } from "../components/description";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";

function Template(
    props: ComponentProps<
        typeof ComboBox<OptionsSchema<"listbox">>
    >,
) {
    return (
        <ComboBox {...props}>
            <Label>Label</Label>
            <ComboBoxFieldGroup>
                <ComboBoxInput
                    icon={<SearchIcon />}
                    isBorderless
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
}

const meta = {
    component: ComboBox,
    decorators: [
        (Story) => (
            <div className="mx-auto w-96">{Story()}</div>
        ),
    ],
    title: "Components/ComboBox",
} satisfies Meta<typeof ComboBox<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
    render: Template,
};
export const WithSections: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: Template,
};
export const IsInvalid: Story = {
    args: {
        isInvalid: true,
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: Template,
};
export const IsDisabled: Story = {
    args: {
        isDisabled: true,
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: Template,
};
export const IsBorderless: Story = {
    args: {
        isDisabled: true,
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: Template,
};
export const DisabledKeys: Story = {
    args: {
        disabledKeys: ["france", "germany", "spain"],
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
    render: Template,
};
