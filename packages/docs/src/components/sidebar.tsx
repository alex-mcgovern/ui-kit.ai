import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

export function Sidebar({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <nav
            className={twMerge(
                'h-[calc(100dvh-3rem)] sticky top-12 px-5 py-6 min-w-0 overflow-y-auto scrollbar-thin',
                className
            )}
        >
            {children}
        </nav>
    )
}
