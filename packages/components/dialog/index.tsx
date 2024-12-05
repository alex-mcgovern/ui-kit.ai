import type { Color } from "@boondoggle.design/css-types";
import type { ComponentProps } from "react";
import type { DialogProps as RACDialogProps } from "react-aria-components";

import { Button } from "@boondoggle.design/button";
import { SizeVariant } from "@boondoggle.design/css-types";
import clsx from "clsx";
import {
    Dialog as RACDialog,
    DialogTrigger as RACDialogTrigger,
} from "react-aria-components";

import { DialogModal } from "./components/dialog-modal";
import { DialogModalOverlay } from "./components/dialog-modal-overlay";
import { dialogCSS, dialogModalCSS } from "./styles.css";

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
