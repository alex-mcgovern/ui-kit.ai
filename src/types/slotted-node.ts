import {
    cloneElement,
    type HTMLAttributes,
    type JSXElementConstructor,
    type ReactElement,
} from "react";
import { twMerge } from "tailwind-merge";

type SlotNodeProps = HTMLAttributes<HTMLElement> & {
    [key: `data-${string}`]: unknown;
};

export type SlotNode = ReactElement<
    SlotNodeProps,
    JSXElementConstructor<SlotNodeProps> | string
>;

export function renderSlot(node: SlotNode | undefined, props: SlotNodeProps) {
    if (!node) return null;

    return cloneElement(node, {
        ...node.props,
        ...props,
        className: twMerge(node.props.className, props.className),
    });
}
