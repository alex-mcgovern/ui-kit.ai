import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Kbd } from "../components/kbd";
import {
    Tooltip,
    TooltipInfoButton,
    TooltipTrigger,
} from "../components/tooltip";

const Template = (args: ComponentProps<typeof Tooltip>) => (
    <TooltipTrigger>
        <TooltipInfoButton />
        <Tooltip {...args} />
    </TooltipTrigger>
);

const meta: Meta<typeof Tooltip> = {
    args: {
        children: "Save",
    },
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    render: Template,
    tags: ["autodocs"],
    title: "Tooltip",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};

export const WithKbd: Story = {
    args: {
        children: (
            <>
                Create <Kbd>/</Kbd>
            </>
        ),
    },
};
