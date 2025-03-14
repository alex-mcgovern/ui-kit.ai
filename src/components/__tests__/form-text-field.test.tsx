import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { Button } from "../button";
import { FieldGroup } from "../field-group";
import { Form } from "../form";
import { FormResetOnSubmit } from "../form-reset-on-submit";
import { FormTextField } from "../form-text-field";
import { Input } from "../input";
import { Label } from "../label";
import { TextFieldClearButton } from "../text-field";

it("submits form with `FormTextField`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormTextField
                className="mb-4"
                name="email"
                type="email"
            >
                <Label>Email address (Text field)</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText(
        "Email address (Text field)",
    );
    await user.type(field, "test@example.com");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { email: "test@example.com" },
        expect.anything(),
    );
});

it("`FormTextField` clears when reset after submission", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormResetOnSubmit />
            <FormTextField
                className="mb-4"
                name="email"
                type="email"
            >
                <Label>Email address (Text field)</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText(
        "Email address (Text field)",
    );
    await user.type(field, "test@example.com");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { email: "test@example.com" },
        expect.anything(),
    );

    await waitFor(() => {
        expect(field).toHaveValue("");
    });
});

it("handles `defaultValues` prop passed to `Form` correctly with `FormTextField`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form
            onSubmit={onSubmit}
            options={{
                defaultValues: {
                    email: "test@example.com",
                },
            }}
        >
            <FormTextField
                className="mb-4"
                name="email"
                type="email"
            >
                <Label>Email address (Text field)</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText(
        "Email address (Text field)",
    );
    expect(field).toHaveValue("test@example.com");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { email: "test@example.com" },
        expect.anything(),
    );
});

it("handles `value` prop passed to `FormTextField`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormTextField
                className="mb-4"
                name="email"
                type="email"
                value="test@example.com"
            >
                <Label>Email address (Text field)</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText(
        "Email address (Text field)",
    );
    expect(field).toHaveValue("test@example.com");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { email: "test@example.com" },
        expect.anything(),
    );
});

it("handles `defaultValue` prop passed to `FormTextField`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormTextField
                className="mb-4"
                defaultValue="test@example.com"
                name="email"
                type="email"
            >
                <Label>Email address (Text field)</Label>
                <FieldGroup>
                    <Input
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText(
        "Email address (Text field)",
    );
    expect(field).toHaveValue("test@example.com");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { email: "test@example.com" },
        expect.anything(),
    );
});
