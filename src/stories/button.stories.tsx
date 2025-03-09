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
/**
 * The `isDestructive` prop will style the button in red, to denote a
 * potentially destructive action the user should consider carefully.
 */
export const Destructive: Story = {
    args: {
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
    args: {
        slotLeft: <StarIcon />,
    },
};
/**
 * The `slotRight` prop accepts a react node rendered on the right side. This will
 * slightly adjust the left padding to maintain visual balance.
 */
export const SlotRight: Story = {
    args: {
        slotRight: <StarIcon />,
    },
};
