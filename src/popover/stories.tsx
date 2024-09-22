import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { faker } from "@faker-js/faker";

import { Popover, PopoverOverlayArrow } from ".";
import { Dialog } from "../dialog";
import { DialogTrigger } from "../dialog-trigger";

const meta = {
    args: {},
    component: Popover,
    render: (args) => {
        return (
            <DialogTrigger>
                <Button>Open popover</Button>
                <Popover {...args}>
                    <PopoverOverlayArrow />
                    <Dialog>
                        <div>{faker.lorem.words(3)}</div>
                        <div>{faker.lorem.words(3)}</div>
                        <div>{faker.lorem.words(3)}</div>
                    </Dialog>
                </Popover>
            </DialogTrigger>
        );
    },
    title: "Popover",
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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

export const PlacementTop: Story = {
    args: {
        placement: "top",
    },
};
