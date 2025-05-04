'use client'
import type { ReactNode } from 'react'

import { InfoIcon, type LucideProps } from 'lucide-react'
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
 * A EmptyState is a fallback UI shown in the absence of data, e.g. for a search
 * with no results, or before any records have been created. It accepts a list
 * of up to 2 actions, which are React nodes.
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
    icon?: React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
    title: string
}) {
    return (
        <div
            className={twMerge(
                'text-center text-balance',
                'w-full',
                'px-6 py-32',
                'flex flex-col items-center justify-center',
                className
            )}
        >
            <Icon
                className='text-mid mb-2 block'
                size={48}
            />

            <Heading
                className='text-dark mb-1 text-xl'
                level={2}
            >
                {title}
            </Heading>
            {body != null ? <p className='mb-4 max-w-lg text-balance'>{body}</p> : null}

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
