import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@ui-kit.ai/components";
import { StarIcon } from "lucide-react";
import * as React from "react";

const meta = {
    args: {
        children: "Button",
    },
    component: Button,
    title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    parameters: {
        displayName: "Default",
    },
};
export const VariantPrimary: Story = {
    args: {
        variant: "primary",
    },
    parameters: {
        displayName: "Primary",
    },
    tags: ["group-variant"],
};
export const VariantSecondary: Story = {
    args: {
        variant: "secondary",
    },
    parameters: {
        displayName: "Secondary",
    },
    tags: ["group-variant"],
};
export const VariantTertiary: Story = {
    args: {
        variant: "tertiary",
    },
    parameters: {
        displayName: "Tertiary",
    },
    tags: ["group-variant"],
};
/**
 * The `isDestructive` prop will style the button in red, to denote a
 * potentially destructive action the user should consider carefully.
 */
export const DestructivePrimary: Story = {
    args: {
        isDestructive: true,
        variant: "primary",
    },
    parameters: {
        displayName: "Primary",
    },
    tags: ["group-destructive"],
};
export const DestructiveSecondary: Story = {
    args: {
        isDestructive: true,
        variant: "secondary",
    },
    parameters: {
        displayName: "Secondary",
    },
    tags: ["group-destructive"],
};
export const DestructiveTertiary: Story = {
    args: {
        isDestructive: true,
        variant: "tertiary",
    },
    parameters: {
        displayName: "Tertiary",
    },
    tags: ["group-destructive"],
};
/**
 * The `isDisabled` prop will "gray out" the button, and prevent focus and interaction.
 */
export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
    parameters: {
        displayName: "Disabled",
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
        "aria-label": "button",
        children: <StarIcon />,
        isIcon: true,
    },
    parameters: {
        displayName: "Icon button",
    },
};
/**
 * The `slotLeft` prop accepts a react node rendered on the left side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotLeft: Story = {
    args: {
        slotLeft: <StarIcon />,
    },
    parameters: {
        displayName: "Left",
    },
    tags: ["group-slot"],
};
/**
 * The `slotRight` prop accepts a react node rendered on the right side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotRight: Story = {
    args: {
        slotRight: <StarIcon />,
    },
    parameters: {
        displayName: "Right",
    },
    tags: ["group-slot"],
};
