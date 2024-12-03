import type { ListSchema } from "@boondoggle.design/types";
import type { ComponentProps, ForwardedRef } from "react";
import type { SelectProps as RACSelectProps } from "react-aria-components";

import { Popover } from "@boondoggle.design/popover";
import clsx from "clsx";
import { forwardRef } from "react";
import { Select as RACSelect } from "react-aria-components";

import type { IterableListBoxItem } from "../../../list-box/src";

import { ListBox } from "../../../list-box/src";
import { selectCSS } from "./styles.css";

export type SelectProps<TItemId extends string = string> = RACSelectProps<
    IterableListBoxItem<TItemId>
> & {
    items: ListSchema;
    placement?: ComponentProps<typeof Popover>["placement"];
};

function _Select<TItemId extends string = string>(
    { children, ...props }: SelectProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACSelect<ListSchema<TItemId>>
            {...props}
            className={clsx(props.className, selectCSS)}
            ref={ref}
        >
            {(values) => (
                <>
                    {typeof children === "function"
                        ? children(values)
                        : children}

                    <Popover placement={props.placement}>
                        <ListBox<TItemId> items={props.items} />
                    </Popover>
                </>
            )}
        </RACSelect>
    );
}

export const Select = forwardRef(_Select);
