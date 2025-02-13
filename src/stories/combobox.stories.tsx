import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import type { OptionsSchema } from "../types/options";

import { Button } from "../components/button";
import {
    ComboBox,
    ComboBoxButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combobox";
import { Form } from "../components/form";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";

const meta = {
    args: {
        children: (
            <>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                </ComboBoxFieldGroup>
            </>
        ),
        items: getMockOptions(),
    },
    component: ComboBox,
    decorators: [
        (Story) => (
            <div style={{ width: "300px" }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    title: "ComboBox",
} satisfies Meta<typeof ComboBox<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlatList: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        items: getMockOptions(),
    },
};

export const FlatListIcons: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        items: getMockOptions({ withIcon: true }),
    },
};

export const WithSections: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        items: getMockOptions({ withSections: true }),
    },
};

export const WithSectionsIcons: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        items: getMockOptions({ withIcon: true, withSections: true }),
    },
};

export const IsInvalid: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox (invalid)</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
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
                <Label>ComboBox (disabled)</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        isDisabled: true,
        items: getMockOptions(),
    },
};

export const IsBorderless: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox (borderless)</Label>

                <ComboBoxFieldGroup isBorderless>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        items: getMockOptions(),
    },
};

export const DisabledItems: Story = {
    args: {
        children: (
            <>
                <Label>ComboBox (with disabled items)</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </>
        ),
        disabledKeys: ["mint"],
        items: getMockOptions(),
    },
};

export const Validation: Story = {
    args: {
        isRequired: true,
    },
    render: (args) => (
        <Form className="flex flex-col items-start gap-2">
            <ComboBox {...args}>
                <ComboBoxFieldGroup>
                    <ComboBoxInput isBorderless />
                </ComboBoxFieldGroup>
            </ComboBox>
            <Button type="submit" variant="secondary">
                Submit
            </Button>
        </Form>
    ),
};
