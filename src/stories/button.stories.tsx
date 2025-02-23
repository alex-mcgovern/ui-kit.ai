import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Star as IconStar, StarIcon } from "lucide-react";

import { Button } from "../components/button";

export function Example(
    args: ComponentProps<typeof Button>,
) {
    return (
        <Button {...args} variant="primary">
            Button
        </Button>
    );
}

const meta = {
    component: Button,
    title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

type Variant = Exclude<
    ComponentProps<typeof Button>["variant"],
    undefined
>;

export const example: Story = {
    args: {},
    // render: () => (
    //     <div className="flex flex-col justify-center gap-1">
    //         <div className="px-2 py-1">
    //             <Example />
    //         </div>
    //         <div className="px-2 py-1">
    //             <Example isDisabled />
    //         </div>
    //         <div className="px-2 py-1">
    //             <Example isDestructive />
    //         </div>
    //         <div className="px-2 py-1">
    //             <Example slotLeft={<StarIcon />} />
    //         </div>
    //         <div className="px-2 py-1">
    //             <Example slotRight={<StarIcon />} />
    //         </div>
    //         <div className="px-2 py-1">
    //             <Example isIcon>
    //                 <StarIcon />
    //             </Example>
    //         </div>
    //         <div className="rounded-lg bg-gray-900 px-2 py-2">
    //             <Example isInverted />
    //         </div>
    //         <div className="rounded-lg bg-red-700 px-2 py-2">
    //             <Example isDestructive isInverted />
    //         </div>
    //     </div>
    // ),
    render: Example,
};
export const variant: Story = {
    args: {},
    render: Example,
};
export const isDestructive: Story = {
    args: {
        isDestructive: true,
    },
    render: Example,
};
export const isDisabled: Story = {
    args: {
        isDisabled: true,
    },
    render: Example,
};
export const isDestructiveIsDisabled: Story = {
    args: {
        isDestructive: true,
        isDisabled: true,
    },
    render: Example,
};
export const isIcon: Story = {
    args: {
        isIcon: true,
        children: <IconStar />,
        "aria-label": "button",
    },
    render: Example,
};
export const slotLeft: Story = {
    args: {
        slotLeft: <IconStar />,
    },
    render: Example,
};
export const slotRight: Story = {
    args: {
        slotRight: <IconStar />,
    },
    render: Example,
};
