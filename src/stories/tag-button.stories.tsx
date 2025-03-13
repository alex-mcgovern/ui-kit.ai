import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
    AlertCircle,
    CircleDot,
    ClockIcon,
    CheckCircle2,
} from "lucide-react";

import { TagButton } from "../components/tag";

function Template(args: ComponentProps<typeof TagButton>) {
    return (
        <div className="flex items-center gap-2">
            <TagButton
                {...args}
                variant="default"
                slotLeft={<CircleDot />}
            >
                Active
            </TagButton>
            <TagButton
                {...args}
                variant="green"
                slotLeft={<CheckCircle2 />}
            >
                Complete
            </TagButton>
            <TagButton
                {...args}
                variant="yellow"
                slotLeft={<ClockIcon />}
            >
                Pending
            </TagButton>
            <TagButton
                {...args}
                variant="red"
                slotLeft={<AlertCircle />}
            >
                Failed
            </TagButton>
            <TagButton
                {...args}
                variant="inverted"
                slotLeft={<CircleDot />}
            >
                TagButton
            </TagButton>
        </div>
    );
}

const meta = {
    component: TagButton,
    title: "Components/TagButton",
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

type Variant = Exclude<
    ComponentProps<typeof TagButton>["variant"],
    undefined
>;

export const Primary: Story = {
    args: {},
    render: Template,
};
