import { useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'

import { Loader } from './loader'

/**
 * Get the initials from a given name.
 * @example
 * getInitials("Foo") // "A"
 * getInitials("Foo Bar") // "AM"
 */
export function getInitials(name?: string) {
    if (name == null) {
        return '?'
    }

    const [first, last] = name.split(' ')

    if (first == null) {
        return '?'
    }
    if (last == null) {
        return first[0]
    }
    return `${first[0]}${last[0]}`
}
getInitials.displayName = 'getInitials'

const avatarStyles = tv({
    base: `accent bg-tint-hover border-default color-tint-fg text-md flex size-12 shrink-0 items-center
    justify-center uppercase`,
    variants: {
        variant: {
            circle: 'rounded-full',
            square: 'rounded-md',
        },
    },
})

/**
 * Renders an avatar. Falls back to initial letters if no image is provided.

 */
export function Avatar({
    className,
    isLoading,
    name,
    src,
    variant = 'circle',
}: {
    /**
     * Optional className
     */
    className?: string

    /**
     * If true, the avatar will be displayed in grayscale.
     */
    isLoading?: boolean
    /**
     * The name of the person the avatar represents.
     * If the name is provided, the avatar will display the initials of the name.
     * If the name contains a space, the initials will be the first letter of the first 2 words.
     * **Note:** If no `src` is provided, a `name` must be provided.
     */
    name?: string
    /**
     * A pixel value for the height and width of the avatar.
     */
    size?: number
    /**
     * The URL of the image to display in the avatar. May be a remote URL or a data URL.
     * **Note:** If no `name` is provided, an `src` must be provided.
     */
    src?: string
    /**
     * Controls the shape of the avatar.
     */
    variant?: 'circle' | 'square'
}) {
    const initials: string | undefined = getInitials(name)

    const [img_src, setImgSrc] = useState(src)

    useEffect(() => {
        if (src != null) {
            const img = new Image()
            img.src = src
            img.onload = () => {
                setImgSrc(src)
            }
        }
    }, [src])

    if (isLoading === true) {
        return (
            <div
                className={avatarStyles({
                    className,
                    variant,
                })}
            >
                <Loader />
            </div>
        )
    }

    if (img_src != null) {
        return (
            <img
                alt='avatar'
                className={avatarStyles({
                    className,
                    variant,
                })}
                src={img_src}
            />
        )
    }

    if (initials == null) {
        return (
            <div
                className={avatarStyles({
                    className,
                    variant,
                })}
            />
        )
    }

    return (
        <div
            className={avatarStyles({
                className,
                variant,
            })}
        >
            {initials}
        </div>
    )
}
Avatar.displayName = 'Avatar'
