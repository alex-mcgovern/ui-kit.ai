import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

import { Button } from './button'

/**
 * A field button can used inside a group component
 * to add additional functionality to a field.
 */
export function FieldButton({
    ...props
}: Omit<ComponentProps<typeof Button>, 'excludeFromTabOrder' | 'isIcon' | 'variant'>) {
    return (
        <Button
            isIcon
            variant='tertiary'
            {...props}
            className={(rp) =>
                twMerge(
                    '!size-6',
                    'align-middle',
                    '-outline-offset-1',
                    'text-mid',
                    'group-invalid:error',
                    'last-of-type:mr-1 [&:not(:last-of-type)]:mr-px',
                    '[&_svg]:size-3 [&_svg]:shrink-0',
                    typeof props.className === 'function' ? props.className(rp) : props.className
                )
            }
            excludeFromTabOrder
        />
    )
}
FieldButton.displayName = 'FieldButton'
