import type { Meta, StoryObj } from "@storybook/react";

import { FieldGroup } from "../components/field-group";
import { Input } from "../components/input";
import { Label } from "../components/label";
import {
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from "../components/text-field";
import { Description } from "../components/description";
import type { ComponentProps } from "react";

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
    title: "Components/TextField",
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    render: Template,
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
