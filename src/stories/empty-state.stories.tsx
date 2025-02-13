import type { Meta, StoryObj } from "@storybook/react";

import { SearchXIcon } from "lucide-react";

import { Button } from "../components/button";
import { EmptyState } from "../components/empty-state";

const meta: Meta<typeof EmptyState> = {
    args: {
        actions: [<Button key="clear-search">Clear search</Button>],
        body: "Try another search term, or clearing the search.",
        icon: SearchXIcon,
        title: 'No search results for "foo-bar"',
    },
    component: EmptyState,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    title: "EmptyState",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    name: "EmptyState",
};
