import type { Meta, StoryObj } from "@storybook/react";

import { CircleDot } from "lucide-react";

import { Tag, type TagProps } from "../components/tag";

const meta = {
    component: Tag,
    title: "Components/Tag",
    args: {
        children: "Tag",
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
export const SlotLeft: Story = {
    name: "Left",
    tags: ["group-slot"],
    args: {
        slotLeft: <CircleDot />,
    },
};
export const SlotRight: Story = {
    name: "Right",
    tags: ["group-slot"],
    args: {
        slotRight: <CircleDot />,
    },
};
export const VariantGreen: Story = {
    tags: ["group-variant"],
    name: "Green",
    args: {
        variant: "green",
    },
};
export const VariantYellow: Story = {
    tags: ["group-variant"],
    name: "Yellow",
    args: {
        variant: "yellow",
    },
};
export const VariantRed: Story = {
    tags: ["group-variant"],
    name: "Red",
    args: {
        variant: "red",
    },
};
export const VariantInverted: Story = {
    tags: ["group-variant"],
    name: "Inverted",
    args: {
        variant: "inverted",
    },
};
