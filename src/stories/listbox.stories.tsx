import type { Meta, StoryObj } from "@storybook/react";

import type { OptionsSchema } from "../types/options";

import { ListBox } from "../components/listbox";
import { getMockOptions } from "../mocks/options";

const meta = {
    component: ListBox,
    title: "Components/ListBox",
} satisfies Meta<typeof ListBox<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
};
export const Sections: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const Invalid: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const IsDisabled: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const IsBorderless: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const DisabledKeys: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        disabledKeys: ["france", "germany", "spain"],
    },
};
