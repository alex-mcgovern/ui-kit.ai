import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components/heading";
import type { ComponentProps } from "react";
import { StoryArgsListTemplate, type StoryArgsList } from "../types/storybook";

const TEXT = "The swift brown fox jumped over the lazy dog";

type ArgsList = StoryArgsList<ComponentProps<typeof Heading>>;

const meta = {
    args: {
        children: TEXT,
    },
    component: Heading,
    title: "Components/Heading",
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const ARGS_LIST = {
    h1: { children: TEXT, level: 1 },
    h2: { children: TEXT, level: 2 },
    h3: { children: TEXT, level: 3 },
    h4: { children: TEXT, level: 4 },
    h5: { children: TEXT, level: 5 },
    h6: { children: TEXT, level: 6 },
} satisfies ArgsList;

export const Default: Story = {
    args: {},
    render: (args) => (
        <StoryArgsListTemplate<ComponentProps<typeof Heading>, ArgsList>
            args={args}
            argsList={ARGS_LIST}
            renderComponent={({ args, storyArgs }) => (
                <Heading {...args} {...storyArgs} className="mb-0 truncate" />
            )}
        />
    ),
};
