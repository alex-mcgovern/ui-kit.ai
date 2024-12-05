import type { LinkProps as RACLinkProps } from "react-aria-components";

import { ButtonVariant } from "@boondoggle.design/css-types";
import { variantColorOverlay } from "@boondoggle.design/css-variants";
import clsx from "clsx";
import { forwardRef } from "react";
import { Link as RACLink } from "react-aria-components";

import type { BaseButtonProps } from "../types";

import { DEFAULT_SIZE } from "../../../../css/config/src";
import { focusRingRecipe, sizeRecipe } from "../../../../css/recipes/src";
import { buttonBase } from "../styles/button-base.css";
import { buttonPaddingRecipe } from "../styles/button-padding.css";
import { buttonVariantRecipe } from "../styles/button-variant-recipe.css";

export interface ButtonLinkProps extends BaseButtonProps, RACLinkProps {}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
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
            <RACLink
                {...props}
                className={clsx(
                    buttonBase({ alignment }),
                    buttonPaddingRecipe({ isSquare, size }),
                    buttonVariantRecipe({ variant }),
                    colorOverlay ? variantColorOverlay[colorOverlay] : null,
                    focusRingRecipe({ variant: "inset" }),
                    sizeRecipe({ isSquare, size }),
                    className,
                )}
                ref={ref}
            />
        );
    },
);
