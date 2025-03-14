import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components/heading";
import type { ComponentProps } from "react";

const TEXT = "Lorem ipsum dolor sit amet...";

function Template(props: ComponentProps<typeof Heading>) {
    return (
        <div>
            {LEVELS.map((level) => (
                <Heading
                    {...props}
                    level={level}
                    children={`H${level} ${TEXT} `}
                    key={level}
                    className="truncate"
                />
            ))}
        </div>
    );
}

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
    render: Template,
};
