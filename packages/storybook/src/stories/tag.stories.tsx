import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "@ui-kit.ai/components";
import { CircleDot } from "lucide-react";

const meta = {
    args: {
        children: "Tag",
    },
    component: Tag,
    title: "Components/Tag",
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
export const SlotLeft: Story = {
    args: {
        slotLeft: <CircleDot />,
    },
    name: "Left",
    tags: ["group-slot"],
};
export const SlotRight: Story = {
    args: {
        slotRight: <CircleDot />,
    },
    name: "Right",
    tags: ["group-slot"],
};
export const VariantGreen: Story = {
    args: {
        variant: "green",
    },
    name: "Green",
    tags: ["group-variant"],
};
export const VariantYellow: Story = {
    args: {
        variant: "yellow",
    },
    name: "Yellow",
    tags: ["group-variant"],
};
export const VariantRed: Story = {
    args: {
        variant: "red",
    },
    name: "Red",
    tags: ["group-variant"],
};
export const VariantInverted: Story = {
    args: {
        variant: "inverted",
    },
    name: "Inverted",
    tags: ["group-variant"],
};
