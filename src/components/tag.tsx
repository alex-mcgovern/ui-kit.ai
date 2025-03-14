import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import { type ForwardedRef, type HTMLProps } from "react";
import {
    Button as RACButton,
    Link as RACLink,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "../styles/focus-ring";
import {
    renderSlot,
    Slot,
    type SlotNode,
} from "../types/slotted-node";

export type TagProps = {
    /**
     * Whether the tag is a Button.
     */
    isButton?: boolean;
    /**
     * Adds an optional dashed border to the tag.
     */
    isDashed?: boolean;
    /**
     * Whether the tag is a Link.
     */
    isLink?: boolean;
    /**
     * A decorative node (e.g. an icon) to render on the left side of the
     * Tag. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotLeft?: SlotNode;
    /**
     * A decorative node (e.g. an icon) to render on the right side of the
     * Tag. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotRight?: SlotNode;
    /**
     * The visual appearance of the tag.
     */
    variant?: Variant;
};

type Variant =
    | "default"
    | "green"
    | "inverted"
    | "red"
    | "yellow";

const tagStyles = tv({
    base: [
        "h-6 min-w-6",
        "text-center text-sm font-normal",
        "shadow-sm",
        "inline-flex shrink-0 items-center justify-center gap-1.5",
        "rounded-full border",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        // padding
        "px-3 py-1.5",
        "[&:has([data-slot=slot-left])]:pl-1.5",
        "[&:has([data-slot=slot-right])]:pr-1.5",
        // color vars
        "[--bg:theme(colors.muted.50)]",
        "[--bg-hover:theme(colors.muted.100)]",
        "[--bg-pressed:theme(colors.muted.200)]",
        "[--border:theme(colors.muted.300)]",
        "[--text:theme(colors.muted.500)]",
        // assignment
        "border-[--border] bg-[--bg] text-[--text]",
        // interactivity
        "[&:is(a,button)]:hover:bg-[--bg-hover]",
        "[&:is(a,button)]:pressed:bg-[--bg-pressed]",
    ],
    defaultVariants: {
        isDashed: false,
        variant: "default",
    },
    extend: focusRing,
    variants: {
        isDashed: {
            false: "border-solid",
            true: "border-dashed",
        },
        variant: {
            default: [""],
            green: [
                "[--bg:theme(colors.green.50)]",
                "[--bg-hover:theme(colors.green.100)]",
                "[--bg-pressed:theme(colors.green.200)]",
                "[--border:theme(colors.green.300)]",
                "[--text:theme(colors.green.600)]",
            ],
            inverted: [
                "border-muted-800 bg-muted-800 text-muted-50",
                "[&:is(a,button)]:hover:border-muted-800",
                "[&:is(a,button)]:hover:bg-muted-800",
                "[&:is(a,button)]:pressed:border-muted-700",
                "[&:is(a,button)]:pressed:bg-muted-700",
            ],
            red: [
                "[--bg:theme(colors.red.50)]",
                "[--bg-hover:theme(colors.red.100)]",
                "[--bg-pressed:theme(colors.red.200)]",
                "[--border:theme(colors.red.300)]",
                "[--text:theme(colors.red.600)]",
            ],
            yellow: [
                "[--bg:theme(colors.yellow.50)]",
                "[--bg-hover:theme(colors.yellow.100)]",
                "[--bg-pressed:theme(colors.yellow.200)]",
                "[--border:theme(colors.yellow.300)]",
                "[--text:theme(colors.yellow.600)]",
            ],
        },
    },
});

/**
 * A Tag is a presentational component used to display short snippets of
 * information, often in a group of tags.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/tag)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tooltip.html)
 *
 * ## Usage
 * ```tsx
 * import { Tag } from "boondoggle"
 * ```
 * ```tsx
 * <Tag>Short label</Tag>
 * ```
 *
 * ### Button
 *
 * You can use TagButton when a tag needs to be a button.
 *
 * ```tsx
 * import { TagButton } from "boondoggle"
 * ```
 * ```tsx
 * <TagButton>Short label</TagButton>
 * ```
 *
 * ### Link
 *
 * You can use TagLink when a tag needs to be a link.
 *
 * ```tsx
 * import { TagLink } from "boondoggle"
 * ```
 * ```tsx
 * <TagLink>Short label</TagLink>
 * ```
 */
export function Tag({
    children,
    className,
    isDashed,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: HTMLProps<HTMLDivElement> &
    TagProps & {
        ref?: ForwardedRef<HTMLDivElement>;
    }) {
    return (
        <div
            {...props}
            className={tagStyles({
                className,
                isDashed,
                variant,
            })}
            ref={ref}
        >
            {renderSlot(slotLeft, {
                "data-slot": Slot.LEFT,
            })}
            {children}

            {renderSlot(slotRight, {
                "data-slot": Slot.RIGHT,
            })}
        </div>
    );
}
Tag.displayName = "Tag";

/**
 * A TagButton is a button used to display short snippets of
 * information, often in a group of tags.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/tag)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Button.html)
 *
 * ## Usage
 *
 * ```tsx
 * import { TagButton } from "boondoggle"
 * ```
 * ```tsx
 * <TagButton>Short label</TagButton>
 * ```
 */
export function TagButton({
    children,
    className,
    isDashed,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: RACButtonProps &
    TagProps & {
        ref?: ForwardedRef<HTMLButtonElement>;
    }) {
    return (
        <RACButton
            {...props}
            className={(rp) =>
                tagStyles({
                    className:
                        typeof className === "function"
                            ? className(rp)
                            : className,
                    isDashed,
                    variant,
                })
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        "data-slot": Slot.LEFT,
                    })}
                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {renderSlot(slotRight, {
                        "data-slot": Slot.RIGHT,
                    })}
                </>
            )}
        </RACButton>
    );
}
TagButton.displayName = "TagButton";

/**
 * A TagLink is a link used to display short snippets of
 * information, often in a group of tags.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/tag)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Link.html)
 *
 * ## Usage
 *
 * ```tsx
 * import { TagLink } from "boondoggle"
 * ```
 * ```tsx
 * <TagLink>Short label</TagLink>
 * ```
 */
export const TagLink = ({
    children,
    className,
    isDashed,
    ref,
    slotLeft,
    slotRight,
    variant,
    ...props
}: RACLinkProps &
    TagProps & {
        ref?: ForwardedRef<HTMLAnchorElement>;
    }) => {
    return (
        <RACLink
            {...props}
            className={(rp) =>
                tagStyles({
                    className:
                        typeof className === "function"
                            ? className(rp)
                            : className,
                    isDashed,
                    variant,
                })
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        "data-slot": Slot.LEFT,
                    })}
                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {renderSlot(slotRight, {
                        "data-slot": Slot.RIGHT,
                    })}
                </>
            )}
        </RACLink>
    );
};
TagLink.displayName = "TagLink";
