import type { ComponentProps, ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Star as IconStar } from "lucide-react";

import { Button } from "../components/button";

const meta = {
    component: Button,
    title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

type Variant = Exclude<ComponentProps<typeof Button>["variant"], undefined>;

const VARIANTS = {
    primary: "Primary",
    secondary: "Secondary",
    tertiary: "Tertiary",
} as const satisfies Record<Variant, string>;

const Template = (args: ComponentProps<typeof Button>) => (
    <div className="flex items-center gap-2">
        {Object.entries(VARIANTS).map(([variant, variantName]) => (
            <Button {...args} variant={variant as Variant} key={variant}>
                {args.children ?? variantName}
            </Button>
        ))}
    </div>
);

export const variant: Story = {
    args: {},
    render: Template,
};
export const isDestructive: Story = {
    args: {
        isDestructive: true,
    },
    render: Template,
};
export const isDisabled: Story = {
    args: {
        isDisabled: true,
    },
    render: Template,
};
export const isDestructiveIsDisabled: Story = {
    args: {
        isDestructive: true,
        isDisabled: true,
    },
    render: Template,
};
export const isIcon: Story = {
    args: {
        isIcon: true,
        children: <IconStar />,
        "aria-label": "button",
    },
    render: Template,
};
export const slotLeft: Story = {
    args: {
        slotLeft: <IconStar />,
    },
    render: Template,
};
export const slotRight: Story = {
    args: {
        slotRight: <IconStar />,
    },
    render: Template,
};
