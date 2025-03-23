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
        'h-5 min-w-5',
        'text-center align-text-bottom',
        // "inline-flex shrink-0 items-baseline justify-center",
        'text-xs',
        'px-1 pb-[3px] pt-0.5',
        'translate-y-[0.25px]',
        // border
        'rounded border border-b-[1.5px]',
        'border-muted-400/50',
        'text-current/50 bg-muted-50/10',
        'opacity-80',
        props.className
      )}
    >
      <span className='block'>{props.children}</span>
    </div>
  )
}
Kbd.displayName = 'Kbd'
