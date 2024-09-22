import type { Meta, StoryObj } from "@storybook/react";

import { ColorOverlay } from "@boondoggle.design/css-types";

import { ConfirmedAction } from ".";
import { Toaster } from "../toaster";

const meta = {
    args: {
        buttonContent: "Confirm",
        onConfirmed: () => {
            alert("Confirmed!");
        },
        strConfirmText: "confirm",
        strInvalid: "Invalid",
        strPromptPrefix: "Type",
        strPromptSuffix: "to confirm",
    },
    component: ConfirmedAction,
    decorators: [
        (Story) => {
            return (
                <>
                    <Toaster />
                    <Story />
                </>
            );
        },
    ],
    title: "ConfirmedAction",
} satisfies Meta<typeof ConfirmedAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ColorOverlayRed: Story = {
    args: {
        colorOverlay: ColorOverlay.RED,
    },
};
