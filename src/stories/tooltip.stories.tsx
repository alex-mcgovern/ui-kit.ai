import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import {
    Tooltip,
    TooltipInfoButton,
    TooltipTrigger,
} from "../components/tooltip";

import { Button } from "../components/button";

import React from "react";
import { Kbd } from "../components/kbd";

type Placement = ComponentProps<
    typeof Tooltip
>["placement"];

const PLACEMENTS = [
    "bottom",
    "top",
    "left",
    "right",
] satisfies Placement[];

function Template(args: ComponentProps<typeof Tooltip>) {
    return (
        <TooltipTrigger>
            <TooltipInfoButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    );
}

const meta = {
    component: Tooltip,
    args: {
        children: "This is the tooltip",
    },
    title: "Components/Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: (args) => (
        <TooltipTrigger>
            <TooltipInfoButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};
/**
 * react-aria supports a pretty comprehensive range of placement options, some
 * of which are shown here. It is important to note that the Tooltip may flip
 * when it detects a collision with a parent or window edge.
 */
export const Placement: Story = {
    // @ts-expect-error - coerce ReactNode[] where ReactNode expected
    render: (args) =>
        PLACEMENTS.map((placement) => (
            <TooltipTrigger>
                <TooltipInfoButton />
                <Tooltip {...args} placement={placement} />
            </TooltipTrigger>
        )),
    decorators: [
        (Story) => (
            <div className="grid grid-cols-4 gap-2">
                <Story />
            </div>
        ),
    ],
};
/**
 * The Tooltip can be composed with a number of different components,
 * like `Button`, `Link`, `Tab` and more. The element that triggers the tooltip
 * must be able to receive focus.
 */
export const Trigger: Story = {
    render: (args) => (
        <TooltipTrigger>
            <Button>Hover me</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};
/**
 * A common use case for a tooltip is to educate a user on an action that
 * supports keyboard shortcuts. You can use the `Kbd` component for this.
 */
export const WithKbd: Story = {
    render: (args) => (
        <TooltipTrigger>
            <TooltipInfoButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
    args: {
        children: (
            <>
                This is the tooltip <Kbd>C</Kbd>
            </>
        ),
    },
};
