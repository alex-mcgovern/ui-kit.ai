import type { Button } from "@boondoggle.design/button";
import type { ComponentProps } from "react";

import { Color } from "@boondoggle.design/css-types";
import { SizeVariant } from "@boondoggle.design/css-types";
import { variantColorOverlay } from "@boondoggle.design/css-variants";
import clsx from "clsx";
import { Modal as RACModal } from "react-aria-components";

import { modalCSS } from "../styles/dialog-modal.css";
import { modalWidthRecipe } from "../styles/dialog-modal-width.css";

export const DialogModal = ({
    color = Color.RESET,
    isDismissable = true,
    width = SizeVariant.SM,
    ...props
}: ComponentProps<typeof RACModal> & {
    buttonProps?: ComponentProps<typeof Button>;
    color?: Color;
    width?: Exclude<SizeVariant, SizeVariant.XS>;
}) => {
    return (
        <RACModal
            {...props}
            className={clsx(
                modalCSS({ colorOverlay: color }),
                variantColorOverlay[color],
                modalWidthRecipe({ width }),
                props.className,
            )}
            isDismissable={isDismissable}
        />
    );
};
