import type { ComponentProps, HTMLProps } from 'react'
import type {
    DialogProps as RACDialogProps,
    DialogTriggerProps as RACDialogTriggerProps,
    ModalOverlayProps as RACModalOverlayProps,
} from 'react-aria-components'

import { X as IconX } from 'lucide-react'
import { useContext } from 'react'
import {
    Dialog as RACDialog,
    DialogTrigger as RACDialogTrigger,
    Modal as RACModal,
    ModalOverlay as RACModalOverlay,
    OverlayTriggerStateContext as RACOverlayTriggerStateContext,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Button } from './button'
import { Heading } from './heading'

const modalOverlayStyles = tv({
    base: [
        'fixed inset-0 z-50',
        'h-dvh w-dvw',
        'flex items-center justify-center text-center',
        // 'bg-[#000000]/25 backdrop-blur-3xl',
        // transition properties
        'transition-opacity ease-out',
        // entering
        'entering:opacity-0',
        // exiting
        'exiting:opacity-0',
        'exiting:pointer-events-none', // ensure content behind is immediately interactive
    ],
})

const modalStyles = tv({
    base: [
        'h-dvh w-dvw md:h-auto md:max-h-[75dvh] md:w-auto',
        'flex items-center justify-center',
        'relative',
        'forced-colors:bg-[Canvas]',
        // transition
        'transition-transform duration-200',
        // entering
        // 'md:entering:translate-y-4',
        'entering:ease-out',
        'md:entering:scale-95',
        // exiting
        // 'md:exiting:translate-y-4',
        'entering:ease-in',
        'md:entering:scale-98',
        'exiting:pointer-events-none', // ensure content behind is immediately interactive
    ],
})

const dialogStyles = tv({
    base: [
        'group/dialog',
        'flex flex-col',
        'md:shadow-2xl',
        '!outline-0',
        'relative',
        'text-left',
        'bg-base-raised',
        // height
        'h-dvh max-h-dvh md:h-[unset]',
        'w-full max-w-[100dvw]',
        // border
        'rounded-none md:rounded-lg',
        'sm:max-sm:border-0',
        'border-default border',
        '[[data-placement]>&]:p-4',
    ],
    variants: {
        width: {
            lg: 'md:w-[max(50rem,50dvw)]',
            md: 'md:w-[max(35rem,35dvw)]',
            sm: 'md:w-96',
        },
    },
})

/**
 * A dialog is an overlay shown above other content in an application.
 */
export function Dialog({
    width = 'sm',
    ...props
}: RACDialogProps & { width?: 'lg' | 'md' | 'sm' }) {
    return (
        <RACDialog
            {...props}
            className={twMerge(dialogStyles({ width }), props.className)}
        />
    )
}
Dialog.displayName = 'Dialog'

/**
 * A button to close the dialog.
 */
export function DialogCloseButton(
    props: Omit<ComponentProps<typeof Button>, 'aria-label' | 'name' | 'type' | 'variant'>
) {
    const { close } = useContext(RACOverlayTriggerStateContext) ?? {}
    return (
        <Button
            {...props}
            aria-label='Close'
            className={(rp) =>
                twMerge(
                    typeof props.className === 'function' ? props.className(rp) : props.className
                )
            }
            isIcon
            name='close'
            onPress={(e) => {
                props.onPress?.(e)
                close?.()
            }}
            type='button'
            variant='tertiary'
        >
            <IconX />
        </Button>
    )
}
DialogCloseButton.displayName = 'DialogCloseButton'

/**
 * Wrapper to render scrollable content within the dialog.
 */
export function DialogContent({ ref, ...props }: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={twMerge(
                'scrollbar-thin overflow-y-auto',
                'text-base',
                'shrink grow',
                // padding
                'p-4',
                'group-has-data-[dialog-footer]/dialog:pb-2',
                'group-has-data-[dialog-header]/dialog:pt-2',
                props.className
            )}
            data-dialog-content
            ref={ref}
        />
    )
}
DialogContent.displayName = 'DialogContent'

/**
 * Wrapper to pin content to the bottom of the dialog.
 */
export function DialogFooter({ children, ...props }: HTMLProps<HTMLElement>) {
    return (
        <footer
            {...props}
            className={twMerge(
                'min-h-10',
                'flex shrink-0 items-center justify-between gap-2',
                // padding
                'p-4',
                'group-has-data-[dialog-content]/dialog:pt-2',
                props.className
            )}
            data-dialog-header
        >
            {children}
        </footer>
    )
}
DialogFooter.displayName = 'DialogFooter'

/**
 * Wrapper to render the dialog header.
 */
export function DialogHeader(props: HTMLProps<HTMLElement>) {
    return (
        <header
            {...props}
            className={twMerge(
                'flex shrink-0 items-center justify-between gap-4',
                // padding
                'p-4',
                'group-has-data-[dialog-content]/dialog:pb-2',
                props.className
            )}
            data-dialog-header
        />
    )
}
DialogHeader.displayName = 'DialogHeader'

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
}: Omit<ComponentProps<typeof Heading>, 'level' | 'slot'>) {
    return (
        <Heading
            {...props}
            className={twMerge('mb-0 truncate text-base', props.className)}
            level={3}
            slot='title'
        >
            {children}
        </Heading>
    )
}
DialogTitle.displayName = 'DialogTitle'

/**
 * A DialogTrigger opens a dialog when a trigger element is pressed.
 */
export function DialogTrigger(props: RACDialogTriggerProps) {
    return <RACDialogTrigger {...props} />
}
DialogTrigger.displayName = 'DialogTrigger'

export function DialogModal({ isDismissable = true, ...props }: RACModalOverlayProps) {
    return (
        <RACModal
            {...props}
            className={(renderProps) =>
                twMerge(
                    modalStyles(),
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
            isDismissable={isDismissable}
        />
    )
}
DialogModal.displayName = 'DialogModal'

export function DialogModalOverlay({
    isDismissable = true,
    ...props
}: Omit<RACModalOverlayProps, 'className'>) {
    return (
        <RACModalOverlay
            {...props}
            className={modalOverlayStyles()}
            isDismissable={isDismissable}
        />
    )
}
DialogModalOverlay.displayName = 'DialogModalOverlay'
