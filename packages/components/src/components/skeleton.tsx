import type { HTMLProps } from 'react'

import { twMerge } from 'tailwind-merge'

/**
 * An animated `Skeleton` component, for use as a loading placeholder.
 */
export function Skeleton(props: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        'animate-pulse',
        'h-4 max-w-full',
        'rounded-sm',
        'bg-[position-x:180%] bg-mid-contrast bg-gradient-to-r bg-[length:200%_100%]',
        'from-tint-light via-tint to-tint-light',
        props.className
      )}
    />
  )
}
Skeleton.displayName = 'Skeleton'
