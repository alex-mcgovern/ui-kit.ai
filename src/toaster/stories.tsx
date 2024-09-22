import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant } from "@boondoggle.design/css-types";

import { Toaster, toast } from ".";
import { Box } from "../box";

const meta = {
    args: {},
    component: Toaster,
    render: () => {
        return (
            <>
                <Toaster />

                <Box
                    display="grid"
                    gap="space_1"
                >
                    <Button
                        onPress={() => {
                            toast("This is a toast");
                        }}
                        variant={ButtonVariant.SECONDARY}
                    >
                        Default toast
                    </Button>
                    <Button
                        onPress={() => {
                            toast.error("This is an error toast");
                        }}
                        variant={ButtonVariant.SECONDARY}
                    >
                        Error toast
                    </Button>
                    <Button
                        onPress={() => {
                            toast.success("This is a success toast");
                        }}
                        variant={ButtonVariant.SECONDARY}
                    >
                        Success toast
                    </Button>
                </Box>
            </>
        );
    },
    title: "Toaster",
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
