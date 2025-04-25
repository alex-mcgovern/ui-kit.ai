import type { ComponentProps } from 'react'
import type {
    DisclosurePanelProps as RACDisclosurePanelProps,
    DisclosureProps as RACDisclosureProps,
} from 'react-aria-components'

import { ChevronRightIcon } from 'lucide-react'
import {
    Disclosure as RACDisclosure,
    DisclosurePanel as RACDisclosurePanel,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { Button } from './button'

/**
 * A disclosure component that shows and hides content when triggered.
 */
export function Disclosure({ children, className, ...props }: RACDisclosureProps) {
    return (
        <RACDisclosure
            {...props}
            className={(renderProps) =>
                twMerge(
                    'flex flex-col gap-2 w-full group',
                    typeof className === 'function' ? className(renderProps) : className
                )
            }
        >
            {children}
        </RACDisclosure>
    )
}
Disclosure.displayName = 'Disclosure'

/**
 * The content that appears/disappears when the disclosure is toggled.
 */
export function DisclosurePanel({ children, className, ...props }: RACDisclosurePanelProps) {
    return (
        <RACDisclosurePanel
            {...props}
            className={(renderProps) =>
                twMerge(
                    'text-sm',
                    typeof className === 'function' ? className(renderProps) : className
                )
            }
        >
            {children}
        </RACDisclosurePanel>
    )
}
DisclosurePanel.displayName = 'DisclosurePanel'

/**
 * A button specifically styled for use with disclosure components.
 * Includes a chevron icon that rotates based on open/closed state.
 */
export function DisclosureButton({
    children,
    className,
    variant = 'tertiary',
    ...props
}: ComponentProps<typeof Button>) {
    return (
        <Button
            {...props}
            className={(renderProps) =>
                twMerge(
                    'w-full justify-start',
                    typeof className === 'function' ? className(renderProps) : className
                )
            }
            slot='trigger'
            slotLeft={
                <ChevronRightIcon className='transition-transform duration-100 ease-out group-expanded:rotate-90' />
            }
            variant={variant}
        >
            {children}
        </Button>
    )
}
DisclosureButton.displayName = 'DisclosureButton'
