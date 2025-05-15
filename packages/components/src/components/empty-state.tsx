'use client'
import type { ForwardRefExoticComponent, ReactNode, RefAttributes, SVGProps } from 'react'

import { InfoIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Heading } from './heading'

const actionsStyle = tv({
    base: 'mx-auto',
    variants: {
        actions: {
            1: '',
            2: 'grid grid-cols-2 gap-2',
        },
    },
})

/**
 * An empty state is a fallback UI shown in the absence of data, e.g. for a search
 * with no results.
 */
export function EmptyState({
    actions,
    body,
    className,
    icon: Icon = InfoIcon,
    title,
}: {
    actions?: [ReactNode, ReactNode?]
    body?: ReactNode
    className?: string
    icon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>> & RefAttributes<SVGSVGElement>
    title: string
}) {
    return (
        <div
            className={twMerge(
                'text-center text-balance',
                'w-full',
                'p-6',
                'flex flex-col items-center justify-center',
                className
            )}
        >
            <Icon className='text-mid mb-2 block size-6 [&>*]:stroke-[1.5]' />

            <Heading
                className='text-dark mb-1 text-base'
                level={2}
            >
                {title}
            </Heading>
            {body != null ? <p className='mb-4 max-w-lg text-base text-balance'>{body}</p> : null}

            {actions && actions.length > 0 ? (
                <div
                    className={actionsStyle({
                        actions: actions.length,
                    })}
                >
                    {actions}
                </div>
            ) : null}
        </div>
    )
}
EmptyState.displayName = 'EmptyState'
