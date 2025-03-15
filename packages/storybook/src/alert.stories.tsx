import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Alert } from "@ui-kit.ai/components";
import { Button } from "@ui-kit.ai/components";

function Template(args: ComponentProps<typeof Alert>) {
    return (
        <Alert
            {...args}
            actions={[
                <Button key="secondary" variant="secondary">
                    Secondary
                </Button>,
                <Button key="primary" variant="primary">
                    Primary
                </Button>,
            ]}
            description="Description"
            title="Title"
        />
    );
}

const meta: Meta<typeof Alert> = {
    args: {
        title: "Account verification required",
    },
    component: Alert,
    decorators: [
        (Story) => (
            <div className="w-full min-w-32 max-w-5xl">
                <Story />
            </div>
        ),
    ],
    render: Template,
    title: "Components/Alert",
};

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
