import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
    AlertCircle,
    CircleDot,
    ClockIcon,
    CheckCircle2,
} from "lucide-react";

import { TagLink } from "../components/tag";

export function Example(
    args: ComponentProps<typeof TagLink>,
) {
    return (
        <div className="flex items-center gap-2">
            <TagLink
                {...args}
                variant="default"
                slotLeft={<CircleDot />}
                href="/"
            >
                Active
            </TagLink>
            <TagLink
                {...args}
                variant="green"
                slotLeft={<CheckCircle2 />}
                href="/"
            >
                Complete
            </TagLink>
            <TagLink
                {...args}
                variant="yellow"
                slotLeft={<ClockIcon />}
                href="/"
            >
                Pending
            </TagLink>
            <TagLink
                {...args}
                variant="red"
                slotLeft={<AlertCircle />}
                href="/"
            >
                Failed
            </TagLink>
            <TagLink
                {...args}
                variant="inverted"
                slotLeft={<CircleDot />}
                href="/"
            >
                TagLink
            </TagLink>
        </div>
    );
}

const meta = {
    component: TagLink,
    title: "Components/TagLink",
} satisfies Meta<typeof TagLink>;

export default meta;
type Story = StoryObj<typeof meta>;

type Variant = Exclude<
    ComponentProps<typeof TagLink>["variant"],
    undefined
>;

export const example: Story = {
    args: {},
    render: Example,
};
