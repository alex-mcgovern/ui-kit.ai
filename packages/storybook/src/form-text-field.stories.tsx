import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    AtSignIcon,
    KeyIcon,
    UserIcon,
} from "lucide-react";
import { z } from "zod";

import { Description } from "@ui-kit.ai/components";
import { FieldGroup } from "@ui-kit.ai/components";
import { Form } from "@ui-kit.ai/components";
import { FormSubmitButton } from "@ui-kit.ai/components";
import { FormTextField } from "@ui-kit.ai/components";
import { Input } from "@ui-kit.ai/components";
import { Label } from "@ui-kit.ai/components";
import {
    TextFieldClearButton,
    TextFieldVisibilityButton,
} from "@ui-kit.ai/components";

const schema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
    username: z
        .string()
        .min(3, "Username must be at least 3 characters"),
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
                className="mb-4"
                name={FIELD_NAME.username}
            >
                <Label>Username</Label>
                <FieldGroup>
                    <Input
                        icon={<UserIcon />}
                        isBorderless
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
                className="mb-4"
                name={FIELD_NAME.email}
                type="email"
            >
                <Label>Email address</Label>
                <FieldGroup>
                    <Input
                        icon={<AtSignIcon />}
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>

            <FormTextField
                className="mb-4"
                name={FIELD_NAME.password}
                type="password"
            >
                <Label>Password</Label>
                <FieldGroup>
                    <Input
                        icon={<KeyIcon />}
                        isBorderless
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
    args: {
        onError: (errors: Record<string, unknown>) => {
            alert(
                `Errors:\n\n${JSON.stringify(errors, null, 4)}`,
            );
        },
        onSubmit: async (data: FieldValues) => {
            await new Promise((resolve) =>
                setTimeout(resolve, 1_000),
            );
            alert(
                `Submitted:\n\n${JSON.stringify(data, null, 4)}`,
            );
        },
        options: {
            resolver: zodResolver(schema),
        },
    },
    component: FormTextField,
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    render: Template,
    title: "Components/FormTextField",
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
            defaultValues: {
                email: "invalid-email",
                password: "short",
                username: "a",
            },
            errors: {
                email: {
                    message: "Email address is required",
                    type: "required",
                },
                password: {
                    message: "Password is required",
                    type: "required",
                },
                username: {
                    message: "Username is required",
                    type: "required",
                },
            },
            resolver: zodResolver(schema),
        },
    },
};
