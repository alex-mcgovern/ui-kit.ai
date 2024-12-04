import type { Meta, StoryObj } from "@storybook/react";

import { getListMockCountries } from "@boondoggle.design/mocks";

import { ListBox } from "./components/list-box";

const meta = {
    component: ListBox,
    title: "New/ListBox",
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: getListMockCountries(),
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

export const SelectionSingle: Story = {
    args: {
        items: getListMockCountries(),
        selectionMode: "single",
    },
};

export const SelectionMultiple: Story = {
    args: {
        items: getListMockCountries(),
        selectionMode: "multiple",
    },
};

export const Sections: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
    },
};

export const SectionsSelectionSingle: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        selectionMode: "single",
    },
};

export const SectionsSelectionMultiple: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        selectionMode: "multiple",
    },
};

export const SectionsSelectionMultipleSlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSections: true, withSlotLeft: true }),
        selectionMode: "multiple",
    },
};
