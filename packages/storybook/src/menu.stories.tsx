import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Menu as IconMenu } from "lucide-react";
import React from "react";

import type { OptionsSchema } from "../types/options";

import { Button } from "@ui-kit.ai/components";
import { Menu, MenuTrigger } from "@ui-kit.ai/components";
import { Popover } from "@ui-kit.ai/components";
import { getMockOptions } from "../mocks/options";

function Template(args: ComponentProps<typeof Menu>) {
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
    render: Template,
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
        disabledKeys: ["france", "germany", "spain"],
        items: getMockOptions({
            withIcon: true,
            withSections: true,
        }),
    },
};
