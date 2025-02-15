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

export const flatList: Story = {
    args: { items: getMockOptions({ withIcon: true }) },
};
export const withSections: Story = {
    args: { items: getMockOptions({ withIcon: true, withSections: true }) },
};
export const isInvalid: Story = {
    args: { items: getMockOptions({ withIcon: true, withSections: true }) },
};
export const isDisabled: Story = {
    args: { items: getMockOptions({ withIcon: true, withSections: true }) },
};
export const isBorderless: Story = {
    args: { items: getMockOptions({ withIcon: true, withSections: true }) },
};
export const disabledKeys: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        disabledKeys: ["france", "germany", "spain"],
    },
};
