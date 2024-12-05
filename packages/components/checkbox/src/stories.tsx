import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./components/checkbox";

const meta = {
    component: Checkbox,
    title: "Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Check yourself before you wreck yourself",
    },
};

export const Borderless: Story = {
    args: {
        children: "Check yourself before you wreck yourself",
        variant: "borderless",
    },
};

export const BorderlessUntilHovered: Story = {
    args: {
        children: "Check yourself before you wreck yourself",
        variant: "borderlessUntilHovered",
    },
};

export const Invalid: Story = {
    args: {
        children: "Check yourself before you wreck yourself",
        isInvalid: true,
    },
};
