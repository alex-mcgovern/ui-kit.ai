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
        '[&:has([data-slot="slot-left"])]:pl-2',
        '[&:has([data-slot="slot-right"])]:pr-2',
        // icon styles
        "[&_svg]:size-3 [&_svg]:shrink-0",
    ],
    compoundVariants: [
        {
            className: `border-red-800 bg-red-800 hover:border-red-700 hover:bg-red-700
            pressed:border-red-900 pressed:bg-red-900`,
            isDestructive: true,
            variant: "primary",
        },
        {
            className: `border-red-700 text-red-900 hover:border-red-800 hover:bg-red-100
            pressed:bg-red-200`,
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
                "border-gray-800 bg-gray-800",
                // hover
                "hover:border-gray-700 hover:bg-gray-700",
                // pressed
                "pressed:border-gray-900 pressed:bg-gray-900",
                `disabled:text-disabled text-white shadow-sm disabled:border-gray-200
                disabled:bg-base`,
            ],
            secondary: [
                // base
                "shadow-sm",
                "border-gray-200 bg-base text-primary",
                // hover
                "hover:border-gray-300 hover:bg-gray-100",
                // pressed
                "pressed:border-gray-300 pressed:bg-gray-100",
                "disabled:text-disabled disabled:border-gray-200 disabled:bg-base",
            ],
            tertiary: [
                `disabled:text-disabled border-transparent bg-transparent text-primary
                hover:bg-gray-100 disabled:bg-transparent`,
                "pressed:bg-gray-100",
            ],
        },
    },
});

type ButtonCommonProps = {
    isDestructive?: boolean;
    isIcon?: boolean;
    slotLeft?: SlotNode;
    slotRight?: SlotNode;
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
                <Loader className="!size-5" />
            </div>
        </div>
    ) : (
        children
    );

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            isDestructive,
            isIcon,
            isPending,
            slotLeft,
            slotRight,
            variant,
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
