import type { CheckboxProps as RACCheckboxProps } from "react-aria-components";

import { focusRingRecipe } from "@boondoggle.design/css-recipes";
import clsx from "clsx";
import { Checkbox as RACCheckbox } from "react-aria-components";

import { checkboxStyle } from "../styles/checkbox.css";
import { checkboxContainerStyle } from "../styles/checkbox-container.css";
import { checkboxThemeRecipe } from "../styles/checkbox-variant.css";
import { CheckboxTick } from "./checkbox-tick";

export interface CheckboxProps extends RACCheckboxProps {
    variant?: "borderless" | "borderlessUntilHovered" | "default";
}

export const Checkbox = ({ variant = "default", ...props }: CheckboxProps) => {
    return (
        <RACCheckbox
            {...props}
            className={clsx(
                props.className,
                checkboxContainerStyle,
                focusRingRecipe({ variant: "default" }),
            )}
        >
            {(renderProps) => {
                return (
                    <>
                        <div
                            className={clsx(
                                checkboxStyle,
                                checkboxThemeRecipe({ variant }),
                            )}
                        >
                            <CheckboxTick />
                        </div>
                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}
                    </>
                );
            }}
        </RACCheckbox>
    );
};
