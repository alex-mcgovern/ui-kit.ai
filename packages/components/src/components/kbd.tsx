import type { HTMLProps } from 'react'

import { twMerge } from 'tailwind-merge'

/**
 * Signals that a keyboard shortcut is available for the user to use.
 */
export function Kbd(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={twMerge(
                'h-5 min-w-5 w-min',
                'text-center align-text-bottom',
                // "inline-flex shrink-0 items-baseline justify-center",
                'text-xs font-medium whitespace-nowrap',
                'px-1 pt-0.5 pb-[3px]',
                'translate-y-[0.5px]',
                // border
                'rounded border border-b-[1.5px]',
                'border-tint',
                'bg-raised text-current/50',
                'opacity-80',
                props.className
            )}
        >
            <span className='block'>{props.children}</span>
        </div>
    )
}
Kbd.displayName = 'Kbd'
