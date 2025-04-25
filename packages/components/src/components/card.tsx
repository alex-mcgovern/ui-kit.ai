import type { ComponentProps, HTMLProps } from 'react'

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
                `border-tint-light bg-background-raised relative overflow-hidden rounded border
                shadow-xs`,
                props.className
            )}
        />
    )
}
Card.displayName = 'Card'

/**
 * A CardHeader is a container for the title of the card.
 */
export const CardHeader = (props: HTMLProps<HTMLElement>) => {
    return (
        <header
            {...props}
            className={twMerge('flex items-center px-4 py-3', props.className)}
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
            className={twMerge('mb-0 truncate text-md', props.className)}
            level={3}
            slot='title'
        >
            {children}
        </Heading>
    )
}
CardTitle.displayName = 'CardTitle'

/**
 * A CardBody is a container for the main content of the card.
 */
export function CardBody(props: HTMLProps<HTMLDivElement> & { noPadding?: boolean }) {
    return (
        <div
            {...props}
            className={twMerge('shrink grow px-4 py-3', props.className)}
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
            className={twMerge('flex items-center px-4 py-3', props.className)}
        />
    )
}
CardFooter.displayName = 'CardFooter'
