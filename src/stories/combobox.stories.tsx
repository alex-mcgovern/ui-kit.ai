import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import type { OptionsSchema } from "../types/options";

import {
    ComboBox,
    ComboBoxButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combobox";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";
import type { ComponentProps } from "react";

const STORIES = {
    "Flat list": {
        items: getMockOptions({ withIcon: true }),
    },
    "With sections": {
        items: getMockOptions({ withIcon: true, withSections: true }),
    },
    isInvalid: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        isInvalid: true,
    },
    isDisabled: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        isDisabled: true,
    },
    isBorderless: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        isDisabled: true,
    },
    disabledKeys: {
        items: getMockOptions({ withIcon: true, withSections: true }),
        disabledKeys: ["france", "germany", "spain"],
    },
} satisfies Record<string, ComponentProps<typeof ComboBox>>;

const Template = (args: ComponentProps<typeof ComboBox>) => {
    return (
        <div>
            {Object.entries(STORIES).map(([name, story]) => {
                return (
                    <div className="mb-4 grid grid-cols-[10rem_auto] items-center gap-4">
                        <div className="mt-4">{name}</div>

                        <ComboBox {...args} {...story} />
                    </div>
                );
            })}
        </div>
    );
};

const meta = {
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
    component: ComboBox,
    title: "Components/ComboBox",
} satisfies Meta<typeof ComboBox<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: Template,
};
