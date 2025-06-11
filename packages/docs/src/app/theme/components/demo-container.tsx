import type { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

export function DemoContainer({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div className={twMerge('border border-dashed border-default rounded-lg p-4', className)}>
            {children}
        </div>
    )
}
