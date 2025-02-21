import type { HTMLProps } from "react";
import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";
import { Button as RACButton, Link as RACLink } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../styles/focus-ring";
import { forwardRef } from "../lib/forward-ref";

type Variant = "default" | "warning" | "caution" | "inverted";

type TagProps = {
    /**
     * The visual appearance of the tag.
     */
    variant?: Variant;
    /**
     * Adds an optional dashed border to the tag.
     */
    isDashed?: boolean;

    /**
     * The size of the tag.
     */
    size?: "sm" | "md";
};

const tagStyles = tv({
    extend: focusRing,
    base: [
        `inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border
        text-center text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0`,
    ],
    defaultVariants: {
        variant: "default",
        isDashed: false,
        size: "md",
    },
    variants: {
        isDashed: {
            true: "border-dashed",
            false: "border-solid",
        },
        variant: {
            default: [
                "border-gray-400 bg-base text-secondary",
                "[&:is(a,button)]:hover:border-gray-500 [&:is(a,button)]:hover:bg-gray-100",
                "[&:is(a,button)]:pressed:bg-gray-200",
                "group-invalid:text-invalid group-invalid:border-red-900 group-invalid:bg-red-50",
                "group-invalid:[&:is(a,button)]:hover:bg-red-100",
                "group-invalid:[&:is(a,button)]:pressed:bg-red-200",
            ],
            warning: `border-red-900 bg-red-50 text-red-900 [&:is(a,button)]:hover:bg-red-100
            [&:is(a,button)]:pressed:bg-red-200`,
            caution: `border-yellow-800 bg-yellow-50 text-yellow-900
            [&:is(a,button)]:hover:bg-yellow-100 [&:is(a,button)]:pressed:bg-yellow-200`,
            inverted: `text-inverse border-gray-900 bg-gray-900 [&:is(a,button)]:hover:border-gray-800
            [&:is(a,button)]:hover:bg-gray-800 [&:is(a,button)]:pressed:border-gray-700
            [&:is(a,button)]:pressed:bg-gray-700`,
        },
        size: {
            sm: "h-5 min-w-6 p-1.5 text-xs",
            md: "h-7 min-w-8 p-2.5 text-sm",
        },
    },
});

/**
 * Tag component
 */
export const Tag = forwardRef<
    HTMLDivElement,
    TagProps & Omit<HTMLProps<HTMLDivElement>, "size">
>(({ size, children, className, variant, isDashed, ...props }, ref) => {
    return (
        <div
            {...props}
            className={tagStyles({ variant, isDashed, className, size })}
            ref={ref}
        >
            {children}
        </div>
    );
});

/**
 * Tag button component
 */
export const TagButton = forwardRef<
    HTMLButtonElement,
    TagProps & RACButtonProps
>(({ size, children, className, variant, isDashed, ...props }, ref) => {
    return (
        <RACButton
            {...props}
            className={(rp) =>
                tagStyles({
                    variant,
                    isDashed,
                    size,
                    className:
                        typeof className === "function"
                            ? className(rp)
                            : className,
                })
            }
            ref={ref}
        >
            {children}
        </RACButton>
    );
});

/**
 * Tag button component
 */
export const TagLink = forwardRef<HTMLAnchorElement, TagProps & RACLinkProps>(
    ({ size, children, className, variant, isDashed, ...props }, ref) => {
        return (
            <RACLink
                {...props}
                className={(rp) =>
                    tagStyles({
                        variant,
                        isDashed,
                        size,
                        className:
                            typeof className === "function"
                                ? className(rp)
                                : className,
                    })
                }
                ref={ref}
            >
                {children}
            </RACLink>
        );
    },
);
