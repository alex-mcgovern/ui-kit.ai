import { InfoIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type { ActionNodes } from '../types/action-nodes'
import type { Intent } from '../types/intent'

import { renderActionNodes } from '../types/action-nodes'
import { renderSlot } from '../types/slotted-node'

const alertStyles = tv({
    base: [
        'w-full',
        'rounded-lg shadow-xs',
        'border-default border',
        'bg-tint',
        'text-hi-contrast',
        'p-2 pl-3',
        'flex items-center gap-3',
    ],
})

const titleStyles = tv({
    base: 'font-title mb-0 block text-sm font-medium',
})

/**
 * An alert is a message that is displayed to the user. It makes use of the ARIA
 * role "alert" to highlight the importance of the message to assistive
 * technologies.
 */
export function Alert({
    actions,
    className,
    icon = <InfoIcon />,
    intent,
    text,
    ...props
}: {
    actions?: ActionNodes
    className?: string
    icon?: React.JSX.Element
    /**
     * Convey semantic meaning with color.
     */
    intent?: Intent
    text: string
}) {
    return (
        <div
            {...props}
            className={twMerge(alertStyles(), className, intent)}
        >
            {renderSlot(icon, {
                'aria-hidden': true,
                className: 'size-4 shrink-0',
                role: 'img',
            })}
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
                    {text}
                </span>
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
