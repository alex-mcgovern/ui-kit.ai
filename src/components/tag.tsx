import { type ForwardedRef, type HTMLProps } from "react";
import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";
import {
    Button as RACButton,
    Link as RACLink,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../styles/focus-ring";
import {
    renderSlot,
    type SlotNode,
} from "../types/slotted-node";

type Variant =
    | "default"
    | "yellow"
    | "red"
    | "inverted"
    | "green";

type TagProps = {
    /**
     * Whether the tag is a Button.
     */
    isButton?: boolean;
    /**
     * Whether the tag is a Link.
     */
    isLink?: boolean;
    /**
     * The visual appearance of the tag.
     */
    variant?: Variant;
    /**
     * Adds an optional dashed border to the tag.
     */
    isDashed?: boolean;
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
};

const tagStyles = tv({
    extend: focusRing,
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
        variant: "default",
        isDashed: false,
    },
    variants: {
        isDashed: {
            true: "border-dashed",
            false: "border-solid",
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
            inverted: [
                "border-muted-800 bg-muted-800 text-muted-50",
                "[&:is(a,button)]:hover:border-muted-800",
                "[&:is(a,button)]:hover:bg-muted-800",
                "[&:is(a,button)]:pressed:border-muted-700",
                "[&:is(a,button)]:pressed:bg-muted-700",
            ],
        },
    },
});

/**
 * Tag component
 */
export const Tag = ({
    children,
    className,
    slotLeft,
    slotRight,
    variant,
    isDashed,
    ref,
    ...props
}: TagProps &
    HTMLProps<HTMLDivElement> & {
        ref?: ForwardedRef<HTMLDivElement>;
    }) => {
    return (
        <div
            {...props}
            className={tagStyles({
                variant,
                isDashed,
                className,
            })}
            ref={ref}
        >
            {renderSlot(slotLeft, {
                "data-slot": "slot-left",
            })}
            {children}

            {renderSlot(slotRight, {
                "data-slot": "slot-right",
            })}
        </div>
    );
};
Tag.displayName = "Tag";

/**
 * Tag button component
 */
export function TagButton({
    children,
    className,
    variant,
    isDashed,
    slotLeft,
    slotRight,
    ref,
    ...props
}: TagProps &
    RACButtonProps & {
        ref?: ForwardedRef<HTMLButtonElement>;
    }) {
    return (
        <RACButton
            {...props}
            className={(rp) =>
                tagStyles({
                    variant,
                    isDashed,
                    className:
                        typeof className === "function"
                            ? className(rp)
                            : className,
                })
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        "data-slot": "slot-left",
                    })}
                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {renderSlot(slotRight, {
                        "data-slot": "slot-right",
                    })}
                </>
            )}
        </RACButton>
    );
}
TagButton.displayName = "TagButton";

/**
 * Tag button component
 */
export const TagLink = ({
    children,
    className,
    slotLeft,
    slotRight,
    variant,
    ref,
    isDashed,
    ...props
}: TagProps &
    RACLinkProps & {
        ref?: ForwardedRef<HTMLAnchorElement>;
    }) => {
    return (
        <RACLink
            {...props}
            className={(rp) =>
                tagStyles({
                    variant,
                    isDashed,
                    className:
                        typeof className === "function"
                            ? className(rp)
                            : className,
                })
            }
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {renderSlot(slotLeft, {
                        "data-slot": "slot-left",
                    })}
                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {renderSlot(slotRight, {
                        "data-slot": "slot-right",
                    })}
                </>
            )}
        </RACLink>
    );
};
TagLink.displayName = "TagLink";
