import type { ComponentProps } from 'react'

import { Link as AriaLink } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 */
export function Link(props: ComponentProps<typeof AriaLink>) {
    return (
        <AriaLink
            {...props}
            className={(renderProps) =>
                twMerge(
                    `text-lo-contrast hover:text-hi-contrast hover:decoration-none underline decoration-dotted
                    transition-colors hover:no-underline`,
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
        />
    )
}
Link.displayName = 'Link'
