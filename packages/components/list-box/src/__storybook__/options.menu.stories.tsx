import type { Meta, StoryObj } from "@storybook/react";

import { getListMockCountries } from "@boondoggle.design/mocks";

import { Options } from "../components/options";

const meta = {
    component: Options,
    title: "New/Options/Menu",
} satisfies Meta<typeof Options>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: getListMockCountries(),
        type: "menu",
    },
};

export const SlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSlotLeft: true }),
        type: "menu",
    },
};

export const SlotRight: Story = {
    args: {
        items: getListMockCountries({ withSlotRight: true }),
        type: "menu",
    },
};

export const SelectionSingle: Story = {
    args: {
        items: getListMockCountries(),
        selectionMode: "single",
        type: "menu",
    },
};

export const SelectionMultiple: Story = {
    args: {
        items: getListMockCountries(),
        selectionMode: "multiple",
        type: "menu",
    },
};

export const Sections: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        type: "menu",
    },
};

export const SectionsSelectionSingle: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        selectionMode: "single",
        type: "menu",
    },
};

export const SectionsSelectionMultiple: Story = {
    args: {
        items: getListMockCountries({ withSections: true }),
        selectionMode: "multiple",
        type: "menu",
    },
};

export const SectionsSelectionMultipleSlotLeft: Story = {
    args: {
        items: getListMockCountries({ withSections: true, withSlotLeft: true }),
        selectionMode: "multiple",
        type: "menu",
    },
};
