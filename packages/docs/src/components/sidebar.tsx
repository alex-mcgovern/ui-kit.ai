import type { ReactNode } from 'react'

export function Sidebar({ children }: { children: ReactNode }) {
    return (
        <nav className='h-[calc(100dvh-3rem)] sticky top-12 px-4 py-6 min-w-0 overflow-y-auto scrollbar-thin border-r border-mid'>
            {children}
        </nav>
    )
}
