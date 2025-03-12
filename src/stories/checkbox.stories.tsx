import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";
import type { ComponentProps } from "react";

export function Example(
    args: ComponentProps<typeof Checkbox>,
) {
    return <Checkbox {...args} />;
}

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        label: "This is the label",
    },
    render: Example,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        textPosition: "right",
    },
};
export const TextPositionRight: Story = {
    args: {
        textPosition: "right",
    },
};
export const TextPositionLeft: Story = {
    args: {
        textPosition: "left",
    },
};
export const IsInvalid: Story = {
    args: {
        isInvalid: true,
    },
};
