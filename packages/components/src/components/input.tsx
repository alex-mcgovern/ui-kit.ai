import { type ComponentProps, type ForwardedRef, type ReactNode } from "react";
import { Input as RACInput } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { fieldVariants } from "../styles/field-variants";

const inputStyles = tv({
    base: ["px-3", "text-sm", "w-full", "text-start align-middle"],
    extend: fieldVariants,
    variants: {
        hasIcon: {
            false: "",
            true: "pl-[theme(height.ui-element)]",
        },
    },
});

/**
 * An Input is a primitive component used when composing fields, (e.g.
 * TextField, SearchField, NumberField).
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/src/components/description)
 *
 * ## Usage
 *
 * ```tsx
 * import { Input } from "ui-kit.ai"
 * ```
 * ```tsx
 * <Input placeholder="Type something..." />
 * ```
 */
export const Input = ({
    icon,
    isBorderless,
    ref,
    ...props
}: ComponentProps<typeof RACInput> & {
    icon?: ReactNode;
    isBorderless?: boolean;
    ref?: ForwardedRef<HTMLInputElement>;
}) => {
    return (
        <div className="relative inline-flex w-full items-center">
            {icon != null ? (
                <div
                    className={twMerge(
                        "h-ui-element w-[theme(height.ui-element)]",
                        "absolute inset-x-0 top-0",
                        "flex items-center justify-center",
                        "pointer-events-none",
                        "[&_svg]:size-3 [&_svg]:shrink-0",
                    )}
                >
                    {icon}
                </div>
            ) : null}
            <RACInput
                {...props}
                className={(rp) =>
                    twMerge(
                        inputStyles({
                            ...rp,
                            hasIcon: Boolean(icon),
                            isBorderless,
                        }),
                        typeof props.className === "function"
                            ? props.className(rp)
                            : props.className,
                    )
                }
                ref={ref}
            />
        </div>
    );
};
Input.displayName = "Input";
