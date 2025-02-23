import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../components/alert";
import { Button } from "../components/button";
import type { ComponentProps } from "react";

export function Example(
    args: ComponentProps<typeof Alert>,
) {
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
    render: Example,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const example: Story = {
    args: {
        variant: "default",
    },
};
export const invalid: Story = {
    args: {
        variant: "invalid",
    },
};
export const inverted: Story = {
    args: {
        variant: "inverted",
    },
};
