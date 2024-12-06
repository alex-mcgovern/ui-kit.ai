import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { getListMockCountries } from "@boondoggle.design/mocks";
import { faBars } from "@fortawesome/pro-solid-svg-icons/faBars";

import { Icon } from "../../../../../src/icon";
import { Menu } from "../components/menu";

const meta = {
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
    component: Menu,
    title: "New/Menu/Placement",
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
    args: {
        placement: "bottom",
    },
};
export const BottomEnd: Story = {
    args: {
        placement: "bottom end",
    },
};
export const BottomLeft: Story = {
    args: {
        placement: "bottom left",
    },
};
export const BottomRight: Story = {
    args: {
        placement: "bottom right",
    },
};
export const BottomStart: Story = {
    args: {
        placement: "bottom start",
    },
};
export const End: Story = {
    args: {
        placement: "end",
    },
};
export const EndBottom: Story = {
    args: {
        placement: "end bottom",
    },
};
export const EndTop: Story = {
    args: {
        placement: "end top",
    },
};
export const Left: Story = {
    args: {
        placement: "left",
    },
};
export const LeftBottom: Story = {
    args: {
        placement: "left bottom",
    },
};
export const LeftTop: Story = {
    args: {
        placement: "left top",
    },
};
export const Right: Story = {
    args: {
        placement: "right",
    },
};
export const RightBottom: Story = {
    args: {
        placement: "right bottom",
    },
};
export const RightTop: Story = {
    args: {
        placement: "right top",
    },
};
export const Start: Story = {
    args: {
        placement: "start",
    },
};
export const StartBottom: Story = {
    args: {
        placement: "start bottom",
    },
};
export const StartTop: Story = {
    args: {
        placement: "start top",
    },
};
export const Top: Story = {
    args: {
        placement: "top",
    },
};
export const TopEnd: Story = {
    args: {
        placement: "top end",
    },
};
export const TopLeft: Story = {
    args: {
        placement: "top left",
    },
};
export const TopRight: Story = {
    args: {
        placement: "top right",
    },
};
export const TopStart: Story = {
    args: {
        placement: "top start",
    },
};
