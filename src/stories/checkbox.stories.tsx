import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";
import type { ComponentProps } from "react";

export function Example(
    args: ComponentProps<typeof Checkbox>,
) {
    return (
        <Checkbox {...args} label="This is the checkbox" />
    );
}

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {},
    render: Example,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const example: Story = {
    args: {
        textPosition: "right",
    },
};
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
