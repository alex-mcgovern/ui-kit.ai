import type { FieldErrorProps as RACFieldErrorProps } from "react-aria-components";

import { forwardRef } from "react";
import { FieldError as RACFieldError } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * A FieldError displays validation errors.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/description)
 *
 * ## Usage
 * ```tsx
 * import { FieldError } from "boondoggle"
 * ```
 * ```tsx
 * <FieldError>Your error message here</FieldError>
 * ```
 */
export const FieldError = forwardRef<
    HTMLDivElement,
    RACFieldErrorProps
>((props, ref) => {
    return (
        <RACFieldError
            {...props}
            className={(renderProps) =>
                twMerge(
                    "block text-sm font-medium text-invalid",
                    "mt-1",
                    typeof props.className === "function"
                        ? props.className(renderProps)
                        : props.className,
                )
            }
            ref={ref}
        />
    );
});
