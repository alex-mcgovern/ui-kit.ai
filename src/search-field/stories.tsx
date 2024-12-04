import type { Meta, StoryObj } from "@storybook/react";

import { SearchField, SearchFieldClearButton, SearchFieldIcon } from ".";
import { FieldGroup } from "../../packages/components/field-group/src/components/field-group";
import { Input } from "../../packages/components/input/src/components/input";
import { Label } from "../label";

const meta = {
    args: {},
    component: SearchField,
    render: (args) => {
        return (
            <SearchField {...args}>
                <Label>Label</Label>
                <FieldGroup>
                    <SearchFieldIcon />
                    <Input variant="unstyled" />
                    <SearchFieldClearButton />
                </FieldGroup>
            </SearchField>
        );
    },
    title: "SearchField",
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
