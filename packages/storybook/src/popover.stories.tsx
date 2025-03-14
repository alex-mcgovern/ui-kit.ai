import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Button } from "@ui-kit.ai/components";
import { DialogTrigger } from "@ui-kit.ai/components";
import { Heading } from "@ui-kit.ai/components";
import {
    Popover,
    PopoverDialog,
} from "@ui-kit.ai/components";

type Placement = ComponentProps<
    typeof Popover
>["placement"];

const PLACEMENTS = [
    "bottom",
    "bottom left",
    "bottom right",
    "top",
    "top left",
    "top right",
    "left",
    "left top",
    "left bottom",
    "right",
    "right top",
    "right bottom",
] satisfies Placement[];

function PlacementTemplate(
    args: ComponentProps<typeof Popover>,
) {
    return PLACEMENTS.map((placement) => (
        <DialogTrigger>
            <Button>{placement}</Button>
            <Popover {...args} placement={placement} />
        </DialogTrigger>
    ));
}

function Template(args: ComponentProps<typeof Popover>) {
    return (
        <DialogTrigger>
            <Button>Show popover</Button>
            <Popover {...args} />
        </DialogTrigger>
    );
}

const meta = {
    args: {
        children: (
            <PopoverDialog>
                <Heading
                    className="mb-2 text-base"
                    level={3}
                    slot="title"
                >
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please
                    contact support.
                </p>
            </PopoverDialog>
        ),
    },
    component: Popover,
    render: Template,
    title: "Components/Popover",
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/**
 * react-aria supports a pretty comprehensive range of placement options, some
 * of which are shown here. It is important to note that the Popover may flip
 * when it detects a collision with a parent or window edge.
 */
export const Placement: Story = {
    decorators: [
        (Story) => (
            <div className="grid grid-cols-3 gap-2">
                <Story />
            </div>
        ),
    ],
    // @ts-expect-error - coerce ReactNode[] where ReactNode expected
    render: PlacementTemplate,
};
