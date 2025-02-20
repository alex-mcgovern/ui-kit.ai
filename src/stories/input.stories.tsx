import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Input } from "../components/input";
import { SearchIcon } from "lucide-react";

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

export const example: Story = {
    args: {
        icon: <SearchIcon />,
    },
};
export const withIcon: Story = {
    args: {
        icon: <SearchIcon />,
    },
};
export const isDisabled: Story = {
    args: {
        ["aria-disabled"]: true,
    },
};
export const isInvalid: Story = {
    args: {
        ["aria-invalid"]: true,
    },
};
export const isBorderless: Story = {
    args: {
        isBorderless: true,
    },
};
