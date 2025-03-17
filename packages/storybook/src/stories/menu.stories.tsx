import type { Meta, StoryObj } from "@storybook/react";
import type { OptionsSchema } from "@ui-kit.ai/components";
import type { ComponentProps } from "react";

import { Button, Menu, MenuTrigger, Popover } from "@ui-kit.ai/components";
import { getMockOptions } from "@ui-kit.ai/mocks";
import { MenuIcon } from "lucide-react";
import React from "react";

function Template(args: ComponentProps<typeof Menu>) {
    return (
        <MenuTrigger>
            <Button className="px-2" isIcon variant="secondary">
                <MenuIcon />
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
