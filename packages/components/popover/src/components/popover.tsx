import type { PopoverProps as RACPopoverProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Popover as RACPopover } from "react-aria-components";

import { popoverCSS as popover } from "../styles/popover.css";
import { popoverAnimation } from "../styles/popover-animation.css";

export const Popover = forwardRef<HTMLDivElement, RACPopoverProps>(
    (props, ref) => (
        <RACPopover
            {...props}
            className={clsx(popover, popoverAnimation, props.className)}
            ref={ref}
        />
    ),
);
