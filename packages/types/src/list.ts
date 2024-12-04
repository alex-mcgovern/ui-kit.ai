import type { Color } from "@boondoggle.design/css-types";
import type { ReactNode } from "react";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";

interface Base<TItemId extends string = string, TValue extends object = object>
    extends Omit<
        AriaListBoxItemProps<TValue>,
        "children" | "id" | "textValue"
    > {
    color?: Color;
    description?: string;
    href?: string;
    id: TItemId | string;
    items?: Base<TItemId>[];
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
    textValue: string;
}

export interface ListBoxItemSchema<
    TItemId extends string = string,
    TValue extends object = object,
> extends Base<TItemId, TValue> {
    color?: Color;
    description?: string;
    href?: string;
    id: TItemId;
    items?: never;
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
    textValue: string;
}

export interface ListBoxSectionSchema<
    TItemId extends string = string,
    TValue extends object = object,
> extends Base<TItemId, TValue> {
    color?: never;
    description?: never;
    href?: never;
    id: string;
    items?: ListBoxItemSchema<TItemId, TValue>[];
    slotLeft?: ReactNode;
    slotRight?: never;
    textValue: string;
}

export type ListSchema<
    TItemId extends string = string,
    TValue extends object = object,
> = ListBoxItemSchema<TItemId, TValue> | ListBoxSectionSchema<TItemId, TValue>;
