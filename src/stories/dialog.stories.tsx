import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";

import { faker } from "@faker-js/faker";

import { Button } from "../components/button";
import {
    Dialog,
    DialogCloseButton,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/dialog";

const LongContent = () => (
    <>
        <p className="mb-2">
            A modal dialog component powered by{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/Dialoghtml">
                React Aria Components
            </a>
        </p>
        {Array.from({ length: 10 }, () => {
            return (
                <p
                    className="mb-2"
                    key={faker.string.alphanumeric(4)}
                >
                    {faker.lorem.paragraphs(1)}
                </p>
            );
        })}
    </>
);

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    decorators: [
        (Story) => {
            return (
                <div>
                    <Story />
                    <div
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)",
                            backgroundSize: "100px 100px",
                            inset: 0,
                            position: "absolute",
                            zIndex: -1,
                        }}
                    />
                </div>
            );
        },
    ],
    render: (props) => (
        <DialogTrigger>
            <Button>Open dialog</Button>
            <Dialog {...props}>
                {({ close }) => {
                    return (
                        <>
                            <DialogHeader>
                                <DialogTitle>
                                    Hello there
                                </DialogTitle>
                                <DialogCloseButton />
                            </DialogHeader>

                            <DialogContent>
                                <LongContent />
                            </DialogContent>

                            <DialogFooter>
                                <Button
                                    className="ml-auto"
                                    onPress={() => close()}
                                    variant="secondary"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onPress={() => {
                                        alert("Confirmed");
                                        close();
                                    }}
                                    type="submit"
                                >
                                    Confirm
                                </Button>
                            </DialogFooter>
                        </>
                    );
                }}
            </Dialog>
        </DialogTrigger>
    ),
    // Storybook's typescript is a bit sh*t, hence the type-casting
    subcomponents: {
        DialogCloseButton:
            DialogCloseButton as ComponentType<unknown>,
        DialogContent:
            DialogContent as ComponentType<unknown>,
        DialogFooter:
            DialogFooter as ComponentType<unknown>,
        DialogHeader:
            DialogHeader as ComponentType<unknown>,
        DialogTitle: DialogTitle as ComponentType<unknown>,
        DialogTrigger:
            DialogTrigger as ComponentType<unknown>,
    },
    title: "Components/Dialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>
                            Hello there
                        </DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
    },
};

export const WidthMd: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>
                            Hello there
                        </DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
        width: "md",
    },
};

export const WidthLg: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>
                            Hello there
                        </DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
        width: "lg",
    },
};
