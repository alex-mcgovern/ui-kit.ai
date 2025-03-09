import type { HeadingProps as AriaHeadingProps } from "react-aria-components";

import { Heading as AriaHeading } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const heading = tv({
    base: "font-title",
    variants: {
        level: {
            1: "text-5xl font-bold",
            2: "text-4xl font-bold",
            3: "text-3xl font-semibold",
            4: "text-2xl font-semibold",
            5: "text-xl font-semibold",
            6: "text-lg font-semibold",
        },
    },
});

/**
 * A heading renders a semantic heading with pre-determined typography styles
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/heading)
 *
 * ## Usage
 * ```tsx
 * import { Heading } from "boondoggle"
 * ```
 * ```tsx
 * <Heading level={1}>
 *     Lorem ipsum dolor sit amet...
 * </Heading>
 * ```
 */
export function Heading({
    level = 3,
    ...props
}: Omit<AriaHeadingProps, "level"> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
    return (
        <AriaHeading
            {...props}
            className={twMerge(
                heading({ level }),
                "mb-2 text-primary",
                props.className,
            )}
            level={level}
        />
    );
}
