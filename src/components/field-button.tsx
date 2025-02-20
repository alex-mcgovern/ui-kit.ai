import type { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

import { Button } from "./button";

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Button.html
 * @see https://react-spectrum.adobe.com/react-aria/advanced.html#slots
 */
export function FieldButton({
    ...props
}: Omit<
    ComponentProps<typeof Button>,
    "excludeFromTabOrder" | "isIcon" | "variant"
>) {
    return (
        <Button
            isIcon
            variant="tertiary"
            {...props}
            className={(rp) =>
                twMerge(
                    "!size-6",
                    "align-middle",
                    "group-invalid:text-invalid text-secondary",
                    "group-invalid:hover:bg-red-50 group-invalid:pressed:bg-red-50",
                    "last-of-type:mr-1 [&:not(:last-of-type)]:mr-px",
                    "[&_svg]:size-3 [&_svg]:shrink-0",
                    typeof props.className === "function"
                        ? props.className(rp)
                        : props.className,
                )
            }
            excludeFromTabOrder
        />
    );
}
