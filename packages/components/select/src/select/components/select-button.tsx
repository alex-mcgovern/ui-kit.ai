import type { ListSchema } from "@boondoggle.design/types";
import type { ForwardedRef } from "react";
import type { ButtonProps as RACButtonProps } from "react-aria-components";

import { sizeRecipe } from "@boondoggle.design/css-recipes";
import { focusRingRecipe } from "@boondoggle.design/css-recipes";
import { SizeVariant } from "@boondoggle.design/css-types";
import { FieldVariant } from "@boondoggle.design/css-types";
import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    Button as RACButton,
    SelectValue as RACSelectValue,
} from "react-aria-components";

import { Icon } from "../../../../../../src/icon";
import { selectButtonBaseStyle } from "../styles/select-button-base.css";
import { selectButtonVariantRecipe } from "../styles/select-button-variants.css";
import { selectIconStyle } from "../styles/select-icon.css";
import { selectValueStyle } from "../styles/select-value.css";

export interface SelectButtonProps extends Omit<RACButtonProps, "children"> {
    size?: SizeVariant;
    variant?: FieldVariant;
}

function _SelectButton<
    TItemId extends string = string,
    TValue extends object = object,
>(
    { size = SizeVariant.MD, variant = "default", ...props }: SelectButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
) {
    return (
        <RACButton
            {...props}
            className={clsx(
                selectButtonBaseStyle,
                selectButtonVariantRecipe({ variant }),
                sizeRecipe({ size }),
                focusRingRecipe({ variant: "inset" }),
                props.className,
            )}
            ref={ref}
        >
            <RACSelectValue<ListSchema<TItemId, TValue>>
                className={selectValueStyle}
            />
            <Icon
                className={selectIconStyle}
                icon={faAnglesUpDown}
            />
        </RACButton>
    );
}

export const SelectButton = forwardRef(_SelectButton);
