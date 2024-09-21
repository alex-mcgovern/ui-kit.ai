import type { Meta, StoryObj } from "@storybook/react";

import { Size } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";

import { Header as StoryComp } from ".";
import { Box } from "../box";
import { Button } from "../button";

const meta = {
    args: {
        children: (
            <>
                <Box
                    as="h1"
                    className={typography.h1}
                    fontWeight="semibold"
                    marginBottom="none"
                >
                    Title
                </Box>
            </>
        ),
    },
    component: StoryComp,
    title: "Header",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
    args: {
        actions: (
            <Button
                name="primary"
                size={Size.SM}
            >
                Primary action
            </Button>
        ),
    },
};
