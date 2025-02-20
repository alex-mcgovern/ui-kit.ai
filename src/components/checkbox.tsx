import type {
    CheckboxProps as AriaCheckboxProps,
    CheckboxGroupProps as AriaCheckboxGroupProps,
} from "react-aria-components";

import { Check as IconCheck, Minus as IconMinus } from "lucide-react";
import React from "react";
import {
    Checkbox as AriaCheckbox,
    composeRenderProps,
    CheckboxGroup as AriaCheckboxGroup,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../styles/focus-ring";
import { twMerge } from "tailwind-merge";
import { Label } from "./label";
import { i18n } from "../i18n";
import { Tag } from "./tag";
import { Description } from "./description";

type CheckboxProps = Omit<AriaCheckboxProps, "children"> &
    (
        | {
              textPosition?: "left" | "right";
              label: string;
              description?: string;
          }
        | {
              textPosition?: never;
              label?: never;
              description?: string;
          }
    );

const checkboxContainerStyles = tv({
    base: [
        "flex gap-3",
        "items-center",
        // "items-start",
        "has-[[slot='description']]:items-start",
        // "[:has([slot=description])]:items-start",
        "-mx-1 px-1",
        "group/checkbox",
        "[[role=group]_&]:mb-1",
        "[[role=group]_&]:last-of-type:mb-2",
        "hover:cursor-pointer disabled:cursor-not-allowed",
        "rounded-sm outline-offset-2 transition invalid:text-red-900",
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
        "border border-gray-400",
        "size-4",
        "transition-colors",
        "flex flex-shrink-0 items-center justify-center",
        "rounded-sm",
        // disabled
        "group-disabled/checkbox:opacity-50",
        // hover
        "group-hover/checkbox:bg-gray-100",
        "group-hover/checkbox:border-gray-400",

        // selected
        "group-selected/checkbox:bg-gray-700",
        "group-selected/checkbox:group-hover/checkbox:bg-gray-600",
        "group-selected/checkbox:border-gray-700",
        "group-selected/checkbox:group-hover/checkbox:border-gray-600",
        // indeterminate
        "group-indeterminate/checkbox:bg-gray-700",
        "group-indeterminate/checkbox:group-hover/checkbox:bg-gray-600",
        "group-indeterminate/checkbox:border-gray-700",
        "group-indeterminate/checkbox:group-hover/checkbox:border-gray-600",
        // invalid
        "group-invalid/checkbox:border-red-600",
        "group-hover/checkbox:group-invalid/checkbox:bg-red-100",
        "group-hover/checkbox:group-invalid/checkbox:border-red-700",
        // invalid selected
        "group-selected/checkbox:group-invalid/checkbox:bg-red-700",
        "group-selected/checkbox:group-invalid/checkbox:group-hover/checkbox:bg-red-600",
        "group-selected/checkbox:group-invalid/checkbox:border-red-700",
        "group-selected/checkbox:group-invalid/checkbox:group-hover/checkbox:border-red-600",
        // invalid indeterminate
        "group-indeterminate/checkbox:group-invalid/checkbox:bg-red-700",
        "group-indeterminate/checkbox:group-invalid/checkbox:group-hover/checkbox:bg-red-600",
        "group-indeterminate/checkbox:group-invalid/checkbox:border-red-700",
        "group-indeterminate/checkbox:group-invalid/checkbox:group-hover/checkbox:border-red-600",
        // w. description
        "group-has-[[slot='description']]/checkbox:mt-1",
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
        // invalid
        "group-hover/checkbox:group-invalid/checkbox:stroke-red-400",
        "group-hover/row:group-invalid/checkbox:stroke-red-400",
        "group-selected/checkbox:group-invalid/checkbox:stroke-red-50",
        "group-indeterminate/checkbox:group-invalid/checkbox:stroke-red-50",
    ],
});

export function CheckboxGroup(props: AriaCheckboxGroupProps) {
    return (
        <AriaCheckboxGroup
            {...props}
            className={(renderProps) =>
                twMerge(
                    "group/checkbox-group",
                    typeof props.className === "function"
                        ? props.className(renderProps)
                        : props.className,
                )
            }
        >
            {props.children}
        </AriaCheckboxGroup>
    );
}

function CheckboxLabel({
    label,
    isRequired,
    description,
}: {
    label: string;
    isRequired: boolean;
    description?: string;
}) {
    return (
        <div>
            <Label className="mb-0 flex items-center gap-1">
                {label}
                {isRequired ? <Tag size="sm">{i18n.form.required}</Tag> : null}
            </Label>
            {description ? <Description>{description}</Description> : null}
        </div>
    );
}

export function Checkbox({
    textPosition = "right",
    label,
    description,
    ...props
}: CheckboxProps) {
    return (
        <AriaCheckbox
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    checkboxContainerStyles({ ...renderProps, className }),
            )}
        >
            {(renderProps) => (
                <>
                    {textPosition === "left" && label != null ? (
                        <CheckboxLabel
                            label={label}
                            isRequired={renderProps.isRequired}
                            description={description}
                        />
                    ) : null}

                    <div className={boxStyles()}>
                        {renderProps.isIndeterminate ? (
                            <IconMinus aria-hidden className={iconStyles()} />
                        ) : (
                            <IconCheck aria-hidden className={iconStyles()} />
                        )}
                    </div>

                    {textPosition === "right" && label != null ? (
                        <CheckboxLabel
                            label={label}
                            isRequired={renderProps.isRequired}
                            description={description}
                        />
                    ) : null}
                </>
            )}
        </AriaCheckbox>
    );
}
