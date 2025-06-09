import type { ComponentProps, HTMLProps } from 'react'

import { Link } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { Heading } from './heading'

/**
 * A Card is a container that groups and organizes content in a consistent manner.
 */
export function Card(props: HTMLProps<HTMLElement>) {
    return (
        <section
            {...props}
            className={twMerge(
                `border-default bg-base-raised/80 relative overflow-hidden rounded-lg border shadow-xs
                backdrop-blur-3xl`,
                props.className
            )}
        />
    )
}
Card.displayName = 'Card'

/**
 * A Card is a container that groups and organizes content in a consistent manner.
 */
export function CardLink(props: ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            className={(renderProps) =>
                twMerge(
                    `border-default bg-base-raised/80 relative overflow-hidden rounded-lg border shadow-xs
                    backdrop-blur-3xl`,
                    'transition-all',
                    'hover:shadow-md',
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
        />
    )
}
CardLink.displayName = 'CardLink'

/**
 * A CardHeader is a container for the title of the card.
 */
export const CardHeader = (props: HTMLProps<HTMLElement>) => {
    return (
        <header
            {...props}
            className={twMerge('my-4 px-4', props.className)}
            data-component='header'
        />
    )
}
CardHeader.displayName = 'CardHeader'

/**
 * A CardTitle is a heading element that is used to display the title of the card.
 */
export function CardTitle({
    children,
    ...props
}: Omit<ComponentProps<typeof Heading>, 'level' | 'slot'>) {
    return (
        <Heading
            {...props}
            className={twMerge('mb-0 truncate text-base', props.className)}
            level={3}
            slot='title'
        >
            {children}
        </Heading>
    )
}
CardTitle.displayName = 'CardTitle'

/**
 * A CardDescription is an element used to add extra context to a card.
 */
export function CardDescription({
    children,
    ...props
}: Omit<ComponentProps<'span'>, 'level' | 'slot'>) {
    return (
        <span
            {...props}
            className={twMerge('text-lo-contrast mb-0 truncate text-base', props.className)}
            slot='description'
        >
            {children}
        </span>
    )
}
CardDescription.displayName = 'CardDescription'

/**
 * A CardBody is a container for the main content of the card.
 */
export function CardBody(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={twMerge('my-4 px-4 text-base', props.className)}
        />
    )
}
CardBody.displayName = 'CardBody'

/**
 * A CardFooter is a container for additional actions or information related to the card.
 */
export function CardFooter(props: HTMLProps<HTMLElement>) {
    return (
        <footer
            {...props}
            className={twMerge('my-4 flex items-center px-4', props.className)}
        />
    )
}
CardFooter.displayName = 'CardFooter'
