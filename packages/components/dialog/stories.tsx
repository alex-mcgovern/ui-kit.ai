import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { Color, SizeVariant } from "@boondoggle.design/css-types";
import { faker } from "@faker-js/faker";

import { V2Dialog as StoryComp } from ".";
import { css } from "../../../src/css/index.css";
import { V2DialogAlert } from "../../../src/dialog-alert";
import { V2DialogErrorMessage } from "../../../src/dialog-error-message";
import { DialogCloseButton } from "./components/dialog-close-button";
import { DialogContent } from "./components/dialog-content";
import { DialogFooter } from "./components/dialog-footer";
import { DialogHeader } from "./components/dialog-header";
import { DialogTitle } from "./components/dialog-title";

const meta = {
    args: {
        buttonProps: {
            children: "Open Dialog",
        },
        children: ({ close }) => (
            <>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogCloseButton />
                </DialogHeader>
                <DialogContent>
                    <>
                        <p>
                            A modal dialog component powered by{" "}
                            <a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
                                React Aria Components
                            </a>
                        </p>
                        {Array.from({ length: 10 }, () => {
                            return (
                                <p key={faker.string.alphanumeric(4)}>
                                    {faker.lorem.paragraphs(1)}
                                </p>
                            );
                        })}
                    </>
                </DialogContent>
                <DialogFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </>
        ),
    },
    component: StoryComp,
    title: "New/Dialog",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WidthSm: Story = {
    args: {
        width: SizeVariant.SM,
    },
};

export const WidthLg: Story = {
    args: {
        width: SizeVariant.LG,
    },
};

export const WithDialogErrorMessage: Story = {
    args: {
        children: ({ close }) => (
            <>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogCloseButton />
                </DialogHeader>
                <V2DialogErrorMessage
                    error={{ message: "This is an error message" }}
                    onPressCancel={close}
                    onPressTryAgain={close}
                    strCancel="Cancel"
                    strTryAgain="Try Again"
                />
            </>
        ),
        colorOverlay: Color.RED,
        dialogTriggerProps: {
            defaultOpen: true,
        },
    },
};

export const WithDialogAlert: Story = {
    args: {
        children: ({ close }) => (
            <>
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogCloseButton />
                </DialogHeader>
                <V2DialogAlert
                    colorOverlay="red"
                    description="This is a description for the alert"
                    title="This is an alert"
                />
                <DialogContent>
                    <>
                        <p>
                            A modal dialog component powered by{" "}
                            <a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
                                React Aria Components
                            </a>
                        </p>
                        {Array.from({ length: 10 }, () => {
                            return (
                                <p key={faker.string.alphanumeric(4)}>
                                    {faker.lorem.paragraphs(1)}
                                </p>
                            );
                        })}
                    </>
                </DialogContent>
                <DialogFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </>
        ),
        dialogTriggerProps: {
            defaultOpen: true,
        },
    },
};
