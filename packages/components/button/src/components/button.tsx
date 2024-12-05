import type { ButtonProps as RACButtonProps } from "react-aria-components";

import { DEFAULT_SIZE } from "@boondoggle.design/css-config";
import { focusRingRecipe, sizeRecipe } from "@boondoggle.design/css-recipes";
import { ButtonVariant } from "@boondoggle.design/css-types";
import { variantColorOverlay } from "@boondoggle.design/css-variants";
import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton } from "react-aria-components";

import type { BaseButtonProps } from "../types";

import { buttonBase } from "../styles/button-base.css";
import { buttonPaddingRecipe } from "../styles/button-padding.css";
import { buttonVariantRecipe } from "../styles/button-variant-recipe.css";

export interface ButtonProps extends BaseButtonProps, RACButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            alignment = "center",
            className,
            colorOverlay,
            isSquare = false,
            size = DEFAULT_SIZE,
            variant = ButtonVariant.PRIMARY,
            ...props
        },
        ref,
    ) => {
        return (
            <RACButton
                {...props}
                className={clsx(
                    buttonBase({ alignment }),
                    buttonPaddingRecipe({ isSquare, size }),
                    buttonVariantRecipe({ variant }),
                    colorOverlay ? variantColorOverlay[colorOverlay] : null,
                    focusRingRecipe({ variant: "default" }),
                    sizeRecipe({ isSquare, size }),
                    className,
                )}
                ref={ref}
            />
        );
    },
);
