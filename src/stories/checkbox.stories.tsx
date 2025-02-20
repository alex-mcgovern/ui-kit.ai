import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        label: "This is the checkbox",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const textPositionRight: Story = {
    args: {
        textPosition: "right",
    },
};
export const textPositionLeft: Story = {
    args: {
        textPosition: "left",
    },
};
export const isInvalid: Story = {
    args: {
        isInvalid: true,
    },
};
