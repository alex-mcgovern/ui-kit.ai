import type { FieldVariant } from "@boondoggle.design/css-types";
import type { ReactNode } from "react";
import type { InputProps as RACInputProps } from "react-aria-components";

import { focusRingRecipe, sizeRecipe } from "@boondoggle.design/css-recipes";
import { SizeVariant } from "@boondoggle.design/css-types";
import clsx from "clsx";
import { forwardRef } from "react";
import { Input as RACInput } from "react-aria-components";

import { FieldIconContainer } from "../../../field-icon-container/src";
import { inputBaseStyle } from "../styles/input.css";
import { inputContainerStyle } from "../styles/input-container.css";
import { inputIconContainerStyle } from "../styles/input-icon.css";
import { inputPaddingStyle } from "../styles/input-padding.css";
import { inputVariantRecipe } from "../styles/input-variant-recipe.css";

export interface InputProps extends Omit<RACInputProps, "size"> {
    size?: SizeVariant;
    slotLeft?: ReactNode;
    variant?: FieldVariant;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { size = SizeVariant.MD, slotLeft, variant = "default", ...props },
        ref,
    ) => {
        return (
            <div className={inputContainerStyle}>
                {slotLeft && (
                    <FieldIconContainer
                        className={inputIconContainerStyle}
                        isInert
                    >
                        {slotLeft}
                    </FieldIconContainer>
                )}
                <RACInput
                    {...props}
                    className={clsx(
                        inputBaseStyle,
                        sizeRecipe({ size }),
                        focusRingRecipe({ variant: "default" }),
                        inputVariantRecipe({
                            variant,
                        }),
                        inputPaddingStyle,
                        props.className,
                    )}
                    ref={ref}
                />
            </div>
        );
    },
);
