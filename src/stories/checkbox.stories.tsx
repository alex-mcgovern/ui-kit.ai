import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

const meta = {
    title: "Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        isDisabled: false,
        children: "Checkbox",
        textPosition: "right",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
