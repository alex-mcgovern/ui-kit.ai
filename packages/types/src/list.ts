import type { Color } from "@boondoggle.design/css-types";
import type { ReactNode } from "react";

interface ListEntrySchema<TItemId extends string = string> {
    children?: ListEntrySchema<TItemId>[];
    color?: Color;
    description?: string;
    href?: string;
    id: TItemId | string;
    label: string;
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
}

interface ListEntryItemSchema<TItemId extends string = string>
    extends ListEntrySchema<TItemId> {
    children?: never;
    color?: Color;
    description?: string;
    href?: string;
    id: TItemId;
    label: string;
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
}

interface ListEntrySectionSchema<TItemId extends string = string>
    extends ListEntrySchema<TItemId> {
    children?: ListEntrySchema<TItemId>[];
    color?: never;
    description?: never;
    href?: never;
    id: string;
    label: string;
    slotLeft?: ReactNode;
    slotRight?: never;
}

export type ListSchema<TItemId extends string = string> = (
    | ListEntryItemSchema<TItemId>
    | ListEntrySectionSchema<TItemId>
)[];
