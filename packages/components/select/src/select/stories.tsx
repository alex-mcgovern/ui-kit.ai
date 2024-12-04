import type { Meta, StoryObj } from "@storybook/react";

import { FieldVariant } from "@boondoggle.design/css-types";
import { getListMockCountries } from "@boondoggle.design/mocks";

import { FlagDe } from "../../../../../src/icon-flag/de";
import { Select } from "./components/select";
import { SelectButton } from "./components/select-button";

const meta = {
    component: Select,
    decorators: [
        (Story) => {
            return (
                <div style={{ width: 300 }}>
                    <Story />
                </div>
            );
        },
    ],
    title: "New/Select",
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: getListMockCountries(),
        placeholder: "Select a country",
    },
};

export const Sections: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        placeholder: "Select a country",
    },
};

export const PartialIcons: Story = {
    args: {
        items: [
            {
                id: "france",
                textValue: "France",
            },
            {
                id: "germany",
                slotLeft: (
                    <FlagDe
                        height="space_4"
                        width="space_4"
                    />
                ),
                textValue: "Germany",
            },
            {
                id: "spain",
                textValue: "Spain",
            },
        ],
        placeholder: "Select a country",
    },
};

export const SlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSlotLeft: true }),
        placeholder: "Select a country",
    },
};

export const SlotRight: Story = {
    args: {
        items: getListMockCountries({ withSlotRight: true }),
        placeholder: "Select a country",
    },
};

export const KitchenSink: Story = {
    args: {
        items: getListMockCountries({
            withSections: true,
            withSlotLeft: true,
        }),
        placeholder: "Select a country",
    },
};

export const Borderless: Story = {
    args: {
        children: <SelectButton />,
        items: getListMockCountries(),
        placeholder: "Select a country",
    },
    render: (args) => {
        return (
            <Select {...args}>
                <SelectButton variant={FieldVariant.BORDERLESS} />
            </Select>
        );
    },
};
