import type { Meta, StoryObj } from "@storybook/react";

import { Star as IconStar } from "lucide-react";

import { Button, BUTTON_VARIANTS } from "../components/button";

const buttonMeta = {
    argTypes: {
        variant: {
            control: "select",
            options: BUTTON_VARIANTS,
        },
    },
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

export const PrimaryIsIcon: Story = {
    args: {
        children: <IconStar />,
        isIcon: true,
        variant: "primary",
    },
};

export const PrimaryIconLeft: Story = {
    args: {
        children: (
            <>
                <IconStar />
                Primary
            </>
        ),
        variant: "primary",
    },
};

export const PrimaryIconRight: Story = {
    args: {
        children: (
            <>
                Primary
                <IconStar />
            </>
        ),
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

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

export const SecondaryIsIcon: Story = {
    args: {
        children: <IconStar />,
        isIcon: true,
        variant: "secondary",
    },
};

export const SecondaryIconLeft: Story = {
    args: {
        children: (
            <>
                <IconStar />
                Secondary
            </>
        ),
        variant: "secondary",
    },
};

export const SecondaryIconRight: Story = {
    args: {
        children: (
            <>
                Secondary
                <IconStar />
            </>
        ),
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

export const Tertiary: Story = {
    args: {
        children: "Tertiary",
        variant: "tertiary",
    },
};

export const TertiaryIsIcon: Story = {
    args: {
        children: <IconStar />,
        isIcon: true,
        variant: "tertiary",
    },
};

export const TertiaryIconLeft: Story = {
    args: {
        children: (
            <>
                <IconStar />
                Tertiary
            </>
        ),
        variant: "tertiary",
    },
};

export const TertiaryIconRight: Story = {
    args: {
        children: (
            <>
                Tertiary
                <IconStar />
            </>
        ),
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
