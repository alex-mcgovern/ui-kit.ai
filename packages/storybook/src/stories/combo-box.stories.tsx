import type { Meta, StoryObj } from "@storybook/react";

import {
    ComboBox,
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
    Description,
    Label,
    type OptionsSchema,
} from "@ui-kit.ai/components";
import { getMockOptions } from "@ui-kit.ai/mocks";
import { SearchIcon } from "lucide-react";
import React, { type ComponentProps } from "react";

function Template(
    props: ComponentProps<typeof ComboBox<OptionsSchema<"listbox">>>,
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
            <Description>This is a short description</Description>
        </ComboBox>
    );
}

const meta: Meta<typeof ComboBox<OptionsSchema<"listbox">>> = {
    component: ComboBox,
    decorators: [(Story) => <div className="mx-auto w-96">{Story()}</div>],
    title: "Components/ComboBox",
};

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
