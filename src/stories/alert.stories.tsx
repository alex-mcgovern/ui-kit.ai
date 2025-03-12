import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../components/alert";
import { Button } from "../components/button";
import type { ComponentProps } from "react";

function Template(args: ComponentProps<typeof Alert>) {
    return (
        <Alert
            {...args}
            title="Title"
            description="Description"
            actions={[
                <Button key="secondary" variant="secondary">
                    Secondary
                </Button>,
                <Button key="primary" variant="primary">
                    Primary
                </Button>,
            ]}
        />
    );
}

const meta = {
    title: "Components/Alert",
    component: Alert,
    args: {
        title: "Account verification required",
    },
    decorators: [
        (Story) => (
            <div className="w-full min-w-32 max-w-[64rem]">
                <Story />
            </div>
        ),
    ],
    render: Template,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "default",
    },
};
/**
 * Passing `"invalid"` to the `variant` prop will style the alert in red, to
 * denote an error or invalid user action / scenario.
 */
export const Invalid: Story = {
    args: {
        variant: "invalid",
    },
};
/**
 * Passing `"inverted"` to the `variant` prop will invert the colors in the
 * alert. This can be used to add extra emphasis to the alert.
 */
export const Inverted: Story = {
    args: {
        variant: "inverted",
    },
};
