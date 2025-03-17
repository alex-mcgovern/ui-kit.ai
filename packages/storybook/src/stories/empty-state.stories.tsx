import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Button, EmptyState } from "@ui-kit.ai/components";
import { SearchXIcon } from "lucide-react";

function Template(args: ComponentProps<typeof EmptyState>) {
    return (
        <EmptyState
            {...args}
            actions={[
                <Button key="secondary">Secondary</Button>,
                <Button key="primary">Primary</Button>,
            ]}
            body="This is the body"
            icon={SearchXIcon}
            title="This is the title"
        />
    );
}

const meta: Meta<typeof EmptyState> = {
    args: {
        title: "This is the title",
    },
    component: EmptyState,
    render: Template,
    title: "Components/EmptyState",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name: "EmptyState",
};
