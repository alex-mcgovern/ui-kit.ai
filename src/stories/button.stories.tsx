import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { StarIcon } from "lucide-react";

import { Button } from "../components/button";

const meta = {
    component: Button,
    args: {
        children: "Button",
    },
    title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
export const VariantPrimary: Story = {
    tags: ["group-variant"],
    name: "Primary",
    args: {
        variant: "primary",
    },
};
export const VariantSecondary: Story = {
    tags: ["group-variant"],
    name: "Secondary",
    args: {
        variant: "secondary",
    },
};
export const VariantTertiary: Story = {
    tags: ["group-variant"],
    name: "Tertiary",
    args: {
        variant: "tertiary",
    },
};
/**
 * The `isDestructive` prop will style the button in red, to denote a
 * potentially destructive action the user should consider carefully.
 */
export const DestructivePrimary: Story = {
    tags: ["group-destructive"],
    name: "Primary",
    args: {
        variant: "primary",
        isDestructive: true,
    },
};
export const DestructiveSecondary: Story = {
    tags: ["group-destructive"],
    name: "Secondary",
    args: {
        variant: "secondary",
        isDestructive: true,
    },
};
export const DestructiveTertiary: Story = {
    tags: ["group-destructive"],
    name: "Tertiary",
    args: {
        variant: "tertiary",
        isDestructive: true,
    },
};
/**
 * The `isDisabled` prop will "gray out" the button, and prevent focus and interaction.
 */
export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};
/**
 * The `isIcon` prop will make the button square. Use it when you are only
 * passing an icon as children.
 *
 * Note that you should set an `aria-label` to give the button an accessible
 * name when you do this.
 */
export const IconButton: Story = {
    args: {
        isIcon: true,
        children: <StarIcon />,
        "aria-label": "button",
    },
};
/**
 * The `slotLeft` prop accepts a react node rendered on the left side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotLeft: Story = {
    tags: ["group-slot"],
    args: {
        slotLeft: <StarIcon />,
    },
};
/**
 * The `slotRight` prop accepts a react node rendered on the right side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotRight: Story = {
    tags: ["group-slot"],
    args: {
        slotRight: <StarIcon />,
    },
};
