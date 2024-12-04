import type { ListSchema } from "@boondoggle.design/types";
import type { ForwardedRef } from "react";
import type { ListBoxProps as ReactAriaListBoxProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    Collection as RACCollection,
    Header as RACHeader,
    ListBox as RACListBox,
} from "react-aria-components";

import { i18n } from "../../../../../src/_i18n";
import { listBoxEmptyStateStyle } from "../styles/list-box.empty-state.css";
import { listBoxHeaderCSS } from "../styles/list-box-section-header.css";
import { listBoxCSS } from "../styles/menu-item-text.css";
import { ListBoxItem } from "./list-box-item";
import { Section } from "./list-box-section";

export interface ListBoxProps<
    TItemId extends string = string,
    TValue extends object = object,
> extends ReactAriaListBoxProps<ListSchema<TItemId, TValue>> {}

function BaseListBox<
    TItemId extends string = string,
    TValue extends object = object,
>(
    {
        renderEmptyState = () => (
            <div className={listBoxEmptyStateStyle}>{i18n.no_results}</div>
        ),
        ...props
    }: ListBoxProps<TItemId, TValue>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACListBox<ListSchema<TItemId>>
            {...props}
            className={clsx(listBoxCSS, props.className)}
            ref={ref}
            renderEmptyState={renderEmptyState}
        >
            {({ items, ...item }) => {
                return items ? (
                    <Section items={items}>
                        {item.textValue ? (
                            <RACHeader className={listBoxHeaderCSS}>
                                {item.textValue}
                            </RACHeader>
                        ) : null}

                        <RACCollection items={items}>
                            {ListBoxItem}
                        </RACCollection>
                    </Section>
                ) : (
                    <ListBoxItem {...item} />
                );
            }}
        </RACListBox>
    );
}

export const ListBox = forwardRef(BaseListBox);
