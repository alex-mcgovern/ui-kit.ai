import type {
    PopoverProps as AriaPopoverProps,
    DialogProps as RACDialogProps,
} from "react-aria-components";

import {
    Popover as AriaPopover,
    composeRenderProps,
    Dialog,
    OverlayArrow,
    PopoverContext,
    useSlottedContext,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { bgGlass } from "../styles/bg-glass";

interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
    children: React.ReactNode;
    showArrow?: boolean;
}

const popoverStyles = tv({
    base: [
        `rounded border border-muted-200 text-primary shadow-2xl transition-none
        forced-colors:bg-[Canvas]`,
    ],
    extend: bgGlass,
    variants: {
        isEntering: {
            true: `duration-300 ease-out animate-in fade-in placement-left:slide-in-from-right-1
            placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1
            placement-bottom:slide-in-from-top-1`,
        },
        isExiting: {
            true: `duration-300 ease-out animate-out fade-out placement-left:slide-out-to-right-1
            placement-right:slide-out-to-left-1 placement-top:slide-out-to-bottom-1
            placement-bottom:slide-out-to-top-1`,
        },
    },
});

/**
 * A popover is an overlay element positioned relative to a trigger.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/src/components/popover)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Popover.html)
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *     DialogTrigger,
 *     Button,
 *     Popover,
 *     PopoverDialog
 * } from "ui-kit.ai"
 * ```
 * ```tsx
 * <DialogTrigger>
 *     <Button>Click me</Button>
 *     <Popover>
 *         <PopoverDialog>
 *             Add your content here
 *         </PopoverDialog>
 *     </Popover>
 * </DialogTrigger>
 * ```
 */
export function Popover({
    children,
    className,
    showArrow,
    ...props
}: PopoverProps) {
    const popoverContext = useSlottedContext(PopoverContext);
    const isSubmenu = popoverContext?.trigger === "SubmenuTrigger";
    let offset = showArrow === true ? 12 : 8;
    offset = isSubmenu ? offset - 6 : offset;
    return (
        <AriaPopover
            offset={offset}
            {...props}
            className={composeRenderProps(className, (className, renderProps) =>
                popoverStyles({
                    ...renderProps,
                    className,
                }),
            )}
        >
            {(showArrow ?? false) && (
                <OverlayArrow className="group">
                    <svg
                        className="block fill-[theme(backgroundColor.base)] stroke-muted-200 stroke-1
                            group-placement-left:-rotate-90 group-placement-right:rotate-90
                            group-placement-bottom:rotate-180 forced-colors:fill-[Canvas]
                            forced-colors:stroke-[ButtonBorder]"
                        height={12}
                        viewBox="0 0 12 12"
                        width={12}
                    >
                        <path d="M0 0 L6 6 L12 0" />
                    </svg>
                </OverlayArrow>
            )}
            {children}
        </AriaPopover>
    );
}

export function PopoverDialog(props: RACDialogProps) {
    return (
        <Dialog
            {...props}
            className={twMerge(props.className, "p-4 outline-0")}
        />
    );
}
