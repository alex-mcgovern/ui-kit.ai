import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
    AlertCircle,
    CircleDot,
    ClockIcon,
    CheckCircle2,
} from "lucide-react";

import { Tag } from "../components/tag";

export function Example(args: ComponentProps<typeof Tag>) {
    return (
        <div className="flex items-center gap-2">
            <Tag
                {...args}
                variant="default"
                slotLeft={<CircleDot />}
            >
                Active
            </Tag>
            <Tag
                {...args}
                variant="green"
                slotLeft={<CheckCircle2 />}
            >
                Complete
            </Tag>
            <Tag
                {...args}
                variant="yellow"
                slotLeft={<ClockIcon />}
            >
                Pending
            </Tag>
            <Tag
                {...args}
                variant="red"
                slotLeft={<AlertCircle />}
            >
                Failed
            </Tag>
            <Tag
                {...args}
                variant="inverted"
                slotLeft={<CircleDot />}
            >
                Tag
            </Tag>
        </div>
    );
}

const meta = {
    component: Tag,
    title: "Components/Tag",
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

type Variant = Exclude<
    ComponentProps<typeof Tag>["variant"],
    undefined
>;

export const Primary: Story = {
    args: {},
    render: Example,
};
