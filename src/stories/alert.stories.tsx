import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../components/alert";
import { Button } from "../components/button";
import type { ComponentProps } from "react";

function Template(args: ComponentProps<typeof Alert>) {
    return (
        <Alert
            {...args}
            title="Account verification required"
            description="Please verify your email so we can make sure your account is secure. A link has been sent to foo@bar.com."
            actions={[
                <Button key="verify" variant="secondary">
                    Dismiss
                </Button>,
                <Button key="resend" variant="primary">
                    Resend email
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
            <div className="w-full max-w-[64rem]">
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
