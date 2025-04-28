import { type ComponentProps, type ForwardedRef } from 'react'
import { TextArea as RACTextArea } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { fieldVariants } from '../styles/field-variants'

const textAreaStyles = tv({
    base: ['px-3', 'text-sm', 'w-full', 'text-start align-middle'],
    extend: fieldVariants,
})

/**
 * An TextArea is a primitive component used when composing fields, (e.g.
 * TextField, SearchField, NumberField).
 */
export const TextArea = ({
    isBorderless,
    ref,
    ...props
}: ComponentProps<typeof RACTextArea> & {
    isBorderless?: boolean
    ref?: ForwardedRef<HTMLInputElement>
}) => {
    return (
        <div className='relative inline-flex w-full items-center'>
            <RACTextArea
                {...props}
                className={(rp) =>
                    twMerge(
                        textAreaStyles({
                            ...rp,
                            isBorderless,
                        }),
                        typeof props.className === 'function'
                            ? props.className(rp)
                            : props.className
                    )
                }
                ref={ref}
            />
        </div>
    )
}
TextArea.displayName = 'TextArea'
