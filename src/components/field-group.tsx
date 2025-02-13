import type { GroupProps as RACGroupProps } from "react-aria-components";

import { forwardRef } from "react";
import { composeRenderProps, Group as RACGroup } from "react-aria-components";
import { tv } from "tailwind-variants";

import { fieldVariants } from "../styles/field-variants";

const fieldGroupStyles = tv({
    base: "group flex w-full items-center overflow-hidden text-start",
    extend: fieldVariants,
});

/**
 * A group represents a set of related UI controls, and supports interactive
 * states for styling.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Group.html
 */
export const FieldGroup = forwardRef<
    HTMLDivElement,
    RACGroupProps & { isBorderless?: boolean }
>(({ isBorderless, ...props }, ref) => {
    return (
        <RACGroup
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    fieldGroupStyles({
                        ...renderProps,
                        className,
                        isBorderless,
                    }),
            )}
            ref={ref}
        />
    );
});
