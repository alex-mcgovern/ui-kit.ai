import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components/heading";
import type { ComponentProps } from "react";
import { type StoryArgsList } from "../types/storybook";

const TEXT = "Lorem ipsum dolor sit amet...";

type ArgsList = StoryArgsList<
    ComponentProps<typeof Heading>
>;

const meta = {
    args: {
        children: TEXT,
    },
    component: Heading,
    title: "Components/Heading",
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const LEVELS = [1, 2, 3, 4, 5, 6] satisfies ComponentProps<
    typeof Heading
>["level"][];

export const Primary: Story = {
    args: {
        children: TEXT,
    },
    render: (args) => (
        <div>
            {LEVELS.map((level) => (
                <Heading
                    {...args}
                    level={level}
                    children={`H${level} ${TEXT} `}
                    key={level}
                    className="truncate"
                />
            ))}
        </div>
    ),
};
