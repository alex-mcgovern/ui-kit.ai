import type { ComponentProps, ReactNode } from "react";
import type { DialogProps as RACDialogProps } from "react-aria-components";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, Size } from "@boondoggle.design/css-types";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
import {
    Dialog as RACDialog,
    DialogTrigger as RACDialogTrigger,
    Heading as RACHeading,
    Modal as RACModal,
    ModalOverlay as RACModalOverlay,
} from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import { css } from "../css/index.css";
import { Icon } from "../icon";
import {
    dialogCSS,
    dialogContentCSS,
    dialogFooterCSS,
    dialogHeaderCSS,
    dialogModalCSS,
    dialogTitleCSS,
    modalCSS,
    modalOverlayCSS,
} from "./styles.css";

/** -----------------------------------------------------------------------------
 * Dialog
 * ------------------------------------------------------------------------------- */

export type DialogProps = RACDialogProps;

export const Dialog = (props: DialogProps) => {
    return (
        <RACDialog
            {...props}
            className={clsx(props.className, dialogCSS)}
        />
    );
};

/** -----------------------------------------------------------------------------
 * DialogHeader
 * ------------------------------------------------------------------------------- */

export const V2DialogHeader = ({
    close,
    title,
}: {
    close: () => void;
    title: string;
}) => {
    return (
        <header className={dialogHeaderCSS}>
            <RACHeading
                className={dialogTitleCSS}
                slot="title"
            >
                {title}
            </RACHeading>

            <Button
                aria-label="Close"
                className={css({
                    marginLeft: "auto",
                })}
                name="close"
                onPress={close}
                size={Size.SM}
                type="button"
                variant={ButtonVariant.GHOST}
            >
                <Icon icon={faTimes} />
            </Button>
        </header>
    );
};

/**
 * Wrapper to render scrollable content within the dialog.
 */
export const V2ScrollableDialogContent = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <div className={dialogContentCSS}>{children}</div>;
};

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export const V2DialogFooter = ({ children }: { children: ReactNode }) => {
    return <footer className={dialogFooterCSS}>{children}</footer>;
};

export const V2Dialog = ({
    buttonProps,
    children,
    colorOverlay,
    dialogTriggerProps,
    modalOverlayProps,
    modalProps,
    width = "sm",
}: {
    buttonProps?: ComponentProps<typeof Button>;
    children: ComponentProps<typeof RACDialog>["children"];
    colorOverlay?: ColorOverlay;
    dialogTriggerProps?: Omit<
        ComponentProps<typeof RACDialogTrigger>,
        "children"
    >;
    modalOverlayProps?: Omit<
        ComponentProps<typeof RACModalOverlay>,
        "className"
    >;
    modalProps?: Omit<ComponentProps<typeof RACModal>, "className">;
    width?: "lg" | "sm";
}) => {
    return (
        <RACDialogTrigger {...dialogTriggerProps}>
            {buttonProps ? <Button {...buttonProps} /> : null}
            <RACModalOverlay
                className={modalOverlayCSS}
                {...modalOverlayProps}
            >
                <RACModal
                    className={modalCSS({ colorOverlay, width })}
                    {...modalProps}
                >
                    <Dialog className={dialogModalCSS}>{children}</Dialog>
                </RACModal>
            </RACModalOverlay>
        </RACDialogTrigger>
    );
};
