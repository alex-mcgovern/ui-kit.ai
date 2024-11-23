import type { ComponentProps } from "react";

import clsx from "clsx";
import { ModalOverlay as RACModalOverlay } from "react-aria-components";

import { modalOverlayCSS } from "../styles/dialog-modal-overlay.css";

export const DialogModalOverlay = ({
    isDismissable = true,
    ...props
}: ComponentProps<typeof RACModalOverlay>) => {
    return (
        <RACModalOverlay
            {...props}
            className={clsx(modalOverlayCSS, props.className)}
            isDismissable={isDismissable}
        />
    );
};
