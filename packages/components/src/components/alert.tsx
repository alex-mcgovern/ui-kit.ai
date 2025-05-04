import type { ReactNode } from 'react'

import { InfoIcon, type LucideProps } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { ActionNodes } from '../types/action-nodes'
import type { Intent } from '../types/intent'

import { renderActionNodes } from '../types/action-nodes'
import { Description } from './description'

const alertStyles = tv({
    base: [
        'w-full',
        'rounded-lg shadow-xs',
        'border-light border',
        'bg-tint-light/50',
        'text-hi-contrast',
        'py-1 pr-2 pl-3',
        'flex items-center gap-4',
    ],
})

const titleStyles = tv({
    base: 'font-title mb-0 block text-sm font-medium',
})

const iconStyles = tv({
    base: 'text-hi-contrast size-4 shrink-0 stroke-[1.75px]',
})

/**
 * An alert is a message that is displayed to the user. It makes use of the ARIA
 * role "alert" to highlight the importance of the message to assistive
 * technologies.
 */
export function Alert({
    actions,
    className,
    description,
    icon: Icon = InfoIcon,
    intent = 'info',
    title,
    ...props
}: {
    actions?: ActionNodes
    className?: string
    description?: ReactNode
    icon?: React.ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
    /**
     * Convey semantic meaning with color.
     */
    intent?: Intent
    title: string
}) {
    return (
        <div
            {...props}
            className={twMerge(alertStyles(), className, intent)}
        >
            <Icon className={twMerge(iconStyles())} />
            <div>
                {/*
                 * Note: A heading element should *not* be used here,
                 * as it may appear on page before the H1, breaking
                 * the semantic flow of headings on the page and
                 * messing with a11y and SEO.
                 */}
                <span
                    className={titleStyles()}
                    role='alert'
                >
                    {title}
                </span>
                {description != null ? (
                    <Description className={twMerge('!my-0 text-hi-contrast')}>
                        {description}
                    </Description>
                ) : null}
            </div>
            {renderActionNodes({
                actions,
                className: 'ml-auto',
                props: {},
            })}
        </div>
    )
}
Alert.displayName = 'Alert'
