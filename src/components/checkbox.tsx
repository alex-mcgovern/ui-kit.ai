import type { CheckboxProps as CheckboxBaseProps } from "react-aria-components";

import { Check as IconCheck, Minus as IconMinus } from "lucide-react";
import React from "react";
import {
    Checkbox as AriaCheckbox,
    composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "../styles/focus-ring";

///////////////////////////////////////////////////
// Styles
///////////////////////////////////////////////////

const checkboxStyles = tv({
    base: [
        "flex items-center gap-3",
        "-mx-1 px-1",
        "hover:cursor-pointer disabled:cursor-not-allowed",
        `group/checkbox -mx-1 rounded-sm text-base text-primary outline-offset-2
        transition invalid:text-red-900`,
    ],
    extend: focusRing,
    variants: {
        isDisabled: {
            false: "",
            true: "text-gray-600",
        },
    },
});

const boxStyles = tv({
    base: [
        "bg-base",
        "border border-gray-200",
        "group-invalid/checkbox:border-red-900",
        // "group-disabled/checkbox:border-gray-600",
        "size-4",
        "transition-colors",
        "flex flex-shrink-0 items-center justify-center",
        "rounded-sm",
        // hover styles
        // "group-hover/checkbox:bg-gray-100",
        "group-hover/checkbox:border-gray-400",
        // hover styles when in table row
        // "group-hover/row:bg-gray-100",
        // "group-hover/row:border-gray-300",
        // selected styles
        "group-selected/checkbox:bg-gray-700",
        "group-selected/checkbox:group-hover/checkbox:bg-gray-600",
        "group-selected/checkbox:border-gray-700",
        "group-selected/checkbox:group-hover/checkbox:border-gray-600",
        // indeterminate styles
        "group-indeterminate/checkbox:bg-gray-700",
        "group-indeterminate/checkbox:group-hover/checkbox:bg-gray-600",
        "group-indeterminate/checkbox:border-gray-700",
        "group-indeterminate/checkbox:group-hover/checkbox:border-gray-600",
        // `relative bg-transparent [--color:theme(colors.gray.800)]
    ],
});

const iconStyles = tv({
    base: [
        "size-3",
        "transition-colors",
        "stroke-transparent",
        // hover
        "group-hover/checkbox:stroke-gray-400",
        "group-hover/row:stroke-gray-400",
        "group-selected/checkbox:stroke-gray-50",
        "group-indeterminate/checkbox:stroke-gray-50",
        "group-invalid/checkbox:bg-red-900",
    ],
});

///////////////////////////////////////////////////
// Types
///////////////////////////////////////////////////

export interface CheckboxProps extends CheckboxBaseProps {
    textPosition?: "left" | "right";
}

///////////////////////////////////////////////////
// Components
///////////////////////////////////////////////////

export function Checkbox({ textPosition = "right", ...props }: CheckboxProps) {
    return (
        <AriaCheckbox
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    checkboxStyles({ ...renderProps, className }),
            )}
        >
            {({ isIndeterminate }) => (
                <>
                    {textPosition === "left" && props.children}

                    <div className={boxStyles()}>
                        {isIndeterminate ? (
                            <IconMinus aria-hidden className={iconStyles()} />
                        ) : (
                            <IconCheck aria-hidden className={iconStyles()} />
                        )}
                    </div>
                    {textPosition === "right" && props.children}
                </>
            )}
        </AriaCheckbox>
    );
}
