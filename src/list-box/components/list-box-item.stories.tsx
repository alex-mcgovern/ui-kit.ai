import type { Meta, StoryObj } from "@storybook/react";

import { faAppleWhole, faBanana } from "@fortawesome/pro-duotone-svg-icons";
import { faShapes } from "@fortawesome/pro-duotone-svg-icons/faShapes";
import { ListBox } from "react-aria-components";

import { Icon } from "../../icon";
import { ListBoxItem } from "./list-box-item";

const meta = {
    args: {},
    component: ListBoxItem,
    decorators: [
        (Story) => {
            return (
                <div style={{ width: 200 }}>
                    <Story />
                </div>
            );
        },
    ],
    title: "ListBoxItem",
} satisfies Meta<typeof ListBoxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        description: "lol",
        id: "lol",
        textValue: "Blah",
    },
    render: (args) => {
        return (
            <ListBox>
                <ListBoxItem {...args} />
            </ListBox>
        );
    },
};

export const LongDescription: Story = {
    args: {
        description: "Ut enim ad minim veniam, quis nostrud exercitation.",
        id: "lol",
        textValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    render: (args) => {
        return (
            <ListBox onAction={(v) => alert(v)}>
                <ListBoxItem {...args} />
            </ListBox>
        );
    },
};

export const WithIcon: Story = {
    args: {
        icon: <Icon icon={faAppleWhole} />,
        id: "apple",
        textValue: "Apple",
    },
    render: (args) => {
        return (
            <ListBox>
                <ListBoxItem {...args} />
            </ListBox>
        );
    },
};

export const WithIconDescription: Story = {
    args: {
        description: "Rich in potassium and fiber.",
        icon: <Icon icon={faBanana} />,
        id: "lol",
        textValue: "Banana",
    },
    render: (args) => {
        return (
            <ListBox>
                <ListBoxItem {...args} />
            </ListBox>
        );
    },
};

export const InGroupWithIcon: Story = {
    args: {
        description: "lol",
        id: "lol",
        textValue: "Blah",
    },
    decorators: [
        (Story) => (
            <>
                <Story />
                <div style={{ marginTop: 8 }}>
                    Note: When 1 item has an icon, they should all be offset.
                </div>
            </>
        ),
    ],
    render: () => {
        return (
            <ListBox>
                <ListBoxItem textValue="Apples" />
                <ListBoxItem
                    icon={<Icon icon={faShapes} />}
                    textValue="Bananas"
                />
                <ListBoxItem textValue="Oranges" />
            </ListBox>
        );
    },
};

export const SelectionModeSingle: Story = {
    args: {
        description: "lol",
        id: "lol",
        textValue: "Blah",
    },
    render: (args) => {
        return (
            <ListBox selectionMode="single">
                <ListBoxItem {...args} />
            </ListBox>
        );
    },
};

export const SelectionModeMultiple: Story = {
    args: {
        description: "lol",
        id: "lol",
        textValue: "Blah",
    },
    render: (args) => {
        return (
            <ListBox selectionMode="multiple">
                <ListBoxItem {...args} />
            </ListBox>
        );
    },
};
