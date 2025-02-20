import type { FieldErrorProps as RACFieldErrorProps } from "react-aria-components";

import { forwardRef } from "react";
import { FieldError as RACFieldError } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const FieldError = forwardRef<HTMLDivElement, RACFieldErrorProps>(
    (props, ref) => {
        return (
            <RACFieldError
                {...props}
                className={(renderProps) =>
                    twMerge(
                        "text-invalid block text-sm font-medium",
                        "mt-1",
                        typeof props.className === "function"
                            ? props.className(renderProps)
                            : props.className,
                    )
                }
                ref={ref}
            />
        );
    },
);
