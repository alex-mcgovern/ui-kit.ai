import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/checkbox";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,

    argTypes: {},
    args: {
        isDisabled: false,
        children: "Forms/Checkbox",
        textPosition: "right",
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
