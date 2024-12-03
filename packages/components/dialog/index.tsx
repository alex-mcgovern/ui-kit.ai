import type { Color } from "@boondoggle.design/css-types";
import type { ComponentProps } from "react";
import type { DialogProps as RACDialogProps } from "react-aria-components";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
import {
    Dialog as RACDialog,
    DialogTrigger as RACDialogTrigger,
    Heading as RACHeading,
} from "react-aria-components";

import { css } from "../../../src/css/index.css";
import { Icon } from "../../../src/icon";
import { DialogModal } from "./components/dialog-modal";
import { DialogModalOverlay } from "./components/dialog-modal-overlay";
import {
    dialogCSS,
    dialogHeaderCSS,
    dialogModalCSS,
    dialogTitleCSS,
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
                size={SizeVariant.SM}
                type="button"
                variant={ButtonVariant.GHOST}
            >
                <Icon icon={faTimes} />
            </Button>
        </header>
    );
};

export const V2Dialog = ({
    buttonProps,
    children,
    colorOverlay,
    dialogTriggerProps,
    width = SizeVariant.SM,
}: {
    buttonProps?: ComponentProps<typeof Button>;
    children: ComponentProps<typeof RACDialog>["children"];
    colorOverlay?: Color;
    dialogTriggerProps?: Omit<
        ComponentProps<typeof RACDialogTrigger>,
        "children"
    >;
    width?: Exclude<SizeVariant, SizeVariant.XS>;
}) => {
    return (
        <RACDialogTrigger {...dialogTriggerProps}>
            {buttonProps ? <Button {...buttonProps} /> : null}
            <DialogModalOverlay>
                <DialogModal
                    color={colorOverlay}
                    width={width}
                >
                    <Dialog className={dialogModalCSS}>{children}</Dialog>
                </DialogModal>
            </DialogModalOverlay>
        </RACDialogTrigger>
    );
};
