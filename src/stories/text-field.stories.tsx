import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";
import { FieldError } from "../components/field-error";
import { FieldGroup } from "../components/field-group";
import { Form } from "../components/form";
import { Input } from "../components/input";
import { Label } from "../components/label";
import {
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from "../components/text-field";

const meta = {
    component: TextField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    title: "TextField",
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        children: (
            <>
                <Label>TextField</Label>
                <Input />
            </>
        ),
    },
};

export const IsDisabled: Story = {
    args: {
        children: (
            <>
                <Label>TextField (disabled)</Label>
                <Input />
            </>
        ),
        isDisabled: true,
    },
};

export const IsInvalid: Story = {
    args: {
        children: (
            <>
                <Label>TextField (invalid)</Label>
                <Input />
            </>
        ),
        isInvalid: true,
    },
};

export const IsReadOnly: Story = {
    args: {
        children: (
            <>
                <Label>TextField (read-only)</Label>
                <Input />
            </>
        ),
        isReadOnly: true,
    },
};

export const Borderless: Story = {
    args: {
        children: (
            <>
                <Label>TextField (borderless)</Label>
                <Input isBorderless />
            </>
        ),
    },
};

export const Copy: Story = {
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

export const Clear: Story = {
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

export const Visibility: Story = {
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

export const KitchenSink: Story = {
    args: {
        children: (
            <>
                <Label>TextField with kitchen sink</Label>
                <FieldGroup>
                    <Input isBorderless />
                    <TextFieldClearButton />
                    <TextFieldVisibilityButton />
                    <TextFieldCopyButton />
                </FieldGroup>
            </>
        ),
        defaultValue: "Do whatever with me",
    },
};

export const Validation: Story = {
    args: {
        children: (
            <>
                <Label>Full name</Label>
                <Input />
                <FieldError />
            </>
        ),
        isRequired: true,
    },
    render: (args) => (
        <Form className="flex flex-col items-start gap-2">
            <TextField {...args} />
            <Button type="submit" variant="secondary">
                Submit
            </Button>
        </Form>
    ),
};
