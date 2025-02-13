import type { Meta, StoryObj } from "@storybook/react";
import type { SelectRenderProps } from "react-aria-components";

import { Button } from "../components/button";
import { Form } from "../components/form";
import { Label } from "../components/label";
import { Select, SelectButton } from "../components/select";
import { getMockOptions } from "../mocks/options";

const meta: Meta<typeof Select> = {
    component: Select,
    decorators: [
        (Story) => (
            <div style={{ width: "400px" }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
    render: (args) => <Select {...args}></Select>,
    tags: ["autodocs"],
    title: "Select",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FlatList: Story = {
    args: {
        items: getMockOptions(),
    },
};

export const FlatListIcons: Story = {
    args: {
        items: getMockOptions({ withIcon: true }),
    },
};

export const WithSections: Story = {
    args: {
        items: getMockOptions({ withSections: true }),
    },
};

export const WithSectionsIcons: Story = {
    args: {
        items: getMockOptions({ withIcon: true, withSections: true }),
    },
};

export const IsBorderless: Story = {
    args: {
        children: (rp: SelectRenderProps) => (
            <SelectButton {...rp} isBorderless />
        ),
        items: getMockOptions(),
    },
};

export const IsInvalid: Story = {
    args: {
        children: (
            <>
                <Label>Select (invalid)</Label>
                <SelectButton />
            </>
        ),
        isInvalid: true,
        items: getMockOptions(),
    },
};

export const IsDisabled: Story = {
    args: {
        children: (
            <>
                <Label>Select (disabled)</Label>
                <SelectButton />
            </>
        ),
        isDisabled: true,
        items: getMockOptions(),
    },
};

export const DisabledItems: Story = {
    args: {
        children: (
            <>
                <Label>Select (disabled items)</Label>
                <SelectButton />
            </>
        ),
        disabledKeys: ["france", "germany", "spain"],
        items: getMockOptions(),
    },
};

export const Validation: Story = {
    args: {
        isRequired: true,
        items: getMockOptions(),
    },
    render: (args) => (
        <Form className="flex flex-col items-start gap-2">
            <Select {...args} />
            <Button type="submit" variant="secondary">
                Submit
            </Button>
        </Form>
    ),
};
