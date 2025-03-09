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

const Template = (
    props: ComponentProps<typeof TextField>,
) => (
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

export const Primary: Story = {
    render: Template,
};
export const IsDisabled: Story = {
    args: {
        isDisabled: true,
    },
    render: Template,
};
export const IsInvalid: Story = {
    args: {
        isInvalid: true,
    },
    render: Template,
};
export const IsReadOnly: Story = {
    args: {
        isReadOnly: true,
    },
    render: Template,
};
