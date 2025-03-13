import type { CheckboxGroupProps as AriaCheckboxGroupProps } from "react-aria-components";

import React, { forwardRef } from "react";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { genericForwardRef } from "../lib/forward-ref";

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 *
 * It can be composed with a Label and Description to correctly label the input
 * to assistive technologies, and provide extra context.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/checkbox-group)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)
 *
 * ## Usage
 * ```tsx
 * import { Checkbox, CheckboxGroup } from "boondoggle"
 * ```
 * ```tsx
 * <CheckboxGroup>
 *     <Checkbox
 *         value="item-1"
 *         label="Item 1"
 *     />
 *     <Checkbox
 *         value="item-2"
 *         label="Item 2"
 *     />
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup = forwardRef<
    HTMLDivElement,
    AriaCheckboxGroupProps
>((props) => {
    return (
        <AriaCheckboxGroup
            {...props}
            className={(renderProps) =>
                twMerge(
                    "group",
                    typeof props.className === "function"
                        ? props.className(renderProps)
                        : props.className,
                )
            }
        >
            {props.children}
        </AriaCheckboxGroup>
    );
});
CheckboxGroup.displayName = "CheckboxGroup";
