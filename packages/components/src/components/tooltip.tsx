import type {
    TooltipProps as RACTooltipProps,
    TooltipTriggerComponentProps as RACTooltipTriggerProps,
} from "react-aria-components";

import { Info as InfoIcon } from "lucide-react";
import { type ComponentProps, type ForwardedRef } from "react";
import {
    composeRenderProps,
    OverlayArrow,
    Tooltip as RACTooltip,
    TooltipTrigger as RACTooltipTrigger,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { Button } from "./button";

interface TooltipProps extends Omit<RACTooltipProps, "children"> {
    children: React.ReactNode;
}

const tooltipStyles = tv({
    base: [
        [
            "inline-flex items-center gap-1",
            "px-2 py-1",
            "text-sm font-medium",
            "bg-muted-800 text-muted-50",
            "group rounded drop-shadow-lg",
            // transition
            "transition-all will-change-transform",
            "translate-y-0",
            "translate-x-0",
            // transform origin
            "[--origin-x:0]",
            "[--origin-y:0]",
            // placement
            "placement-top:[--origin-y:theme(spacing.1)]",
            "placement-right:[--origin-x:calc(theme(spacing.1)_*_-1)]",
            "placement-bottom:[--origin-y:calc(theme(spacing.1)_*_-1)]",
            "placement-left:[--origin-x:theme(spacing.1)]",
            // entering
            "entering:opacity-0",
            "entering:translate-y-[--origin-y]",
            "entering:translate-x-[--origin-x]",
            // exiting
            "exiting:opacity-0",
            "exiting:translate-y-[--origin-y]",
            "exiting:translate-x-[--origin-x]",
            "exiting:pointer-events-none", // ensure content behind is immediately interactive
        ],
    ],
});

/**
 * A wrapper around an element that can receive focus that controls the tooltip.
 */
export function TooltipTrigger({
    delay = 0,
    ...props
}: RACTooltipTriggerProps) {
    return <RACTooltipTrigger {...props} delay={delay} />;
}
TooltipTrigger.displayName = "TooltipTrigger";

/**
 * A button with an info icon that triggers a tooltip.
 */
export function TooltipInfoButton({
    ref,
    ...props
}: Omit<ComponentProps<typeof Button>, "children" | "isIcon" | "variant"> & {
    ref?: ForwardedRef<HTMLButtonElement>;
}) {
    return (
        <Button
            {...props}
            className={(rp) =>
                twMerge(
                    "size-7",
                    typeof props.className === "function"
                        ? props.className(rp)
                        : props.className,
                )
            }
            isIcon
            ref={ref}
            variant="tertiary"
        >
            <InfoIcon />
        </Button>
    );
}
TooltipInfoButton.displayName = "TooltipInfoButton";

/**
 * A tooltip displays a description of an element on hover or focus.
 *

 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/src/components/tooltip)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tooltip.html)
 * [mdn-web-docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role#description)
 *
 * ## Usage
 * 
 * ```tsx
 * import { TooltipTrigger, TooltipInfoButton, Tooltip } from "ui-kit.ai"
 * ```
 * ```tsx
 * <TooltipTrigger>
 *     <TooltipInfoButton />
 *     <Tooltip>Extra content shown on hover</Tooltip>
 * </TooltipTrigger>
 * ```
 * 
 * **Note**: Tooltips cannot contain a focusable element. That would break
 * accessibility. Because the tooltip itself never receives focus and is not in
 * the tabbing order, a tooltip can not contain interactive elements like links,
 * inputs, or buttons.
 */
export function Tooltip({ children, ...props }: TooltipProps) {
    return (
        <RACTooltip
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tooltipStyles({
                        ...renderProps,
                        className,
                    }),
            )}
            offset={10}
        >
            <OverlayArrow>
                <svg
                    className="fill-muted-800 group-placement-left:-rotate-90 group-placement-right:rotate-90
                        group-placement-bottom:rotate-180 forced-colors:fill-[Canvas]
                        forced-colors:stroke-[ButtonBorder]"
                    height={8}
                    viewBox="0 0 8 8"
                    width={8}
                >
                    <path d="M0 0 L4 4 L8 0" />
                </svg>
            </OverlayArrow>

            {children}
        </RACTooltip>
    );
}
Tooltip.displayName = "Tooltip";
