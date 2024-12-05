import type { ButtonProps } from "@boondoggle.design/button";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import clsx from "clsx";
import { useContext } from "react";
import { OverlayTriggerStateContext } from "react-aria-components";

import { Icon } from "../../../../src/icon";
import { dialogCloseButtonStyle } from "../styles/dialog-close-button.css";

export const DialogCloseButton = ({
    "aria-label": ariaLabel = "Close dialog",
    children = <Icon icon={faTimes} />,
    size = SizeVariant.SM,
    variant = ButtonVariant.GHOST,
    ...props
}: Omit<ButtonProps, "slot">) => {
    const state = useContext(OverlayTriggerStateContext);

    return (
        <Button
            {...props}
            aria-label={ariaLabel}
            className={clsx(dialogCloseButtonStyle, props.className)}
            onPress={(e) => {
                props.onPress?.(e);
                state?.close();
            }}
            size={size}
            variant={variant}
        >
            {children}
        </Button>
    );
};
