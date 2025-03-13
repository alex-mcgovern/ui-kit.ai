import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import {
    AtSignIcon,
    KeyIcon,
    UserIcon,
} from "lucide-react";

import { Form } from "../components/form";
import { FormTextField } from "../components/form-text-field";
import { Label } from "../components/label";
import { FieldGroup } from "../components/field-group";
import { Input } from "../components/input";
import { FormSubmitButton } from "../components/form-submit-button";
import {
    TextFieldClearButton,
    TextFieldVisibilityButton,
} from "../components/text-field";
import { Description } from "../components/description";
import type { ComponentProps } from "react";

const schema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});

/** You can infer the type of your field values from the schema */
type FieldValues = z.infer<typeof schema>;

/** Create an enum from the schema for field names */
const FIELD_NAME = schema.keyof().Enum;

function Template(
    props: ComponentProps<typeof Form<FieldValues>>,
) {
    return (
        <Form<FieldValues> {...props}>
            <FormTextField
                name={FIELD_NAME.username}
                className="mb-4"
            >
                <Label>Username</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        icon={<UserIcon />}
                        placeholder="Enter your username"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
                <Description>
                    Choose a unique username for your
                    account
                </Description>
            </FormTextField>

            <FormTextField
                name={FIELD_NAME.email}
                className="mb-4"
                type="email"
            >
                <Label>Email address</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        icon={<AtSignIcon />}
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>

            <FormTextField
                name={FIELD_NAME.password}
                className="mb-4"
                type="password"
            >
                <Label>Password</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        icon={<KeyIcon />}
                        placeholder="Enter your password"
                    />
                    <TextFieldVisibilityButton />
                </FieldGroup>
                <Description>
                    Password must be at least 8 characters
                    long
                </Description>
            </FormTextField>

            <FormSubmitButton />
        </Form>
    );
}

const meta = {
    component: FormTextField,
    title: "Components/FormTextField",
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    args: {
        onSubmit: async (data: FieldValues) => {
            await new Promise((resolve) =>
                setTimeout(resolve, 1_000),
            );
            alert(
                `Submitted:\n\n${JSON.stringify(data, null, 4)}`,
            );
        },
        onError: (errors: any) => {
            alert(
                `Errors:\n\n${JSON.stringify(errors, null, 4)}`,
            );
        },
        options: {
            resolver: zodResolver(schema),
        },
    },
    render: Template,
} satisfies Meta<typeof Form<FieldValues>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    // @ts-expect-error - we're not passing children and that's alright
    args: {},
};

export const WithValidationErrors: Story = {
    // @ts-expect-error - we're not passing children and that's alright
    args: {
        options: {
            resolver: zodResolver(schema),
            errors: {
                email: {
                    type: "required",
                    message: "Email address is required",
                },
                password: {
                    type: "required",
                    message: "Password is required",
                },
                username: {
                    type: "required",
                    message: "Username is required",
                },
            },
            defaultValues: {
                username: "a", // Too short
                email: "invalid-email", // Invalid email format
                password: "short", // Too short
            },
        },
    },
};
