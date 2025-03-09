import type { Meta, StoryObj } from "@storybook/react";

import { Menu as IconMenu } from "lucide-react";
import { MenuTrigger } from "react-aria-components";

import { Button } from "../components/button";
import { Menu } from "../components/menu";
import { Popover } from "../components/popover";

import React from "react";

import type { OptionsSchema } from "../types/options";

import { getMockOptions } from "../mocks/options";
import type { ComponentProps } from "react";

type ArgsList = StoryArgsList<
    Omit<ComponentProps<typeof Popover>, "children">
>;

const STORIES = {
    "Flat list": {
        popoverProps: {},
        menuProps: {
            items: getMockOptions({ withIcon: true }),
        },
    },
    "With sections": {
        popoverProps: {},
        menuProps: {
            items: getMockOptions({
                withIcon: true,
                withSections: true,
            }),
        },
    },
    disabledKeys: {
        popoverProps: {},
        menuProps: {
            items: getMockOptions({
                withIcon: true,
                withSections: true,
            }),
            disabledKeys: ["france", "germany", "spain"],
        },
    },
    "Placement bottom right": {
        popoverProps: {
            placement: "bottom right",
        },
        menuProps: {
            items: getMockOptions({
                withIcon: true,
                withSections: true,
            }),
        },
    },
    "Placement top left": {
        popoverProps: {
            placement: "top left",
        },
        menuProps: {
            items: getMockOptions({
                withIcon: true,
                withSections: true,
            }),
        },
    },
} satisfies Record<
    string,
    {
        popoverProps: Omit<
            ComponentProps<typeof Popover>,
            "children"
        >;
        menuProps: ComponentProps<typeof Menu>;
    }
>;

const Template = (args: ComponentProps<typeof Menu>) => {
    return (
        <div>
            {Object.entries(STORIES).map(
                ([name, { menuProps, popoverProps }]) => {
                    return (
                        <div className="mb-4 grid grid-cols-[12rem_auto] items-center gap-4">
                            <div>{name}</div>

                            <MenuTrigger>
                                <Button
                                    className="px-2"
                                    isIcon
                                    variant="secondary"
                                >
                                    <IconMenu />
                                </Button>
                                <Popover {...popoverProps}>
                                    <Menu
                                        {...args}
                                        {...menuProps}
                                    />
                                </Popover>
                            </MenuTrigger>
                        </div>
                    );
                },
            )}
        </div>
    );
};

const meta = {
    component: Menu,
    title: "Components/Menu",
} satisfies Meta<typeof Menu<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: Template,
};
