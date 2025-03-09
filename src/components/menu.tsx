import type { ReactNode } from "react";
import type {
    MenuProps as AriaMenuProps,
    MenuTriggerProps as AriaMenuTriggerProps,
} from "react-aria-components";

import {
    Menu as RACMenu,
    MenuTrigger as RACMenuTrigger,
} from "react-aria-components";

import type { OptionsSchema } from "../types/options";

import { INTERNAL_OptionRenderer } from "./options";

/**
 * A menu displays a list of actions or options that a user can choose.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Menu.html
 */
export function Menu<T extends OptionsSchema<"menu">>(
    props: Omit<AriaMenuProps<T>, "children" | "className">,
) {
    return (
        <RACMenu
            {...props}
            className="scrollbar-thin max-h-[inherit] overflow-auto p-1 outline
                outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
            {(renderProps) => (
                <INTERNAL_OptionRenderer<"menu">
                    {...renderProps}
                    type="menu"
                />
            )}
        </RACMenu>
    );
}

/**
 * A <MenuDecorativeSection> defines a section within a
 * `Popover` that is purely decorative and does not contain
 * any interactive elements.
 *
 * **Note** Compose this in the `Dropdown`, not in the `DropdownMenu`
 */
export function MenuDecorativeSection(props: {
    children: ReactNode;
}) {
    return <div className="p-1" {...props} />;
}

/**
 * A `Trigger` component, for use with a `Menu` component.
 *
 * @see https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger
 */
export function MenuTrigger(props: AriaMenuTriggerProps) {
    return <RACMenuTrigger {...props} />;
}
