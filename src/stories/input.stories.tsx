import type { Meta, StoryObj } from "@storybook/react";
import React, { type ComponentProps } from "react";

import { Input } from "../components/input";
import { SearchIcon } from "lucide-react";

function Template(props: ComponentProps<typeof Input>) {
    return <Input {...props} />;
}

const meta = {
    component: Input,
    title: "Components/Input",
    args: {
        placeholder: "This is a placeholder",
    },
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        icon: <SearchIcon />,
    },
};
export const Icon: Story = {
    args: {
        icon: <SearchIcon />,
    },
};
export const Disabled: Story = {
    args: {
        ["aria-disabled"]: true,
    },
};
export const Invalid: Story = {
    args: {
        ["aria-invalid"]: true,
    },
};
export const Borderless: Story = {
    args: {
        isBorderless: true,
    },
};
