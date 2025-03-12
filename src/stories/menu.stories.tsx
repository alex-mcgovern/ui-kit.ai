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

export function Example(args: ComponentProps<typeof Menu>) {
    return (
        <MenuTrigger>
            <Button
                className="px-2"
                isIcon
                variant="secondary"
            >
                <IconMenu />
            </Button>
            <Popover>
                <Menu {...args} />
            </Popover>
        </MenuTrigger>
    );
}

const meta = {
    component: Menu,
    title: "Components/Menu",
} satisfies Meta<typeof Menu<OptionsSchema<"listbox">>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: false,
        }),
    },
    render: Example,
};

export const WithSections: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
export const DisabledKeys: Story = {
    args: {
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
        disabledKeys: ["france", "germany", "spain"],
    },
};
