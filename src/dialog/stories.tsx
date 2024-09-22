import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { faker } from "@faker-js/faker";

import {
    V2Dialog as StoryComp,
    V2DialogFooter,
    V2DialogHeader,
    V2ScrollableDialogContent,
} from ".";
import { css } from "../css/index.css";
import { V2DialogAlert } from "../dialog-alert";
import { V2DialogErrorMessage } from "../dialog-error-message";

const meta = {
    args: {
        buttonProps: {
            children: "Open Dialog",
        },
        children: ({ close }) => (
            <>
                <V2DialogHeader
                    close={close}
                    title="Dialog Title"
                />
                <V2ScrollableDialogContent>
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
                </V2ScrollableDialogContent>
                <V2DialogFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </V2DialogFooter>
            </>
        ),
        modalOverlayProps: {
            isDismissable: true,
        },
    },
    component: StoryComp,
    title: "Dialog",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WidthSm: Story = {
    args: {
        width: "sm",
    },
};

export const WidthLg: Story = {
    args: {
        width: "lg",
    },
};

export const WithDialogErrorMessage: Story = {
    args: {
        children: ({ close }) => (
            <>
                <V2DialogHeader
                    close={close}
                    title="Dialog Title"
                />
                <V2DialogErrorMessage
                    error={{ message: "This is an error message" }}
                    onPressCancel={close}
                    onPressTryAgain={close}
                    strCancel="Cancel"
                    strTryAgain="Try Again"
                />
            </>
        ),
        colorOverlay: "red",
        dialogTriggerProps: {
            defaultOpen: true,
        },
    },
};

export const WithDialogAlert: Story = {
    args: {
        children: ({ close }) => (
            <>
                <V2DialogHeader
                    close={close}
                    title="Dialog Title"
                />
                <V2DialogAlert
                    colorOverlay="red"
                    description="This is a description for the alert"
                    title="This is an alert"
                />
                <V2ScrollableDialogContent>
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
                </V2ScrollableDialogContent>
                <V2DialogFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </V2DialogFooter>
            </>
        ),
        dialogTriggerProps: {
            defaultOpen: true,
        },
    },
};
