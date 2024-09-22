import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { Link } from "react-aria-components";

import { Tooltip, TooltipTrigger, TooltipTriggerButton } from ".";

const meta = {
    args: {
        children: "Tooltip text",
    },
    component: Tooltip,
    render: (args) => (
        <TooltipTrigger>
            <TooltipTriggerButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
    title: "Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTooltipTriggerButton: Story = {
    render: (args) => (
        <TooltipTrigger>
            <TooltipTriggerButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};

export const WithButtonAsTrigger: Story = {
    render: (args) => (
        <TooltipTrigger>
            <Button>Test</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};

export const WithLinkAsTrigger: Story = {
    render: (args) => (
        <TooltipTrigger>
            <Link>Test</Link>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};

export const PlacementTop: Story = {
    args: {
        placement: "top",
    },
};

export const PlacementBottom: Story = {
    args: {
        placement: "bottom",
    },
};

export const PlacementRight: Story = {
    args: {
        placement: "right",
    },
};

export const PlacementLeft: Story = {
    args: {
        placement: "left",
    },
};
