import type { ListSchema } from "@boondoggle.design/types";
import type { ForwardedRef } from "react";
import type {
    ListBoxProps as RACListBoxProps,
    MenuProps as RACMenuProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    Collection as RACCollection,
    Header as RACHeader,
    ListBox as RACListBox,
    Menu as RACMenu,
} from "react-aria-components";

import { optionsStyle } from "../styles/options.css";
import { optionsSectionHeaderStyle } from "../styles/options-section-header.css";
import { OptionsItem } from "./options-item";
import { Section } from "./options-section";

export type OptionsProps<
    TType extends "listbox" | "menu",
    TItemId extends string = string,
    TValue extends object = object,
> = {
    type: TType;
} & (TType extends "listbox"
    ? Omit<RACListBoxProps<ListSchema<TItemId, TValue>>, "children">
    : Omit<RACMenuProps<ListSchema<TItemId, TValue>>, "children">);

function _Options<
    TType extends "listbox" | "menu",
    TItemId extends string = string,
    TValue extends object = object,
>(
    { type, ...props }: OptionsProps<TType, TItemId, TValue>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const Component = type === "listbox" ? RACListBox : RACMenu;

    return (
        <Component<ListSchema<TItemId>>
            {...props}
            className={clsx(optionsStyle, props.className)}
            ref={ref}
        >
            {({ items, ...item }) => {
                return items ? (
                    <Section items={items}>
                        {item.textValue ? (
                            <RACHeader className={optionsSectionHeaderStyle}>
                                {item.textValue}
                            </RACHeader>
                        ) : null}

                        <RACCollection items={items}>
                            {(sectionItem) => (
                                <OptionsItem<TType>
                                    type={type}
                                    {...sectionItem}
                                />
                            )}
                        </RACCollection>
                    </Section>
                ) : (
                    <OptionsItem<TType>
                        type={type}
                        {...item}
                    />
                );
            }}
        </Component>
    );
}

export const Options = forwardRef(_Options);
