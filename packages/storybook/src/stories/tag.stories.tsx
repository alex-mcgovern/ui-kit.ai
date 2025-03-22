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

export const Default: Story = {
    args: {},
    parameters: {
        displayName: "Default",
    },
};
export const SlotLeft: Story = {
    args: {
        slotLeft: <CircleDot />,
    },
    parameters: {
        displayName: "Left",
    },
    storyName: "Left",
    tags: ["group-slot"],
};
export const SlotRight: Story = {
    args: {
        slotRight: <CircleDot />,
    },
    parameters: {
        displayName: "Right",
    },
    storyName: "Right",
    tags: ["group-slot"],
};
export const VariantGreen: Story = {
    args: {
        variant: "green",
    },
    parameters: {
        displayName: "Green",
    },
    tags: ["group-variant"],
};
export const VariantYellow: Story = {
    args: {
        variant: "yellow",
    },
    parameters: {
        displayName: "Yellow",
    },
    tags: ["group-variant"],
};
export const VariantRed: Story = {
    args: {
        variant: "red",
    },
    parameters: {
        displayName: "Red",
    },
    tags: ["group-variant"],
};
export const VariantInverted: Story = {
    args: {
        variant: "inverted",
    },
    parameters: {
        displayName: "Inverted",
    },
    tags: ["group-variant"],
};
