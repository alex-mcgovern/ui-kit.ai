import type { Meta, StoryObj } from "@storybook/react";

import { Menu as IconMenu } from "lucide-react";
import { MenuTrigger } from "react-aria-components";

import { Button } from "../components/button";
import { Menu } from "../components/menu";
import { Popover } from "../components/popover";
import { getMockOptions } from "../mocks/options";

const meta = {
    args: {},
    component: Menu,
    parameters: {
        layout: "centered",
    },
    render: (args) => (
        <MenuTrigger>
            <Button className="px-2" isIcon variant="secondary">
                <IconMenu />
            </Button>
            <Popover>
                <Menu {...args} />
            </Popover>
        </MenuTrigger>
    ),
    tags: ["autodocs"],
    title: "Menu",
} satisfies Meta<typeof Menu>;

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

export const PlacementBottomRight: Story = {
    args: {
        items: getMockOptions(),
    },
    render: (args) => (
        <MenuTrigger>
            <Button className="px-2" isIcon variant="secondary">
                <IconMenu />
            </Button>
            <Popover placement="bottom right">
                <Menu {...args} />
            </Popover>
        </MenuTrigger>
    ),
};

export const DisabledItems: Story = {
    args: {
        disabledKeys: ["france", "germany", "spain"],
        items: getMockOptions(),
    },
};
