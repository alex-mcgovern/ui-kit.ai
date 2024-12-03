import type { OverlayArrowProps as RACOverlayArrowProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { OverlayArrow as RACOverlayArrow } from "react-aria-components";

import {
    overlayArrow,
    overlayArrowSvg,
} from "../styles/popover-overlay-arrow.css";

export const PopoverOverlayArrow = forwardRef<
    HTMLDivElement,
    RACOverlayArrowProps
>((props, ref) => {
    return (
        <RACOverlayArrow
            {...props}
            className={clsx(overlayArrow, props.className)}
            ref={ref}
        >
            <svg
                className={overlayArrowSvg}
                viewBox="0 0 12 12"
            >
                <path d="M0 0 L6 6 L12 0" />
            </svg>
        </RACOverlayArrow>
    );
});
