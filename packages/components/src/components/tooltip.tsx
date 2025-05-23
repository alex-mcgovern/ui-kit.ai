import type {
    TooltipProps as RACTooltipProps,
    TooltipTriggerComponentProps as RACTooltipTriggerProps,
} from 'react-aria-components'

import { Info as InfoIcon } from 'lucide-react'
import { type ComponentProps, type ForwardedRef } from 'react'
import {
    composeRenderProps,
    OverlayArrow,
    Tooltip as RACTooltip,
    TooltipTrigger as RACTooltipTrigger,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Button } from './button'

interface TooltipProps extends Omit<RACTooltipProps, 'children'> {
    children: React.ReactNode
}

const tooltipStyles = tv({
    base: [
        [
            'inline-flex items-center gap-1',
            'px-2 py-1',
            'text-sm',
            'bg-[var(--theme-default-text-dark)] text-[var(--theme-default-bg-raised)]',
            'group rounded drop-shadow-sm',
            // transition
            'transition-all will-change-transform duration-200',
            'translate-y-0',
            'translate-x-0',
            // transform origin
            '[--origin-x:0]',
            '[--origin-y:0]',
            // placement
            'placement-top:[--origin-y:var(--spacing)]',
            'placement-right:[--origin-x:calc(var(--spacing)_*_-1)]',
            'placement-bottom:[--origin-y:calc(var(--spacing)_*_-1)]',
            'placement-left:[--origin-x:var(--spacing)]',
            // entering
            'entering:ease-out',
            'entering:opacity-0',
            'entering:translate-y-(--origin-y)',
            'entering:translate-x-(--origin-x)',
            // exiting
            'entering:ease-in',
            'exiting:opacity-0',
            'exiting:translate-y-(--origin-y)',
            'exiting:translate-x-(--origin-x)',
            'exiting:pointer-events-none', // ensure content behind is immediately interactive
        ],
    ],
})

/**
 * A tooltip displays a description of an element on hover or focus.
 */
export function Tooltip({ children, ...props }: TooltipProps) {
    return (
        <RACTooltip
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                tooltipStyles({
                    ...renderProps,
                    className,
                })
            )}
            offset={10}
        >
            <OverlayArrow>
                <svg
                    className='group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180
                        fill-[var(--theme-default-text-dark)] forced-colors:fill-[Canvas]
                        forced-colors:stroke-[ButtonBorder]'
                    height={8}
                    viewBox='0 0 8 8'
                    width={8}
                >
                    <path d='M0 0 L4 4 L8 0' />
                </svg>
            </OverlayArrow>

            {children}
        </RACTooltip>
    )
}
Tooltip.displayName = 'Tooltip'

/**
 * A button with an info icon that triggers a tooltip.
 */
export function TooltipInfoButton({
    ref,
    ...props
}: Omit<ComponentProps<typeof Button>, 'children' | 'isIcon' | 'variant'> & {
    ref?: ForwardedRef<HTMLButtonElement>
}) {
    return (
        <Button
            {...props}
            className={(rp) =>
                twMerge(
                    'size-6',
                    typeof props.className === 'function' ? props.className(rp) : props.className
                )
            }
            isIcon
            ref={ref}
            variant='tertiary'
        >
            <InfoIcon />
        </Button>
    )
}
TooltipInfoButton.displayName = 'TooltipInfoButton'

/**
 * A wrapper around an element that can receive focus that controls the tooltip.
 */
export function TooltipTrigger({ delay = 0, ...props }: RACTooltipTriggerProps) {
    return (
        <RACTooltipTrigger
            {...props}
            delay={delay}
        />
    )
}
TooltipTrigger.displayName = 'TooltipTrigger'
