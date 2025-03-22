import type { Meta, StoryObj } from "@storybook/react";

import {
    FieldGroup,
    FormTextField,
    Input,
    Label,
    TextFieldClearButton,
} from "@ui-kit.ai/components";
import { AtSignIcon } from "lucide-react";

const meta = {
    args: {
        children: (
            <>
                <Label>Email address</Label>
                <FieldGroup>
                    <Input
                        icon={<AtSignIcon />}
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </>
        ),
        name: "email",
    },
    component: FormTextField,
    title: "Components/FormTextField",
} satisfies Meta<typeof FormTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    parameters: {
        displayName: "Default",
    },
};

export const IsInvalid: Story = {
    args: {
        isInvalid: true,
    },
    parameters: {
        displayName: "Invalid",
    },
};
