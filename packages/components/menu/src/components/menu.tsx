import type { OptionsProps } from "@boondoggle.design/list-box";
import type { PopoverProps } from "@boondoggle.design/popover";
import type { MenuTriggerProps as RACMenuTriggerProps } from "react-aria-components";

import { Options } from "@boondoggle.design/list-box";
import { Popover } from "@boondoggle.design/popover";
import { MenuTrigger as RACMenuTrigger } from "react-aria-components";

export interface MenuProps<
    TItemId extends string = string,
    TValue extends object = object,
> extends Omit<OptionsProps<"menu", TItemId, TValue>, "type">,
        RACMenuTriggerProps,
        Pick<PopoverProps, "placement"> {}

export function Menu<
    TItemId extends string = string,
    TValue extends object = object,
>({ children, placement, trigger, ...props }: MenuProps<TItemId, TValue>) {
    return (
        <RACMenuTrigger trigger={trigger}>
            {children}
            <Popover placement={placement}>
                <Options
                    type="menu"
                    {...props}
                />
            </Popover>
        </RACMenuTrigger>
    );
}
