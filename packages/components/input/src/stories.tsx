import type { Meta, StoryObj } from "@storybook/react";

import { FieldVariant } from "@boondoggle.design/css-types";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";

import { Icon } from "../../../../src/icon";
import { Input } from "./components/input";

const meta = {
    component: Input,
    decorators: [
        (Story) => {
            return (
                <div style={{ width: 300 }}>
                    <Story />
                </div>
            );
        },
    ],
    title: "New/Input",
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Borderless: Story = {
    args: {
        variant: FieldVariant.BORDERLESS,
    },
};

export const IsDisabled: Story = {
    args: {
        disabled: true,
    },
};

export const IsInvalid: Story = {
    args: {
        "aria-invalid": true,
    },
};

export const WithIcon: Story = {
    args: {
        slotLeft: <Icon icon={faSearch} />,
    },
};
