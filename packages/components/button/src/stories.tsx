import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { css } from "../../../../src/css/index.css";
import { Icon } from "../../../../src/icon";
import { Button } from "./components/button";

const meta = {
    args: {
        children: "Button",
    },
    component: Button,
    title: "New/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const SizeTemplate = (args: ComponentProps<typeof Button>) => (
    <>
        <div
            className={css({
                alignItems: "center",
                display: "flex",
                gap: "space_2",
                marginBottom: "space_2",
            })}
        >
            {Object.values(SizeVariant).map((size) => (
                <Button
                    key={size}
                    {...args}
                    size={size}
                />
            ))}
        </div>
        <div
            className={css({
                alignItems: "center",
                display: "flex",
                gap: "space_2",
            })}
        >
            {Object.values(SizeVariant).map((size) => (
                <Button
                    key={size}
                    {...args}
                    isSquare
                    size={size}
                >
                    <Icon icon={faShapes} />
                </Button>
            ))}
        </div>
    </>
);

export const Primary: Story = {
    args: {
        variant: ButtonVariant.PRIMARY,
    },
    render: SizeTemplate,
};

export const Secondary: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
    render: SizeTemplate,
};

export const Ghost: Story = {
    args: {
        variant: ButtonVariant.GHOST,
    },
    render: SizeTemplate,
};

export const SlotLeft: Story = {
    args: {
        children: (
            <>
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
                Button
            </>
        ),
    },
};

export const SlotRight: Story = {
    args: {
        children: (
            <>
                Button
                <Icon
                    data-slot="left"
                    icon={faShapes}
                />
            </>
        ),
    },
};
