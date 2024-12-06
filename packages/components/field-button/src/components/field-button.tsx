import type { ButtonProps as RACButtonProps } from "react-aria-components";

import { FieldIconContainer } from "@boondoggle.design/field-icon-container";
import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton } from "react-aria-components";

import { fieldButtonStyle } from "../styles/old.css";

export type FieldButtonProps = RACButtonProps;

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field.
 */
export const FieldButton = forwardRef<HTMLButtonElement, FieldButtonProps>(
    ({ children, ...props }: RACButtonProps, ref) => {
        return (
            <RACButton
                {...props}
                className={clsx(props.className, fieldButtonStyle)}
                excludeFromTabOrder
                ref={ref}
            >
                {(renderProps) => (
                    <FieldIconContainer>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </FieldIconContainer>
                )}
            </RACButton>
        );
    },
);
