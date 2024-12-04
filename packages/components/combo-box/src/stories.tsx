import type { Meta, StoryObj } from "@storybook/react";

import { getListMockCountries } from "@boondoggle.design/mocks";

import { ComboBox } from ".";
import { FlagDe } from "../../../../src/icon-flag/de";

const meta = {
    component: ComboBox,
    decorators: [
        (Story) => {
            return (
                <div style={{ width: 300 }}>
                    <Story />
                </div>
            );
        },
    ],
    title: "New/ComboBox",
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: getListMockCountries(),
    },
};

export const Sections: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
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
    },
};

export const SlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSlotLeft: true }),
    },
};

export const SlotRight: Story = {
    args: {
        items: getListMockCountries({ withSlotRight: true }),
    },
};

export const KitchenSink: Story = {
    args: {
        items: getListMockCountries({
            withSections: true,
            withSlotLeft: true,
        }),
    },
};
