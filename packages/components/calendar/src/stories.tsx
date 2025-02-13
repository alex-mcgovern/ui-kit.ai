import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "./components/calendar";

const meta = {
    args: {},
    component: Calendar,
    title: "Calendar",
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
