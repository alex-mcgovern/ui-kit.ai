import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { getListMockCountries } from "@boondoggle.design/mocks";
import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";

import { Icon } from "../../../../../src/icon";
import { Menu } from "../components/menu";

const meta = {
    component: Menu,
    title: "New/Menu",
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries(),
    },
};

export const SlotLeft: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries({ withSlotLeft: true }),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries({ withSlotRight: true }),
    },
};

export const SelectionSingle: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries(),
        selectionMode: "single",
    },
};

export const SelectionMultiple: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries(),
        selectionMode: "multiple",
    },
};

export const Sections: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries({ withSections: true }),
    },
};

export const SectionsSelectionSingle: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries({ withSections: true }),
        selectionMode: "single",
    },
};

export const SectionsSelectionMultiple: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries({ withSections: true }),
        selectionMode: "multiple",
    },
};

export const SectionsSelectionMultipleSlotLeft: Story = {
    args: {
        children: (
            <Button
                isSquare
                size={SizeVariant.MD}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faBars} />
            </Button>
        ),
        items: getListMockCountries({ withSections: true, withSlotLeft: true }),
        selectionMode: "multiple",
    },
};
