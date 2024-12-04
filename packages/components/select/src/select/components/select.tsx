import type { ListSchema } from "@boondoggle.design/types";
import type { ComponentProps, ForwardedRef } from "react";
import type { SelectProps as RACSelectProps } from "react-aria-components";

import { ListBox } from "@boondoggle.design/list-box";
import { Popover } from "@boondoggle.design/popover";
import clsx from "clsx";
import { forwardRef } from "react";
import { Select as RACSelect } from "react-aria-components";

import { selectStyle } from "../styles/select.css";
import { SelectButton } from "./select-button";

export type SelectProps<
    TItemId extends string = string,
    TValue extends object = object,
> = RACSelectProps<ListSchema<TItemId, TValue>> & {
    items: ListSchema<TItemId, TValue>[];
    placement?: ComponentProps<typeof Popover>["placement"];
};

function _Select<
    TItemId extends string = string,
    TValue extends object = object,
>(
    { children = <SelectButton />, ...props }: SelectProps<TItemId, TValue>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACSelect<ListSchema<TItemId>>
            {...props}
            className={clsx(selectStyle, props.className)}
            ref={ref}
        >
            {(renderProps) => (
                <>
                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    <Popover placement={props.placement}>
                        <ListBox<TItemId, TValue> items={props.items} />
                    </Popover>
                </>
            )}
        </RACSelect>
    );
}

export const Select = forwardRef(_Select);
