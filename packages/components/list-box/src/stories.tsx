import type { Meta, StoryObj } from "@storybook/react";

import { FieldVariant } from "@boondoggle.design/css-types";

import { ListBox } from ".";
import { LIST_SCHEMA_MOCK } from "../../../../mocks/src/list";
import { SelectButton } from "./components/select-button";

const meta = {
    args: {
        items: LIST_SCHEMA_MOCK,
    },
    component: ListBox,
    title: "ListBox",
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
