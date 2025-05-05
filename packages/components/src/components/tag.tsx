import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from 'react-aria-components'

import { type ForwardedRef, type HTMLProps } from 'react'
import { Button as RACButton, Link as RACLink } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { Intent } from '../types/intent'

import { focusRing } from '../styles/focus-ring'
import { renderSlot, Slot, type SlotNode } from '../types/slotted-node'

type TagProps = {
    /**
     * Convey semantic meaning with color.
     */
    intent?: Intent
    /**
     * Adds an optional dashed border to the tag.
     */
    isDashed?: boolean
    /**
     * A decorative node (e.g. an icon) to render on the left side of the
     * Tag. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotLeft?: SlotNode
    /**
     * A decorative node (e.g. an icon) to render on the right side of the
     * Tag. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotRight?: SlotNode

    /**
     * The visual appearance of the tag.
     */
    variant?: Variant
}

type Variant = 'default' | 'solid'

const tagStyles = tv({
    base: [
        'h-6 min-w-6',
        'text-center text-sm font-medium',
        // 'shadow-xs',
        'inline-flex shrink-0 items-center justify-center gap-1.5',
        'rounded-full border',
        '[&_svg]:size-4 [&_svg]:shrink-0',
        // padding
        'px-3 py-1.5',
        '[&:has([data-slot=slot-left])]:pl-1.5',
        '[&:has([data-slot=slot-right])]:pr-1.5',
        // interactivity
        '[&:is(a,button)]:hover:bg-[--bg-hover]',
        '[&:is(a,button)]:pressed:bg-[--bg-pressed]',
    ],
    defaultVariants: {
        isDashed: false,
        variant: 'default',
    },
    extend: focusRing,
    variants: {
        isDashed: {
            false: 'border-solid',
            true: 'border-dashed',
        },
        variant: {
            default: [
                'bg-tint-light border-dark text-mid',
                'hover:bg-tint-light',
                'pressed:bg-tint-dark',
            ],
            solid: [
                'bg-accent border-dark text-accent',
                'hover:bg-accent-light hover:border:accent-light',
                'pressed:accent-dark pressed:border-accent-dark',
            ],
        },
    },
})

/**
 * A Tag is a presentational component used to display short snippets of
 * information, often in a group of tags.
 */
export function Tag({
    children,
    className,
    intent,
    isDashed,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: HTMLProps<HTMLDivElement> &
    TagProps & {
        ref?: ForwardedRef<HTMLDivElement>
    }) {
    return (
        <div
            {...props}
            className={twMerge(
                tagStyles({
                    isDashed,
                    variant,
                }),
                className,
                intent
            )}
            ref={ref}
        >
            {renderSlot(slotLeft, {
                'data-slot': Slot.LEFT,
            })}
            {children}

            {renderSlot(slotRight, {
                'data-slot': Slot.RIGHT,
            })}
        </div>
    )
}
Tag.displayName = 'Tag'

/**
 * A TagButton is a button used to display short snippets of
 * information, often in a group of tags.
 */
export function TagButton({
    children,
    className,
    intent,
    isDashed,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: RACButtonProps &
    TagProps & {
        ref?: ForwardedRef<HTMLButtonElement>
    }) {
    return (
        <RACButton
            {...props}
            className={(rp) =>
                twMerge(
                    tagStyles({
                        isDashed,
                        variant,
                    }),
                    intent,
                    typeof className === 'function' ? className(rp) : className
                )
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        'data-slot': Slot.LEFT,
                    })}
                    {typeof children === 'function' ? children(renderProps) : children}

                    {renderSlot(slotRight, {
                        'data-slot': Slot.RIGHT,
                    })}
                </>
            )}
        </RACButton>
    )
}
TagButton.displayName = 'TagButton'

/**
 * A TagLink is a link used to display short snippets of
 * information, often in a group of tags.
 */
export const TagLink = ({
    children,
    className,
    intent,
    isDashed,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: RACLinkProps &
    TagProps & {
        ref?: ForwardedRef<HTMLAnchorElement>
    }) => {
    return (
        <RACLink
            {...props}
            className={(rp) =>
                twMerge(
                    tagStyles({
                        isDashed,
                        variant,
                    }),
                    intent,
                    typeof className === 'function' ? className(rp) : className
                )
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        'data-slot': Slot.LEFT,
                    })}
                    {typeof children === 'function' ? children(renderProps) : children}

                    {renderSlot(slotRight, {
                        'data-slot': Slot.RIGHT,
                    })}
                </>
            )}
        </RACLink>
    )
}
TagLink.displayName = 'TagLink'
