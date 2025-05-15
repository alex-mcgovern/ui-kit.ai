import type { BreadcrumbProps, BreadcrumbsProps, LinkProps } from 'react-aria-components'

import { ChevronRightIcon } from 'lucide-react'
import {
    Breadcrumb as AriaBreadcrumb,
    Breadcrumbs as AriaBreadcrumbs,
    Link,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A breadcrumb is a link that represents a single item in a breadcrumb hierarchy.
 */
export function Breadcrumb(props: BreadcrumbProps & Omit<LinkProps, 'className'>) {
    return (
        <AriaBreadcrumb
            {...props}
            className={(renderProps) =>
                twMerge(
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className,
                    'flex items-center gap-2'
                )
            }
        >
            <Link
                {...props}
                className={twMerge(
                    props.href != null
                        ? 'text-mid hover:text-dark underline decoration-dotted'
                        : 'text-light'
                )}
            />
            {props.href != null && <ChevronRightIcon className='size-3 text-dark' />}
        </AriaBreadcrumb>
    )
}
Breadcrumb.displayName = 'Breadcrumb'

/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 */
export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
    return (
        <AriaBreadcrumbs
            {...props}
            className={twMerge('flex gap-2', props.className)}
        />
    )
}
Breadcrumbs.displayName = 'Breadcrumbs'
