import type { GroupProps as RACGroupProps } from "react-aria-components";

import { focusRingRecipe, sizeRecipe } from "@boondoggle.design/css-recipes";
import { FieldVariant, SizeVariant } from "@boondoggle.design/css-types";
import clsx from "clsx";
import { forwardRef } from "react";
import { Group as RACGroup } from "react-aria-components";

import { fieldGroupBaseStyle } from "../styles/field-group.css";
import { fieldGroupVariantRecipe } from "../styles/field-group-variant-recipe.css";

export interface FieldGroupProps extends RACGroupProps {
    size?: SizeVariant;
    variant?: FieldVariant;
}

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Group.html)
 */
export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
    ({ size = SizeVariant.MD, variant = "default", ...props }, ref) => {
        return (
            <RACGroup
                {...props}
                className={clsx(
                    fieldGroupBaseStyle,
                    sizeRecipe({ size }),
                    focusRingRecipe({ variant: "inset" }),
                    fieldGroupVariantRecipe({ variant }),
                    props.className,
                )}
                ref={ref}
            />
        );
    },
);
