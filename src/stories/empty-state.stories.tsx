import type { Meta, StoryObj } from "@storybook/react";

import { SearchXIcon } from "lucide-react";

import { Button } from "../components/button";
import { EmptyState } from "../components/empty-state";
import type { ComponentProps } from "react";

export function Example(
    args: ComponentProps<typeof EmptyState>,
) {
    return (
        <EmptyState
            {...args}
            icon={SearchXIcon}
            title="This is the title"
            body="This is the body"
            actions={[
                <Button key="secondary">Secondary</Button>,
                <Button key="primary">Primary</Button>,
            ]}
        />
    );
}

const meta: Meta<typeof EmptyState> = {
    args: {
        title: "This is the title",
    },
    component: EmptyState,
    render: Example,
    title: "Components/EmptyState",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    name: "EmptyState",
};
