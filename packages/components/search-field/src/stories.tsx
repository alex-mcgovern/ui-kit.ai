import type { Meta, StoryObj } from "@storybook/react";

import { SearchField } from "./components/search-field";

const meta = {
    args: {},
    component: SearchField,
    decorators: [
        (Story) => {
            return (
                <div style={{ width: 300 }}>
                    <Story />
                </div>
            );
        },
    ],
    title: "SearchField",
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
