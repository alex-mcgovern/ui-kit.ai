import type { Size } from "@boondoggle.design/css-types";
import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import { DEFAULT_SIZE } from "../../packages/css/config/src";
import { sizeRecipe } from "../../packages/css/recipes/src";
import { buttonCSS, buttonPaddingRecipe } from "./styles.css";

/** -----------------------------------------------------------------------------
 * Button
 * ------------------------------------------------------------------------------- */

export type ButtonVariants = {
    alignment?: "center" | "left";
    appearance?: "ghost" | "primary" | "secondary";
    colorOverlay?: ColorOverlay;
    isSquare?: boolean;
    size?: Size;
};

export type ButtonProps = Omit<RACButtonProps, "size"> & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            alignment = "center",
            appearance = "primary",
            className,
            colorOverlay,
            isSquare = false,
            size = DEFAULT_SIZE,
            ...props
        },
        ref,
    ) => {
        return (
            <RACButton
                {...props}
                className={(renderProps) =>
                    clsx(
                        className,
                        sizeRecipe({ isSquare, size }),
                        buttonPaddingRecipe({ isSquare, size }),
                        buttonCSS({
                            ...renderProps,
                            alignment,
                            appearance,
                            colorOverlay,
                        }),
                    )
                }
                ref={ref}
            />
        );
    },
);

/** -----------------------------------------------------------------------------
 * LinkButton
 * ------------------------------------------------------------------------------- */

export type LinkButtonProps = RACLinkProps & ButtonVariants;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
    (
        {
            alignment = "center",
            appearance = "primary",
            className,
            colorOverlay,
            isSquare = false,
            size = DEFAULT_SIZE,
            ...props
        },
        ref,
    ) => {
        return (
            <RACLink
                {...props}
                className={(renderProps) =>
                    clsx(
                        className,
                        sizeRecipe({ isSquare, size }),
                        buttonPaddingRecipe({ isSquare, size }),
                        buttonCSS({
                            ...renderProps,
                            alignment,
                            appearance,
                            colorOverlay,
                        }),
                    )
                }
                ref={ref}
            />
        );
    },
);
