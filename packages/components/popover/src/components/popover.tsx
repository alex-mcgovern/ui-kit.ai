import type { PopoverProps as RACPopoverProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Popover as RACPopover } from "react-aria-components";

import { popoverCSS as popover } from "../styles/popover.css";
import { popoverAnimation } from "../styles/popover-animation.css";
import { popoverTransformOriginStyle } from "../styles/popover-transform-origin.css";

export const Popover = forwardRef<HTMLDivElement, RACPopoverProps>(
    ({ placement, ...props }, ref) => (
        <RACPopover
            {...props}
            className={clsx(
                popover,
                popoverAnimation,
                popoverTransformOriginStyle,
                props.className,
            )}
            data-placement-axis={placement}
            placement={placement}
            ref={ref}
        />
    ),
);
