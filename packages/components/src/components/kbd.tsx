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
                'w-min min-w-5',
                'text-center align-text-bottom',
                'text-xs font-medium whitespace-nowrap',
                'px-1',
                'rounded border border-b-[1.5px]',
                'border-default',
                'bg-current/10 text-current/80',
                props.className
            )}
        >
            <span className='block'>{props.children}</span>
        </div>
    )
}
Kbd.displayName = 'Kbd'
