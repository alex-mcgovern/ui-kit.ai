import type { Meta, StoryObj } from "@storybook/react";

import type { ComponentProps } from "react";
import {
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from "../../../components/text-field";
import { Label } from "../../../components/label";
import { FieldGroup } from "../../../components/field-group";
import { Input } from "../../../components/input";
import { Description } from "../../../components/description";

function Example(props: ComponentProps<typeof TextField>) {
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
    args: {
        name: "text field",
    },
    component: TextField,
    title: "Components/TextField",
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    render: Example,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
/**
 * You can pass `isDisabled` to the `TextField` to disable it.
 * This will prevent any user input.
 */
export const IsDisabled: Story = {
    args: {
        isDisabled: true,
    },
};
export const IsInvalid: Story = {
    args: {
        isInvalid: true,
    },
};
export const IsReadOnly: Story = {
    args: {
        isReadOnly: true,
    },
};
