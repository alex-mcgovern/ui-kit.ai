import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { faker } from "@faker-js/faker";

import { css } from "../../../../src/css/index.css";
import { DialogTrigger } from "../../../../src/dialog-trigger";
import { Dialog } from "../../dialog";
import { Popover } from "./components/popover";
import { PopoverOverlayArrow } from "./components/popover-overlay-arrow";

const meta = {
    args: {
        className: css({ padding: "space_2" }),
    },
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
    title: "New/Popover",
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
