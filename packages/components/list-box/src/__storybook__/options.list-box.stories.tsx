import type { Meta, StoryObj } from "@storybook/react";

import { getListMockCountries } from "@boondoggle.design/mocks";

import { Options } from "../components/options";

const meta = {
    component: Options,
    title: "New/Options/ListBox",
} satisfies Meta<typeof Options>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: getListMockCountries(),
        type: "listbox",
    },
};

export const SlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSlotLeft: true }),
        type: "listbox",
    },
};

export const SlotRight: Story = {
    args: {
        items: getListMockCountries({ withSlotRight: true }),
        type: "listbox",
    },
};

export const SelectionSingle: Story = {
    args: {
        items: getListMockCountries(),
        selectionMode: "single",
        type: "listbox",
    },
};

export const SelectionMultiple: Story = {
    args: {
        items: getListMockCountries(),
        selectionMode: "multiple",
        type: "listbox",
    },
};

export const Sections: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        type: "listbox",
    },
};

export const SectionsSelectionSingle: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        selectionMode: "single",
        type: "listbox",
    },
};

export const SectionsSelectionMultiple: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        selectionMode: "multiple",
        type: "listbox",
    },
};

export const SectionsSelectionMultipleSlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSections: true, withSlotLeft: true }),
        selectionMode: "multiple",
        type: "listbox",
    },
};
