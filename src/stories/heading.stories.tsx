import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../components/heading";

const TEXT = "The swift fox jumped over the lazy dog";

const meta = {
    args: {
        children: TEXT,
    },
    component: Heading,
    title: "Heading",
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: { children: `H1 ${TEXT}`, level: 1 },
    name: "h1",
};
export const H2: Story = {
    args: { children: `H2 ${TEXT}`, level: 2 },
    name: "h2",
};
export const H3: Story = {
    args: { children: `H3 ${TEXT}`, level: 3 },
    name: "h3",
};
export const H4: Story = {
    args: { children: `H4 ${TEXT}`, level: 4 },
    name: "h4",
};
export const H5: Story = {
    args: { children: `H5 ${TEXT}`, level: 5 },
    name: "h5",
};
export const H6: Story = {
    args: { children: `H6 ${TEXT}`, level: 6 },
    name: "h6",
};

export const OverridesCode: Story = {
    args: {
        children: `\`code text-sm\` ${TEXT}`,
        className: "code text-sm",
        level: 1,
    },
    name: "overrides: code",
};
