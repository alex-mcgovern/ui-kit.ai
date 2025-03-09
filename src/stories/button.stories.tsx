import type { ComponentProps, ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { StarIcon } from "lucide-react";

import { Button } from "../components/button";

type Variant = Exclude<
    ComponentProps<typeof Button>["variant"],
    undefined
>;

const variants: Variant[] = [
    "primary",
    "secondary",
    "tertiary",
];

function Template({
    children = "Button",
    ...args
}: ComponentProps<typeof Button>) {
    return (
        <>
            {variants.map(
                (variant) =>
                    (
                        <Button {...args} variant={variant}>
                            {children}
                        </Button>
                    ) as ReactNode,
            )}
        </>
    );
}

const meta = {
    component: Button,
    title: "Components/Button",
    render: Template,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
export const Destructive: Story = {
    args: {
        isDestructive: true,
    },
};
export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};
export const isIcon: Story = {
    args: {
        isIcon: true,
        children: <StarIcon />,
        "aria-label": "button",
    },
};
export const slotLeft: Story = {
    args: {
        slotLeft: <StarIcon />,
    },
};
export const slotRight: Story = {
    args: {
        slotRight: <StarIcon />,
    },
};
