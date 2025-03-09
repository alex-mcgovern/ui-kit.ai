import type { HTMLProps } from "react";
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
import { genericForwardRef } from "../lib/forward-ref";
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
        "[&:has([data-slot=slot-left])]:pl-2.5",
        "[&:has([data-slot=slot-right])]:pr-2.5",
        // color vars
        "[--bg:theme(colors.gray.50)]",
        "[--bg-hover:theme(colors.gray.100)]",
        "[--bg-pressed:theme(colors.gray.200)]",
        "[--border:theme(colors.gray.300)]",
        "[--text:theme(colors.gray.500)]",
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
                "border-gray-800 bg-gray-800 text-gray-50",
                "[&:is(a,button)]:hover:border-gray-800",
                "[&:is(a,button)]:hover:bg-gray-800",
                "[&:is(a,button)]:pressed:border-gray-700",
                "[&:is(a,button)]:pressed:bg-gray-700",
            ],
        },
    },
});

/**
 * Tag component
 */
export const Tag = genericForwardRef<
    HTMLDivElement,
    TagProps & HTMLProps<HTMLDivElement>
>(
    (
        {
            children,
            className,
            slotLeft,
            slotRight,
            variant,
            isDashed,
            ...props
        },
        ref,
    ) => {
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
    },
);

/**
 * Tag button component
 */
export const TagButton = genericForwardRef<
    HTMLButtonElement,
    TagProps & RACButtonProps
>(
    (
        {
            children,
            className,
            variant,
            isDashed,
            slotLeft,
            slotRight,
            ...props
        },
        ref,
    ) => {
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
    },
);

/**
 * Tag button component
 */
export const TagLink = genericForwardRef<
    HTMLAnchorElement,
    TagProps & RACLinkProps
>(
    (
        {
            children,
            className,
            slotLeft,
            slotRight,
            variant,
            isDashed,
            ...props
        },
        ref,
    ) => {
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
    },
);
