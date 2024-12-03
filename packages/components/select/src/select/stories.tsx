import type { Meta, StoryObj } from "@storybook/react";

import { FieldVariant } from "@boondoggle.design/css-types";

import { Select } from ".";
import { LIST_SCHEMA_MOCK } from "../../../../mocks/src/list";
import { SelectButton } from "./components/select-button";

const meta = {
    args: {
        children: <SelectButton />,
        items: LIST_SCHEMA_MOCK,
        placeholder: "Select a country",
    },
    component: Select,
    title: "Select",
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Borderless: Story = {
    render: (args) => {
        return (
            <Select {...args}>
                <SelectButton variant={FieldVariant.BORDERLESS} />
            </Select>
        );
    },
};
