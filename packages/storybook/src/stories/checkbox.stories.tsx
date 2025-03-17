import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Checkbox } from "@ui-kit.ai/components";

function Template(args: ComponentProps<typeof Checkbox>) {
    return <Checkbox {...args} />;
}

const meta = {
    args: {
        label: "This is the label",
    },
    component: Checkbox,
    render: Template,
    title: "Components/Checkbox",
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
