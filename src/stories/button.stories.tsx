import type { Meta, StoryObj } from "@storybook/react";

import { Star as IconStar } from "lucide-react";

import { Button } from "../components/button";

const buttonMeta = {
    component: Button,
    parameters: {
        layout: "centered",
    },
    title: "Button",
} satisfies Meta<typeof Button>;

export default buttonMeta;
type Story = StoryObj<typeof buttonMeta>;

export const Default: Story = {
    args: {
        children: "Button",
    },
};

export const Primary: Story = {
    args: {
        children: "Primary",
        variant: "primary",
    },
};

export const PrimaryDisabled: Story = {
    args: {
        children: "Primary",
        variant: "primary",
        isDisabled: true,
    },
};

export const PrimaryIsIcon: Story = {
    args: {
        "aria-label": "Button",
        children: <IconStar />,
        isIcon: true,
        variant: "primary",
    },
};

export const PrimarySlotLeft: Story = {
    args: {
        children: "Primary",
        slotLeft: <IconStar />,
        variant: "primary",
    },
};

export const PrimarySlotRight: Story = {
    args: {
        children: "Primary",
        slotRight: <IconStar />,
        variant: "primary",
    },
};

export const PrimaryPending: Story = {
    args: {
        children: <>I am pending</>,
        isPending: true,
        variant: "primary",
    },
};

export const PrimaryDestructive: Story = {
    args: {
        children: "Primary",
        isDestructive: true,
        variant: "primary",
    },
};
export const PrimaryDestructiveDisabled: Story = {
    args: {
        children: "Primary",
        isDestructive: true,
        variant: "primary",
        isDisabled: true,
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

export const SecondaryDisabled: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
        isDisabled: true,
    },
};

export const SecondaryIsIcon: Story = {
    args: {
        "aria-label": "Button",
        children: <IconStar />,
        isIcon: true,
        variant: "secondary",
    },
};

export const SecondarySlotLeft: Story = {
    args: {
        children: "Secondary",
        slotLeft: <IconStar />,
        variant: "secondary",
    },
};

export const SecondarySlotRight: Story = {
    args: {
        children: "Secondary",
        slotRight: <IconStar />,
        variant: "secondary",
    },
};

export const SecondaryDestructive: Story = {
    args: {
        children: "Secondary",
        isDestructive: true,
        variant: "secondary",
    },
};

export const SecondaryDestructiveDisabled: Story = {
    args: {
        children: "Secondary",
        isDestructive: true,
        variant: "secondary",
        isDisabled: true,
    },
};

export const SecondaryPending: Story = {
    args: {
        children: <>I am pending</>,
        isPending: true,
        variant: "secondary",
    },
};

export const Tertiary: Story = {
    args: {
        children: "Tertiary",
        variant: "tertiary",
    },
};

export const TertiaryDisabled: Story = {
    args: {
        children: "Tertiary",
        variant: "tertiary",
        isDisabled: true,
    },
};

export const TertiaryIsIcon: Story = {
    args: {
        "aria-label": "Button",
        children: <IconStar />,
        isIcon: true,
        variant: "tertiary",
    },
};

export const TertiarySlotLeft: Story = {
    args: {
        children: "Tertiary",
        slotLeft: <IconStar />,
        variant: "tertiary",
    },
};

export const TertiarySlotRight: Story = {
    args: {
        children: "Tertiary",
        slotRight: <IconStar />,
        variant: "tertiary",
    },
};

export const TertiaryDestructive: Story = {
    args: {
        children: "Tertiary",
        isDestructive: true,
        variant: "tertiary",
    },
};

export const TertiaryDestructiveDisabled: Story = {
    args: {
        children: "Tertiary",
        isDestructive: true,
        variant: "tertiary",
        isDisabled: true,
    },
};

export const TertiaryPending: Story = {
    args: {
        children: <>I am pending</>,
        isPending: true,
        variant: "tertiary",
    },
};
