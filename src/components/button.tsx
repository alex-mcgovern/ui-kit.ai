import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import { forwardRef } from "react";
import {
    composeRenderProps,
    Button as RACButton,
    Link as RACLink,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "../styles/focus-ring";
import { renderSlot, type SlotNode } from "../types/slotted-node";
import { Loader } from "./loader";

export const BUTTON_VARIANTS = ["primary", "secondary", "tertiary"] as const;
type ButtonVariantType = (typeof BUTTON_VARIANTS)[number];

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
        "disabled:opacity-25",
    ],
    compoundVariants: [
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
                "border-red-700 text-error",
                "hover:border-red-800 hover:bg-red-50 pressed:bg-red-200",
            ],
            isDestructive: true,
            variant: "secondary",
        },
        {
            className: "text-red-900 hover:bg-red-100 pressed:bg-red-200",
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
        isIcon: {
            true: "aspect-square w-[theme(height.ui-element)] px-2 [&_svg]:mx-auto",
        },
        variant: {
            primary: [
                "text-white",
                "shadow-sm",
                "border-gray-800 bg-gray-800",
                // hover
                "hover:border-gray-700 hover:bg-gray-700",
                // pressed
                "pressed:border-gray-900 pressed:bg-gray-900",
            ],
            secondary: [
                // base
                "shadow-sm",
                "border-gray-200 bg-base text-primary",
                // hover
                "hover:border-gray-300 hover:bg-gray-100",
                // pressed
                "pressed:border-gray-300 pressed:bg-gray-100",
            ],
            tertiary: [
                "border-transparent bg-transparent text-primary hover:bg-gray-100",
                "pressed:bg-gray-100",
            ],
        },
    },
});

type ButtonCommonProps = {
    /**
     * When set to `true` the Button will styled in red, to denote a destructive action.
     */
    isDestructive?: boolean;
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
    variant?: ButtonVariantType;
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
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 * [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```tsx
 * import { Button } from "boondoggle";
 *
 * <Button>Button</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            isDestructive,
            isIcon = false,
            isPending,
            slotLeft,
            slotRight,
            variant = "primary",
            ...props
        },
        ref,
    ) => {
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
                            // className: "max-h-5 min-w-5",
                            "data-slot": "slot-left",
                        })}

                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}

                        {renderSlot(slotRight, {
                            // className: "max-h-5 min-w-5",
                            "data-slot": "slot-right",
                        })}
                    </ButtonLoadingState>
                )}
            </RACButton>
        );
    },
);

export const LinkButton = forwardRef<
    HTMLAnchorElement,
    RACLinkProps & {
        isDestructive?: boolean;
        isIcon?: boolean;
        variant?: ButtonVariantType;
    }
>(({ isDestructive, isIcon, variant, ...props }, ref) => {
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
                        isIcon,
                        variant,
                    }),
            )}
            ref={ref}
        />
    );
});
