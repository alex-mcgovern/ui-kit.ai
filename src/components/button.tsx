import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import { type ForwardedRef } from "react";
import {
    composeRenderProps,
    Button as RACButton,
    Link as RACLink,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "../styles/focus-ring";
import {
    renderSlot,
    type SlotNode,
} from "../types/slotted-node";
import { Loader } from "./loader";

const buttonStyle = tv({
    base: [
        "rounded",
        "border",
        "inline-flex shrink-0 items-center justify-center gap-1.5",
        "h-ui-element",
        "text-center text-sm font-medium",
        "cursor-pointer",
        "transition-colors",
        // padding
        "px-4 py-2",
        "[&:has([data-slot=slot-left])]:pl-3",
        "[&:has([data-slot=slot-right])]:pr-3",
        // icon styles
        "[&_svg]:size-3 [&_svg]:shrink-0",
        // disabled
        "disabled:cursor-not-allowed",
        "disabled:opacity-disabled",
    ],
    compoundVariants: [
        ///////////////////////////////////////////////////
        // Primary
        ///////////////////////////////////////////////////
        {
            className: [
                "border-red-700 bg-red-700",
                "hover:border-red-600 hover:bg-red-600",
                "pressed:border-red-900 pressed:bg-red-900",
            ],
            isDestructive: true,
            variant: "primary",
        },
        {
            className: [
                "text-primary",
                "border-brand-50 bg-brand-50",
                // hover
                "hover:border-brand-200 hover:bg-brand-200",
                // pressed
                "pressed:border-brand-300 pressed:bg-brand-300",
            ],
            isInverted: true,
            variant: "primary",
        },
        {
            className: [
                "text-invalid",
                "border-red-50 bg-red-50",
                "hover:border-red-50/90 hover:bg-red-50/90",
                "pressed:border-red-50/80 pressed:bg-red-50/80",
            ],
            isInverted: true,
            isDestructive: true,
            variant: "primary",
        },
        ///////////////////////////////////////////////////
        // Secondary
        ///////////////////////////////////////////////////
        {
            className: [
                "border-red-700 text-invalid",
                "hover:border-red-600 hover:bg-red-50 pressed:bg-red-100",
            ],
            isDestructive: true,
            variant: "secondary",
        },
        {
            className: [
                // base
                "border-brand-400 bg-transparent text-brand-50",
                // hover
                "hover:border-brand-300 hover:bg-brand-50/10",
                // pressed
                "pressed:border-brand-600 pressed:bg-brand-900",
            ],
            isInverted: true,
            variant: "secondary",
        },
        {
            className: [
                "border-red-50/50 bg-transparent text-red-50",
                "hover:border-red-50/60 hover:bg-red-50/10",
                "pressed:border-red-50/50 pressed:bg-transparent",
            ],
            isInverted: true,
            isDestructive: true,
            variant: "secondary",
        },
        ///////////////////////////////////////////////////
        // Tertiary
        ///////////////////////////////////////////////////
        {
            className: [
                "text-invalid",
                "hover:bg-red-50 pressed:bg-red-100",
            ],
            isDestructive: true,
            variant: "tertiary",
        },
        {
            className: [
                "border-transparent bg-transparent text-brand-50",
                // hover
                "hover:border-brand-800 hover:bg-brand-800",
                // pressed
                "pressed:bg-transparent",
            ],
            isInverted: true,
            variant: "tertiary",
        },
        {
            className: [
                "border-transparent bg-transparent text-red-50",
                // hover
                "hover:border-red-800 hover:bg-red-800",
                // pressed
                "pressed:bg-transparent",
            ],
            isInverted: true,
            isDestructive: true,
            variant: "tertiary",
        },
    ],
    defaultVariants: {
        variant: "primary",
    },
    extend: focusRing,
    variants: {
        isDestructive: {
            true: null,
        },
        isInverted: {
            true: null,
        },
        isIcon: {
            true: `aspect-square w-[theme(height.ui-element)] px-2
            [&_svg]:mx-auto`,
        },
        variant: {
            primary: [
                "text-muted-50",
                "shadow-sm",
                "border-brand-700 bg-brand-700",
                // hover
                "hover:border-brand-600 hover:bg-brand-600",
                // pressed
                "pressed:border-brand-800 pressed:bg-brand-800",
            ],
            secondary: [
                // base
                "shadow-sm",
                "border-muted-200 bg-base text-primary",
                // hover
                "hover:border-muted-300 hover:bg-muted-100",
                // pressed
                "pressed:border-muted-300 pressed:bg-muted-200",
            ],
            tertiary: [
                "border-transparent bg-transparent text-primary",
                // hover
                "hover:bg-muted-100",
                // pressed
                "pressed:bg-muted-200",
            ],
        },
    },
});

type ButtonCommonProps = {
    /**
     * When `isDestructive` is set to `true` the Button will styled in red, to denote a destructive action.
     */
    isDestructive?: boolean;
    /**
     * When `isInverted` is set to `true` light colors are dark, and vice/versa.
     */
    isInverted?: boolean;
    /**
     * When set to `true` the Button will be styled to be square with a fixed
     * height & width. This should be used in conjunction with passing an icon
     * component to the `children` prop.
     *
     * **Note**: If you aren't passing text to the `children` prop, ensure you
     * are passing an `aria-label` attribute, so the Button is correctly
     * labelled to assistive technologies.
     */
    isIcon?: boolean;
    /**
     * A decorative node (e.g. an icon) to render on the left side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotLeft?: SlotNode;
    /**
     * A decorative node (e.g. an icon) to render on the right side of the
     * Button. When a node is passed, the padding on the corresponding side is
     * slightly reduced to maintain visual balance.
     */
    slotRight?: SlotNode;
    /**
     * - **`primary`**: The main action button. Use this for the most important actions on a page, such as "Submit," "Save," or "Continue."
     * - **`secondary`**: A less prominent button used for secondary actions, like "Cancel" or "Go Back." It should not compete visually with primary buttons.
     * - **`tertiary`**: A minimal-styled button for low-emphasis actions. Use this for links, "Learn More" buttons, or actions that don't require strong visual weight.
     */
    variant?: "primary" | "secondary" | "tertiary";
};

type ButtonProps = ButtonCommonProps & RACButtonProps;

const ButtonLoadingState = ({
    children,
    isPending,
}: {
    children: React.ReactNode;
    isPending?: boolean;
}) =>
    isPending === true ? (
        <div className="relative">
            <div aria-hidden className="opacity-0">
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Loader className="!size-4" />
            </div>
        </div>
    ) : (
        children
    );

/**
 * A button allows a user to perform an action, with mouse, touch, and
 * keyboard interactions.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/button)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Button.html)
 *
 * ## Usage
 *
 * ```tsx
 * import { Button } from "boondoggle"
 * ```
 * ```tsx
 * <Button>Press me</Button>
 * ```
 */
export function Button({
    isDestructive,
    isInverted,
    isIcon = false,
    isPending,
    slotLeft,
    slotRight,
    ref,
    variant = "primary",
    ...props
}: ButtonProps & {
    ref?: ForwardedRef<HTMLButtonElement>;
}) {
    return (
        <RACButton
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    buttonStyle({
                        ...renderProps,
                        // isLink,
                        className,
                        isDestructive,
                        isInverted,
                        isIcon,
                        variant,
                    }),
            )}
            isPending={isPending}
            ref={ref}
        >
            {(renderProps) => (
                <ButtonLoadingState isPending={isPending}>
                    {renderSlot(slotLeft, {
                        "data-slot": "slot-left",
                    })}

                    {typeof props.children === "function"
                        ? props.children(renderProps)
                        : props.children}

                    {renderSlot(slotRight, {
                        "data-slot": "slot-right",
                    })}
                </ButtonLoadingState>
            )}
        </RACButton>
    );
}
Button.displayName = "Button";

type LinkButtonProps = ButtonCommonProps &
    RACLinkProps & {
        ref?: ForwardedRef<HTMLAnchorElement>;
    };

export const LinkButton = ({
    isDestructive,
    isIcon,
    variant,
    isInverted,
    ref,
    ...props
}: LinkButtonProps) => {
    return (
        <RACLink
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    buttonStyle({
                        ...renderProps,
                        className,
                        isDestructive,
                        isInverted,
                        isIcon,
                        variant,
                    }),
            )}
            ref={ref}
        />
    );
};
LinkButton.displayName = "LinkButton";
