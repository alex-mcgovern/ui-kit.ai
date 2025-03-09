import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, it, vi } from "vitest";

import { Button } from "../Button";
import { ComboBoxInput } from "../ComboBox";
import { Label } from "../Label";
import { Form } from "../form";
import { FormComboBox } from "../form-combobox";
import { FormResetOnSubmit } from "../form-reset-on-submit";

it("submits form with `Form.ComboBox`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const {
        getAllByRole,
        getByLabelText,
        getByRole,
        getByText,
    } = render(
        <Form onSubmit={onSubmit}>
            <FormComboBox
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="combobox"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    await user.click(field);

    expect(getByRole("listbox")).toBeInTheDocument();

    const option = getAllByRole("option")[0];
    expect(option).toBeInTheDocument();
    await user.click(option);

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "abc123" },
        expect.anything(),
    );
});

it("`Form.ComboBox` clears when reset after submission", async () => {
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
            <FormComboBox
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="combobox"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    await user.click(field);

    expect(getByRole("listbox")).toBeInTheDocument();

    const option = getAllByRole("option")[0];
    expect(option).toBeInTheDocument();
    await user.click(option);

    expect(field).toHaveValue("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "abc123" },
        expect.anything(),
    );

    await waitFor(() => {
        expect(field).not.toHaveValue("abc123");
    });
});

it("handles `defaultValues` prop passed to `Form` correctly with `Form.ComboBox`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form
            onSubmit={onSubmit}
            options={{
                defaultValues: {
                    combobox: "abc123",
                },
            }}
        >
            <FormComboBox
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="combobox"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    expect(field).toHaveValue("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "abc123" },
        expect.anything(),
    );
});

it("handles `selectedKey` prop passed to `Form.ComboBox`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormComboBox
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="combobox"
                selectedKey="abc123"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    expect(field).toHaveValue("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "abc123" },
        expect.anything(),
    );
});

it("handles `defaultSelectedKey` prop passed to `Form.ComboBox`", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormComboBox
                defaultSelectedKey="abc123"
                items={[
                    { id: "abc123", textValue: "abc123" },
                ]}
                name="combobox"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    expect(field).toHaveValue("abc123");

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "abc123" },
        expect.anything(),
    );
});

it("Filters with typeahead when filtering", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const {
        getAllByRole,
        getByLabelText,
        getByRole,
        getByText,
    } = render(
        <Form onSubmit={onSubmit}>
            <FormComboBox
                defaultItems={[
                    { id: "p0", textValue: "Urgent" },
                    { id: "p1", textValue: "High" },
                    { id: "p2", textValue: "Medium" },
                    { id: "p3", textValue: "Low" },
                ]}
                name="combobox"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    await user.click(field);
    await user.type(field, "Urgent");

    expect(getByRole("listbox")).toBeInTheDocument();

    const options = getAllByRole("option");
    expect(options.length).toBe(1);
    await user.click(options[0]);

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "p0" },
        expect.anything(),
    );
});

it("Clearing combobox doesn't throw", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn().mockImplementation(() => null);

    const {
        getAllByRole,
        getByLabelText,
        getByRole,
        getByText,
    } = render(
        <Form onSubmit={onSubmit}>
            <FormComboBox
                defaultItems={[
                    { id: "p0", textValue: "Urgent" },
                    { id: "p1", textValue: "High" },
                    { id: "p2", textValue: "Medium" },
                    { id: "p3", textValue: "Low" },
                ]}
                defaultSelectedKey={"p0"}
                name="combobox"
            >
                <Label>ComboBox</Label>
                <ComboBoxInput />
            </FormComboBox>
            <Button type="submit">Submit</Button>
        </Form>,
    );

    const field = getByLabelText("ComboBox");
    await user.click(field);
    await user.clear(field);
    await user.type(field, "Urgent");

    expect(getByRole("listbox")).toBeInTheDocument();

    const options = getAllByRole("option");
    expect(options.length).toBe(1);
    await user.click(options[0]);

    const button = getByText("Submit");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalledWith(
        { combobox: "p0" },
        expect.anything(),
    );
});
