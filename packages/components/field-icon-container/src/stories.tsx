import type { Meta, StoryObj } from "@storybook/react";

import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";

import { Icon } from "../../../../src/icon";
import { FieldIconContainer } from "./components/field-icon-container";

const meta = {
    component: FieldIconContainer,
    title: "New/FieldIconContainer",
} satisfies Meta<typeof FieldIconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Icon icon={faSearch} />,
    },
};
