import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps, ReactNode } from "react";

import {
    Tooltip,
    TooltipInfoButton,
    TooltipTrigger,
} from "../components/tooltip";

import { Button } from "../components/button";

import React from "react";
import { Kbd } from "../components/kbd";

const STORIES = {
    "Trigger: TooltipInfoButton": {
        trigger: <TooltipInfoButton />,
        tooltipProps: { children: "This is the tooltip" },
    },
    "Placement bottom right": {
        trigger: <TooltipInfoButton />,
        tooltipProps: {
            placement: "bottom right",
            children: "This is the tooltip",
        },
    },
    "Placement top left": {
        trigger: <TooltipInfoButton />,
        tooltipProps: {
            placement: "top left",
            children: "This is the tooltip",
        },
    },
    "Trigger: Button": {
        trigger: <Button>Hover me</Button>,
        tooltipProps: {
            children: "This is the tooltip",
        },
    },
    WithKbd: {
        trigger: <Button>Hover me</Button>,
        tooltipProps: {
            children: (
                <>
                    This is the tooltip <Kbd>C</Kbd>
                </>
            ),
        },
    },
} satisfies Record<
    string,
    {
        trigger: ReactNode;
        tooltipProps: ComponentProps<typeof Tooltip>;
    }
>;

const Template = (args: ComponentProps<typeof Tooltip>) => {
    return (
        <div>
            {Object.entries(STORIES).map(
                ([name, { tooltipProps, trigger }]) => {
                    return (
                        <div className="mb-4 grid grid-cols-[12rem_14rem] items-center gap-4">
                            <div>{name}</div>
                            <TooltipTrigger>
                                {trigger}
                                <Tooltip
                                    {...tooltipProps}
                                />
                            </TooltipTrigger>
                        </div>
                    );
                },
            )}
        </div>
    );
};

const meta = {
    component: Tooltip,
    title: "Components/Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "This is the tooltip",
    },
    render: Template,
};
