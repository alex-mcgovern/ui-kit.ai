import type { ForwardedRef } from 'react'
import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from 'react-aria-components'

import { Button as RACButton, Link as RACLink } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { Intent } from '../types/intent'

import { focusRing } from '../styles/focus-ring'
import { renderSlot, type SlotNode } from '../types/slotted-node'
import { Loader } from './loader'

const buttonStyle = tv({
    base: [
        'rounded',
        'border',
        'inline-flex shrink-0 items-center justify-center gap-1.5',
        'h-ui-element',
        'text-center text-sm font-medium',
        'cursor-pointer',
        'transition-colors',
        // padding
        'px-4 py-2',
        '[&:has([data-slot=slot-left])]:pl-3',
        '[&:has([data-slot=slot-right])]:pr-3',
        // icon styles
        '[&_svg]:size-3 [&_svg]:shrink-0',
        // disabled
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
    ],
    defaultVariants: {
        variant: 'primary',
    },
    extend: focusRing,
    variants: {
        isIcon: {
            true: 'w-[theme(height.ui-element)] aspect-square px-2 [&_svg]:mx-auto',
        },
        variant: {
            primary: [
                'text-accent',
                'shadow-xs',
                'border-light bg-accent',
                'hover:bg-accent-light',
                'pressed:bg-accent-dark',
            ],
            secondary: [
                'shadow-xs',
                'border-mid text-dark bg-transparent',
                'hover:bg-tint-light',
                'pressed:bg-tint',
            ],
            tertiary: [
                'text-dark border-transparent bg-transparent',
                'hover:bg-tint-light',
                'pressed:bg-tint',
            ],
        },
    },
})

type ButtonCommonProps = {
    /**
     * Convey semantic meaning with color.
     */
    intent?: Intent
    /**
     * When `isDestructive` is set to `true` the Button will styled in red, to denote a destructive action.
     */
    isDestructive?: boolean
    /**
     * When set to `true` the Button will be styled to be square with a fixed
     * height & width. This should be used in conjunction with passing an icon
     * component to the `children` prop.
     *
     * **Note**: If you aren't passing text to the `children` prop, ensure you
     * are passing an `aria-label` attribute, so the Button is correctly
     * labelled to assistive technologies.
     */
    isIcon?: boolean
    /**
     * A decorative node (e.g. an icon) to render on the left side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotLeft?: SlotNode
    /**
     * A decorative node (e.g. an icon) to render on the right side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotRight?: SlotNode
    /**
     * - **`primary`**: The main action button. Use this for the most important actions on a page, such as "Submit," "Save," or "Continue."
     * - **`secondary`**: A less prominent button used for secondary actions, like "Cancel" or "Go Back." It should not compete visually with primary buttons.
     * - **`tertiary`**: A minimal-styled button for low-emphasis actions. Use this for links, "Learn More" buttons, or actions that don't require strong visual weight.
     */
    variant?: 'primary' | 'secondary' | 'tertiary'
}

type ButtonProps = ButtonCommonProps & RACButtonProps

const ButtonLoadingState = ({
    children,
    isPending,
}: {
    children: React.ReactNode
    isPending?: boolean
}) =>
    isPending === true ? (
        <div className='relative'>
            <div
                aria-hidden
                className='opacity-0'
            >
                {children}
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
                <Loader className='!size-4' />
            </div>
        </div>
    ) : (
        children
    )
ButtonLoadingState.displayName = 'ButtonLoadingState'

type LinkButtonProps = ButtonCommonProps &
    RACLinkProps & {
        ref?: ForwardedRef<HTMLAnchorElement>
    }

/**
 * A button allows a user to perform an action, with mouse, touch, and
 * keyboard interactions.
 */
export function Button({
    intent,
    isDestructive,
    isIcon = false,
    isPending,
    ref,
    slotLeft,
    slotRight,
    variant = 'primary',
    ...props
}: ButtonProps & {
    ref?: ForwardedRef<HTMLButtonElement>
}) {
    return (
        <RACButton
            {...props}
            className={(renderProps) =>
                twMerge(
                    buttonStyle({
                        ...renderProps,
                        isIcon,
                        variant,
                    }),
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className,
                    intent
                )
            }
            isPending={isPending}
            ref={ref}
        >
            {(renderProps) => (
                <ButtonLoadingState isPending={isPending}>
                    {renderSlot(slotLeft, {
                        'data-slot': 'slot-left',
                    })}

                    {typeof props.children === 'function'
                        ? props.children(renderProps)
                        : props.children}

                    {renderSlot(slotRight, {
                        'data-slot': 'slot-right',
                    })}
                </ButtonLoadingState>
            )}
        </RACButton>
    )
}
Button.displayName = 'Button'

export const LinkButton = ({
    intent,
    isIcon,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: LinkButtonProps) => {
    return (
        <RACLink
            {...props}
            className={(renderProps) =>
                twMerge(
                    buttonStyle({
                        ...renderProps,
                        isIcon,
                        variant,
                    }),
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className,
                    intent
                )
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        'data-slot': 'slot-left',
                    })}

                    {typeof props.children === 'function'
                        ? props.children(renderProps)
                        : props.children}

                    {renderSlot(slotRight, {
                        'data-slot': 'slot-right',
                    })}
                </>
            )}
        </RACLink>
    )
}
LinkButton.displayName = 'LinkButton'
