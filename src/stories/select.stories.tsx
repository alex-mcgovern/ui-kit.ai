import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import type { OptionsSchema } from "../types/options";

import { Select, SelectButton } from "../components/select";
import { Label } from "../components/label";
import { getMockOptions } from "../mocks/options";
import type { ComponentProps, ComponentType } from "react";
import { StoryArgsListTemplate, type StoryArgsList } from "../types/storybook";

type ArgsList = StoryArgsList<{
    Select: ComponentProps<typeof Select>;
    SelectButton?: Partial<ComponentProps<typeof SelectButton>>;
}>;

const ARGS_LIST: ArgsList = {
    "Flat list": {
        Select: {
            items: getMockOptions({ withIcon: true }),
        },
    },
    "With sections": {
        Select: {
            items: getMockOptions({ withIcon: true, withSections: true }),
        },
    },
    isInvalid: {
        Select: {
            items: getMockOptions({ withIcon: true, withSections: true }),
            isInvalid: true,
        },
    },
    isDisabled: {
        Select: {
            items: getMockOptions({ withIcon: true, withSections: true }),
            isDisabled: true,
        },
    },
    isBorderless: {
        Select: {
            items: getMockOptions({ withIcon: true, withSections: true }),
        },
        SelectButton: {
            isBorderless: true,
        },
    },
    disabledKeys: {
        Select: {
            items: getMockOptions({ withIcon: true, withSections: true }),
            disabledKeys: ["france", "germany", "spain"],
        },
    },
};

const meta = {
    args: {
        children: (
            <>
                <Label>Select</Label>
                <SelectButton />
            </>
        ),
        items: getMockOptions(),
    },
    component: Select,
    title: "Components/Select",
    subcomponents: {
        SelectButton: SelectButton as ComponentType<unknown>,
    },
} satisfies Meta<typeof Select<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => (
        <StoryArgsListTemplate<ComponentProps<typeof Select>, ArgsList>
            args={args}
            argsList={ARGS_LIST}
            renderComponent={({
                args,
                storyArgs: {
                    Select: selectArgs,
                    SelectButton: selectButtonArgs,
                },
            }) => (
                <>
                    <Select {...args} {...selectArgs}>
                        <SelectButton {...selectButtonArgs} />
                    </Select>
                </>
            )}
        />
    ),
};
