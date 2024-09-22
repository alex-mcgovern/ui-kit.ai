import { ColorPalette } from "./color-palette";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "ColorPalette",
    component: ColorPalette,
    args: {},
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
