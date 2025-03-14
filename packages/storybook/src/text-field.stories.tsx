import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Description } from "@ui-kit.ai/components";
import { FieldGroup } from "@ui-kit.ai/components";
import { Input } from "@ui-kit.ai/components";
import { Label } from "@ui-kit.ai/components";
import {
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from "@ui-kit.ai/components";

function Template(props: ComponentProps<typeof TextField>) {
    return (
        <TextField {...props}>
            <Label>Label</Label>
            <FieldGroup>
                <Input
                    isBorderless
                    placeholder="This is a placeholder"
                />
                <TextFieldClearButton />
                <TextFieldVisibilityButton />
                <TextFieldCopyButton />
            </FieldGroup>
            <Description>
                This is a short description
            </Description>
        </TextField>
    );
}

const meta = {
    component: TextField,
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    render: Template,
    title: "Components/TextField",
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {};
export const isDisabled: Story = {
    args: {
        isDisabled: true,
    },
};
export const isInvalid: Story = {
    args: {
        isInvalid: true,
    },
};
export const isReadOnly: Story = {
    args: {
        isReadOnly: true,
    },
};
