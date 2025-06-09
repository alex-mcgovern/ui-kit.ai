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
                'bg-tint bg-position-x:[180%] bg-gradient-to-r bg-size-[200%_100%]',
                'from-(--theme-default-bg-tint) via-(--theme-default-bg-tint-hover) to-(--theme-default-bg-tint)',
                props.className
            )}
        />
    )
}
Skeleton.displayName = 'Skeleton'
