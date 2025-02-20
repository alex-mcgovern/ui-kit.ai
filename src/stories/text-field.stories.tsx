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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: ComponentProps<typeof TextField>) => (
    <TextField {...props}>
        <Label>Label</Label>
        <FieldGroup>
            <Input isBorderless placeholder="This is a placeholder" />
            <TextFieldClearButton />
            <TextFieldVisibilityButton />
            <TextFieldCopyButton />
        </FieldGroup>
        <Description>This is a short description</Description>
    </TextField>
);

export const examples: Story = {
    render: Template,
};
export const isDisabled: Story = {
    args: {
        isDisabled: true,
    },
    render: Template,
};
export const isInvalid: Story = {
    args: {
        isInvalid: true,
    },
    render: Template,
};
export const isReadOnly: Story = {
    args: {
        isReadOnly: true,
    },
    render: Template,
};
export const copy: Story = {
    args: {
        children: (
            <>
                <Label>TextField with copy button</Label>
                <FieldGroup>
                    <Input isBorderless />
                    <TextFieldCopyButton />
                </FieldGroup>
            </>
        ),
        defaultValue: "Click the button to copy me",
    },
};
export const clear: Story = {
    args: {
        children: (
            <>
                <Label>TextField with clear button</Label>
                <FieldGroup>
                    <Input isBorderless />
                    <TextFieldClearButton />
                </FieldGroup>
            </>
        ),
        defaultValue: "Click the button to clear me",
    },
};
export const visibility: Story = {
    args: {
        children: (
            <>
                <Label>TextField with visibility</Label>
                <FieldGroup>
                    <Input isBorderless />
                    <TextFieldVisibilityButton />
                </FieldGroup>
            </>
        ),
        defaultValue: "my-s3cur3-p@ssw0rd",
        type: "password",
    },
};
