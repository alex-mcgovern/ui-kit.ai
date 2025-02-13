import type { Meta, StoryObj } from "@storybook/react";

import { HelpCircle as IconHelpCircle } from "lucide-react";

import { Button } from "../components/button";
import { DialogTrigger } from "../components/dialog";
import { Heading } from "../components/heading";
import { Popover, PopoverDialog } from "../components/popover";

const meta: Meta<typeof Popover> = {
    args: {},
    component: Popover,
    parameters: {
        layout: "centered",
    },
    render: (args) => (
        <DialogTrigger>
            <Button aria-label="Help" isIcon variant="tertiary">
                <IconHelpCircle className="size-4" />
            </Button>
            <Popover {...args} className="max-w-[250px]"></Popover>
        </DialogTrigger>
    ),
    title: "Popover",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PlacementBottomRight: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2 text-base" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
        placement: "bottom right",
    },
};

export const WithArrow: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
        showArrow: true,
    },
};

export const WithArrowTop: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
        placement: "top",
        showArrow: true,
    },
};
export const WithArrowRight: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
        placement: "right",
        showArrow: true,
    },
};

export const WithArrowBottom: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
        placement: "bottom",
        showArrow: true,
    },
};

export const WithArrowLeft: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
        placement: "left",
        showArrow: true,
    },
};
