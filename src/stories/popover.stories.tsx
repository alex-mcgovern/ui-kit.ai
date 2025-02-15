import type { Meta, StoryObj } from "@storybook/react";

import { HelpCircle as IconHelpCircle } from "lucide-react";

import { Button } from "../components/button";
import { DialogTrigger } from "../components/dialog";
import { Heading } from "../components/heading";
import { Popover, PopoverDialog } from "../components/popover";
import type { ComponentProps } from "react";
import { StoryArgsListTemplate, type StoryArgsList } from "../types/storybook";

type ArgsList = StoryArgsList<Omit<ComponentProps<typeof Popover>, "children">>;

const ARGS_LIST: ArgsList = {
    "Placement bottom right": {
        placement: "bottom right",
    },
    "Placement top left": {
        placement: "top left",
    },
    "Show arrow bottom right": {
        placement: "bottom right",
        showArrow: true,
    },
    "Show arrow top left": {
        placement: "top left",
        showArrow: true,
    },
};

const Template = (args: ComponentProps<typeof Popover>) => {
    return (
        <div>
            {Object.entries(STORIES).map(([name, props]) => {
                return (
                    <div className="mb-4 grid grid-cols-[12rem_14rem] items-center gap-4">
                        <div>{name}</div>
                        <DialogTrigger>
                            <Button aria-label="Help" isIcon variant="tertiary">
                                <IconHelpCircle className="size-4" />
                            </Button>
                            <Popover {...args} {...props} />
                        </DialogTrigger>
                    </div>
                );
            })}
        </div>
    );
};

const meta = {
    component: Popover,
    title: "Components/Popover",
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <PopoverDialog>
                <Heading className="mb-2 text-base" level={3} slot="title">
                    Help
                </Heading>
                <p className="text-sm">
                    For help accessing your account, please contact support.
                </p>
            </PopoverDialog>
        ),
    },
    render: (args) => (
        <StoryArgsListTemplate<ComponentProps<typeof Popover>, ArgsList>
            args={args}
            argsList={ARGS_LIST}
            renderComponent={({ args, storyArgs }) => (
                <>
                    <DialogTrigger>
                        <Button aria-label="Help" isIcon variant="tertiary">
                            <IconHelpCircle className="size-4" />
                        </Button>
                        <Popover {...args} {...storyArgs} />
                    </DialogTrigger>
                </>
            )}
        />
    ),
};
