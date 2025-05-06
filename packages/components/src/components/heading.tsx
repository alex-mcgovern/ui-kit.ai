import type { HeadingProps as AriaHeadingProps } from 'react-aria-components'

import { Heading as AriaHeading } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const heading = tv({
    base: 'font-title',
    variants: {
        level: {
            1: 'text-4xl font-bold letter-spacing-[-0.35px]',
            2: 'text-3xl font-bold letter-spacing-[-0.21px]',
            3: 'text-2xl font-semibold letter-spacing-[-0.15px]',
            4: 'text-xl font-semibold letter-spacing-[-0.1px]',
            5: 'text-lg font-semibold letter-spacing-[-0.045px]',
            6: 'text-base font-semibold',
        },
    },
})

/**
 * A heading renders a semantic heading with pre-determined typography styles
 */
export function Heading({
    level = 3,
    ...props
}: Omit<AriaHeadingProps, 'level'> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6
}) {
    return (
        <AriaHeading
            {...props}
            className={twMerge(heading({ level }), 'text-dark mb-4', props.className)}
            level={level}
        />
    )
}
Heading.displayName = 'Heading'
