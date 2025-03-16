import type { FieldErrorProps as RACFieldErrorProps } from "react-aria-components";

import { type ForwardedRef } from "react";
import { FieldError as RACFieldError } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * A FieldError displays validation errors.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/description)
 *
 * ## Usage
 *
 * ```tsx
 * import { FieldError } from "ui-kit.ai"
 * ```
 * ```tsx
 * <FieldError>Your error message here</FieldError>
 * ```
 */
export function FieldError({
    ref,
    ...props
}: RACFieldErrorProps & {
    ref?: ForwardedRef<HTMLDivElement>;
}) {
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
}
FieldError.displayName = "FieldError";
