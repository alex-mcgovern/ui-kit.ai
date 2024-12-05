import type { MenuProps as RACMenuProps } from "react-aria-components";

import type { PopoverProps } from "../../packages/components/popover/src/components/popover";
import type { IterableMenuItem } from "../menu";
import type { MenuTriggerProps } from "../menu-trigger";

import { Popover } from "../../packages/components/popover/src/components/popover";
import { DynamicMenu } from "../menu";
import { MenuTrigger } from "../menu-trigger";

export type MenuButtonProps<TItemId extends string = string> =
    MenuTriggerProps &
        RACMenuProps<IterableMenuItem<TItemId>> & {
            placement?: PopoverProps["placement"];
        };

export function MenuButton<TItemId extends string = string>({
    children,
    ...props
}: MenuButtonProps<TItemId>) {
    return (
        <MenuTrigger {...props}>
            {children}
            <Popover placement={props.placement}>
                <DynamicMenu {...props} />
            </Popover>
        </MenuTrigger>
    );
}
