import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { Button } from "../Button";
import { Label } from "../Label";
import { SelectButton } from "../Select";
import { Form } from "../form";
import { FormResetOnSubmit } from "../form-reset-on-submit";
import { FormSelect } from "../form-select";

it("submits form with `FormSelect`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const {
        getAllByRole,
        getByLabelText,
        getByRole,
        getByText,
    } = render(
        <Form onSubmit={onSubmit}>
            <FormSelect
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="select"
            >
                <Label>Select</Label>
                <SelectButton />
            </FormSelect>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("Select", {
        selector: "button",
    });
    await user.click(field);

    expect(getByRole("listbox")).toBeInTheDocument();

    const option = getAllByRole("option")[0];
    expect(option).toBeInTheDocument();
    await user.click(option);

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { select: "abc123" },
        expect.anything(),
    );
});

it("`FormSelect` clears when reset after submission", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const {
        getAllByRole,
        getByLabelText,
        getByRole,
        getByText,
    } = render(
        <Form onSubmit={onSubmit}>
            <FormResetOnSubmit />
            <FormSelect
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="select"
            >
                <Label>Select</Label>
                <SelectButton />
            </FormSelect>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("Select", {
        selector: "button",
    });
    await user.click(field);

    expect(getByRole("listbox")).toBeInTheDocument();

    const option = getAllByRole("option")[0];
    expect(option).toBeInTheDocument();
    await user.click(option);

    expect(field).toHaveTextContent("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { select: "abc123" },
        expect.anything(),
    );

    expect(field).not.toHaveTextContent("abc123");
});

it("handles `defaultValues` prop passed to `Form` correctly with `FormSelect`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form
            onSubmit={onSubmit}
            options={{
                defaultValues: {
                    select: "abc123",
                },
            }}
        >
            <FormSelect
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="select"
            >
                <Label>Select</Label>
                <SelectButton />
            </FormSelect>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("Select");
    expect(field).toHaveTextContent("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { select: "abc123" },
        expect.anything(),
    );
});

it("handles `selectedKey` prop passed to `FormSelect`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormSelect
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="select"
                selectedKey="abc123"
            >
                <Label>Select</Label>
                <SelectButton />
            </FormSelect>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("Select");
    expect(field).toHaveTextContent("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { select: "abc123" },
        expect.anything(),
    );
});

it("handles `defaultSelectedKey` prop passed to `FormSelect`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormSelect
                defaultSelectedKey="abc123"
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="select"
            >
                <Label>Select</Label>
                <SelectButton />
            </FormSelect>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("Select");
    expect(field).toHaveTextContent("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { select: "abc123" },
        expect.anything(),
    );
});
