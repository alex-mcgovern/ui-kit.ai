import type { HTMLAttributes } from 'react'

import { cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

export enum Slot {
    LEFT = 'slot-left',
    RIGHT = 'slot-right',
}

export type SlotNode = React.JSX.Element

type SlotNodeProps = HTMLAttributes<HTMLElement> & {
    [key: `data-${string}`]: unknown
}

export function renderSlot(node: SlotNode | undefined, props: SlotNodeProps) {
    if (!node) return null

    return cloneElement(node, {
        ...node.props,
        ...props,
        className: twMerge(node.props.className, props.className),
    })
}
