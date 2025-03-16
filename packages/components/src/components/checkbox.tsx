import type { CheckboxProps as AriaCheckboxProps } from "react-aria-components";

import { Check as IconCheck, Minus as IconMinus } from "lucide-react";
import React from "react";
import {
    Checkbox as AriaCheckbox,
    composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { i18n } from "../i18n";
import { focusRing } from "../styles/focus-ring";
import { Description } from "./description";
import { Label } from "./label";
import { Tag } from "./tag";

type CheckboxProps = Omit<AriaCheckboxProps, "children"> &
    (
        | {
              description?: string;
              label: string;
              textPosition?: "left" | "right";
          }
        | {
              description?: string;
              label?: never;
              textPosition?: never;
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
        "group",
        "[[role=group]_&]:mb-1",
        "[[role=group]_&]:last-of-type:mb-2",
        "hover:cursor-pointer disabled:cursor-not-allowed",
        "rounded-sm outline-offset-2 transition invalid:text-red-900",
    ],
    extend: focusRing,
    variants: {
        isDisabled: {
            false: "",
            true: "text-muted-600",
        },
    },
});

const boxStyles = tv({
    base: [
        "bg-base",
        "border border-muted-400",
        "size-4",
        "transition-colors",
        "flex flex-shrink-0 items-center justify-center",
        "rounded-sm",
        // disabled
        "group-disabled:opacity-disabled",
        // hover
        "group-hover:bg-muted-100",
        "group-hover:border-muted-400",

        // selected
        "group-selected:bg-muted-700",
        "group-selected:group-hover:bg-muted-600",
        "group-selected:border-muted-700",
        "group-selected:group-hover:border-muted-600",
        // indeterminate
        "group-indeterminate:bg-muted-700",
        "group-indeterminate:group-hover:bg-muted-600",
        "group-indeterminate:border-muted-700",
        "group-indeterminate:group-hover:border-muted-600",
        // invalid
        "group-invalid:border-red-600",
        "group-hover:group-invalid:bg-red-50",
        "group-hover:group-invalid:border-red-700",
        // invalid selected
        "group-selected:group-invalid:bg-red-700",
        "group-selected:group-invalid:group-hover:bg-red-600",
        "group-selected:group-invalid:border-red-700",
        "group-selected:group-invalid:group-hover:border-red-600",
        // invalid indeterminate
        "group-indeterminate:group-invalid:bg-red-700",
        "group-indeterminate:group-invalid:group-hover:bg-red-600",
        "group-indeterminate:group-invalid:border-red-700",
        "group-indeterminate:group-invalid:group-hover:border-red-600",
        // w. description
        "group-has-[[slot='description']]:mt-1",
    ],
});

const iconStyles = tv({
    base: [
        "size-3",
        "transition-colors",
        "stroke-transparent",
        // hover
        "group-hover:stroke-muted-400",
        "group-hover/row:stroke-muted-400",
        "group-selected:stroke-muted-50",
        "group-indeterminate:stroke-muted-50",
        // invalid
        "group-hover:group-invalid:stroke-red-400",
        "group-hover/row:group-invalid:stroke-red-400",
        "group-selected:group-invalid:stroke-red-50",
        "group-indeterminate:group-invalid:stroke-red-50",
    ],
});

/**
 * A checkbox allows a user to select multiple items from a list of individual
 * items, or to mark one individual item as selected.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/checkbox)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Checkbox)
 *
 * ## Usage
 *
 * ```tsx
 * import { Checkbox } from "ui-kit.ai"
 * ```
 * ```tsx
 * <Checkbox
 *     label="Checkbox item"
 * />
 * ```
 */
export function Checkbox({
    description,
    label,
    textPosition = "right",
    ...props
}: CheckboxProps) {
    return (
        <AriaCheckbox
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    checkboxContainerStyles({
                        ...renderProps,
                        className,
                    }),
            )}
        >
            {(renderProps) => (
                <>
                    {textPosition === "left" && label != null ? (
                        <CheckboxLabel
                            description={description}
                            isRequired={renderProps.isRequired}
                            label={label}
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
                            description={description}
                            isRequired={renderProps.isRequired}
                            label={label}
                        />
                    ) : null}
                </>
            )}
        </AriaCheckbox>
    );
}
Checkbox.displayName = "Checkbox";

function CheckboxLabel({
    description,
    isRequired,
    label,
}: {
    description?: string;
    isRequired: boolean;
    label: string;
}) {
    return (
        <div>
            <Label className="mb-0 flex items-center gap-1">
                {label}
                {isRequired ? <Tag>{i18n.form.required}</Tag> : null}
            </Label>
            {description != null ? (
                <Description className="!mt-0">{description}</Description>
            ) : null}
        </div>
    );
}
CheckboxLabel.displayName = "CheckboxLabel";
