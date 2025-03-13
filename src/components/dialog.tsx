import type {
    ComponentProps,
    ForwardedRef,
    HTMLProps,
} from "react";
import type {
    DialogProps as RACDialogProps,
    DialogTriggerProps as RACDialogTriggerProps,
    ModalOverlayProps as RACModalOverlayProps,
} from "react-aria-components";

import { X as IconX } from "lucide-react";
import { useContext } from "react";
import {
    Dialog as RACDialog,
    DialogTrigger as RACDialogTrigger,
    Modal as RACModal,
    ModalOverlay as RACModalOverlay,
    OverlayTriggerStateContext as RACOverlayTriggerStateContext,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { bgGlass } from "../styles/bg-glass";
import { Button } from "./button";
import { Heading } from "./heading";

const modalOverlayStyles = tv({
    base: [
        "fixed inset-0 z-50",
        "h-dvh w-dvw",
        "flex items-center justify-center text-center",
        "bg-black/20",
        // transition properties
        "transition-opacity duration-300 ease-out",
        // entering
        "entering:opacity-0",
        // exiting
        "exiting:opacity-0",
        "exiting:pointer-events-none", // ensure content behind is immediately interactive
    ],
});

const modalStyles = tv({
    base: [
        "h-dvh w-dvw md:h-[unset] md:max-h-[75dvh] md:w-[unset]",
        "flex items-center justify-center",
        "relative",
        "forced-colors:bg-[Canvas]",
        // transition
        "transition-transform duration-300 ease-out",
        "md:entering:translate-y-4",
        "md:exiting:translate-y-4",
        "exiting:pointer-events-none", // ensure content behind is immediately interactive
    ],
});

const dialogStyles = tv({
    base: [
        "flex flex-col",
        "md:shadow-2xl",
        "outline outline-0",
        "relative",
        "text-left",
        "bg-base bg-clip-padding",
        // height
        "h-dvh max-h-dvh",
        "md:h-[unset] md:max-h-[inherit]",
        "w-full sm:max-w-[100dvw]",
        // border
        "md:rounded-lg md:border md:border-muted-200",
        "[[data-placement]>&]:p-4",
    ],
    variants: {
        width: {
            lg: "md:max-w-[max(50rem,50dvw)]",
            md: "md:max-w-[max(35rem,35dvw)]",
            sm: "md:max-w-96",
        },
    },
    extend: bgGlass,
});

function DialogModal({
    isDismissable = true,
    ...props
}: RACModalOverlayProps) {
    return (
        <RACModal
            {...props}
            className={modalStyles}
            isDismissable={isDismissable}
        />
    );
}

function DialogModalOverlay({
    isDismissable = true,
    ...props
}: Omit<RACModalOverlayProps, "className">) {
    return (
        <RACModalOverlay
            {...props}
            className={modalOverlayStyles()}
            isDismissable={isDismissable}
        />
    );
}

/**
 * A dialog is an overlay shown above other content in an application.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/dialog.tsx)
 * [react aria](https://react-spectrum.adobe.com/react-aria/Dialog.html)
 *
 * ## Usage
 * ```tsx
 * import {
 *     Dialog,
 *     DialogCloseButton,
 *     DialogContent,
 *     DialogFooter,
 *     DialogHeader,
 *     DialogTitle,
 *     DialogTrigger,
 * } from "boondoggle";
 * ```
 *
 * ```tsx
 * <Dialog>
 *     <DialogHeader>
 *         <DialogTitle>
 *             // accessible name for the dialog
 *         </DialogTitle>
 *         <DialogCloseButton />
 *     </DialogHeader>
 *
 *     <DialogContent>
 *         // inner, scrollable content
 *     </DialogContent>
 *
 *     <DialogFooter>
 *         // content pinned to bottom, e.g. action buttons
 *     </DialogFooter>
 * </Dialog>
 * ```
 */
export function Dialog({
    width = "sm",
    ...props
}: RACDialogProps & { width?: "lg" | "md" | "sm" }) {
    return (
        <DialogModalOverlay isDismissable>
            <DialogModal isDismissable>
                <RACDialog
                    {...props}
                    className={twMerge(
                        dialogStyles({ width }),
                        props.className,
                    )}
                />
            </DialogModal>
        </DialogModalOverlay>
    );
}

/**
 * A button to close the dialog.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Dialog.html#state
 */
export function DialogCloseButton(
    props: Omit<
        ComponentProps<typeof Button>,
        "aria-label" | "name" | "type" | "variant"
    >,
) {
    const { close } =
        useContext(RACOverlayTriggerStateContext) ?? {};
    return (
        <Button
            {...props}
            aria-label="Close"
            className={(rp) =>
                twMerge(
                    "-mx-3",
                    typeof props.className === "function"
                        ? props.className(rp)
                        : props.className,
                )
            }
            isIcon
            name="close"
            onPress={(e) => {
                props.onPress?.(e);
                close?.();
            }}
            type="button"
            variant="tertiary"
        >
            <IconX />
        </Button>
    );
}

/**
 * Wrapper to render the dialog header.
 */
export function DialogHeader(
    props: HTMLProps<HTMLElement>,
) {
    return (
        <header
            {...props}
            className={twMerge(
                "h-10",
                "px-4",
                "flex shrink-0 items-center justify-between gap-4",
                "border-b border-b-muted-200",
                props.className,
            )}
        />
    );
}

/**
 * Wraps a {@link Heading} component and adds the `title` slot which accessibly labels
 * the dialog.
 *
 * @note If a dialog does not have a {@link DialogTitle}, an `aria-label` or
 * `aria-labelledby` prop must be passed instead to identify the element to
 * assistive technology.
 */
export function DialogTitle({
    children,
    ...props
}: Omit<ComponentProps<typeof Heading>, "level" | "slot">) {
    return (
        <Heading
            {...props}
            className={twMerge(
                "mb-0 truncate text-sm",
                props.className,
            )}
            level={3}
            slot="title"
        >
            {children}
        </Heading>
    );
}

/**
 * A DialogTrigger opens a dialog when a trigger element is pressed.
 */
export function DialogTrigger(
    props: RACDialogTriggerProps,
) {
    return <RACDialogTrigger {...props} />;
}

/**
 * Wrapper to render scrollable content within the dialog.
 */
export function DialogContent({
    ref,
    ...props
}: HTMLProps<HTMLDivElement> & {
    ref?: ForwardedRef<HTMLDivElement>;
}) {
    return (
        <div
            {...props}
            className={twMerge(
                "scrollbar-thin overflow-y-auto",
                "px-4 py-3",
                "text-sm",
                "shrink grow",
                props.className,
            )}
            ref={ref}
        />
    );
}

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export function DialogFooter({
    children,
    ...props
}: HTMLProps<HTMLElement>) {
    return (
        <footer
            {...props}
            className={twMerge(
                "min-h-10",
                "flex shrink-0 items-center justify-between gap-2",
                "border-t border-t-muted-200",
                "py-2 pl-4 pr-2",
                props.className,
            )}
        >
            {children}
        </footer>
    );
}
