import type { HeadingProps as AriaHeadingProps } from 'react-aria-components'

import { Heading as AriaHeading } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const heading = tv({
    base: 'font-title',
    variants: {
        level: {
            1: 'letter-spacing-[-0.35px] text-3xl font-bold',
            2: 'letter-spacing-[-0.21px] text-2xl font-bold',
            3: 'letter-spacing-[-0.15px] text-xl font-semibold',
            4: 'letter-spacing-[-0.1px] text-lg font-semibold',
            5: 'letter-spacing-[-0.045px] text-base font-semibold',
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
            className={twMerge(heading({ level }), 'text-hi-contrast mb-4', props.className)}
            level={level}
        />
    )
}
Heading.displayName = 'Heading'
