import type { Meta, StoryObj } from "@storybook/react";

import {
    FieldGroup,
    Input,
    Kbd,
    Select,
    SelectButton,
    TextField,
} from "@ui-kit.ai/components";
import { getMockOptions } from "@ui-kit.ai/mocks";

const meta: Meta<typeof FieldGroup> = {
    args: {},
    component: FieldGroup,
    decorators: [(Story) => <div className="mx-auto w-96">{Story()}</div>],
    title: "Components/FieldGroup",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WKbd: Story = {
    args: {
        children: (
            <>
                <Input isBorderless />
                <Kbd className="mr-1.5">/</Kbd>
            </>
        ),
    },
    parameters: {
        displayName: "kbd",
    },
};

export const Default: Story = {
    args: {
        children: (
            <>
                <Select
                    aria-label="Country"
                    className="min-w-64 border-r border-r-muted-400"
                    items={getMockOptions({
                        withIcon: true,
                        withSections: true,
                    })}
                    name="country"
                >
                    {(rp) => <SelectButton {...rp} isBorderless />}
                </Select>

                <TextField aria-label="City">
                    <Input placeholder="Enter your city..." />
                </TextField>
            </>
        ),
    },
    parameters: {
        displayName: "Default",
    },
};
