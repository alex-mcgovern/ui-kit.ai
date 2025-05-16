import type { HTMLProps } from 'react'

import { twMerge } from 'tailwind-merge'

/**
 * The top nav component is an ready-made nav that appears at the top of the page.
 */
export function TopNav({ sticky = true, ...props }: HTMLProps<HTMLElement> & { sticky?: boolean }) {
    return (
        <nav
            {...props}
            className={twMerge(
                props.className,
                sticky === true ? 'sticky top-0 z-50' : '',
                'bg-raised/10 backdrop-blur-xs',
                'border-mid h-12 border-b',
                'flex items-center justify-between',
                'px-4 py-2'
            )}
        />
    )
}
TopNav.displayName = 'TopNav'
