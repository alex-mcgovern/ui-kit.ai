import type { ForwardedRef, ReactNode } from "react";
import type {
    ListBoxItemProps as ReactAriaListBoxItemProps,
    ListBoxProps as ReactAriaListBoxProps,
} from "react-aria-components";

import { typography } from "@boondoggle/css-variants";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    Collection as ReactAriaCollection,
    Header as ReactAriaHeader,
    ListBox as ReactAriaListBox,
    ListBoxItem as ReactAriaListBoxItem,
    Text as ReactAriaText,
} from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import {
    menuHeaderCSS,
    menuItemDescriptionCSS,
    menuItemNameCSS,
} from "../_css/menu.css";
import { i18n } from "../_i18n";
import { Box } from "../box";
import { Checkbox } from "../checkbox";
import { Section } from "../section";
import { listBoxCSS, listBoxItemCSS } from "./styles.css";

type SingleListBoxItem<TItemId extends string = string> = {
    children?: never;
    colorOverlay?: ColorOverlay;
    description?: string;
    href?: string;
    id: TItemId;
    name: string;
    slotLeft?: ReactNode;
    tags?: Array<string>;
    type?: never;
};

export type IterableListBoxItem<TItemId extends string = string> =
    | {
          children: Array<SingleListBoxItem<TItemId>>;
          colorOverlay?: never;
          href?: never;
          id: string;
          name?: string;
          slotLeft?: never;
          tags?: never;
          type?: never;
      }
    | SingleListBoxItem<TItemId>;

/** -----------------------------------------------------------------------------
 * ListBoxItem
 * ------------------------------------------------------------------------------- */

export type ListBoxItemProps<TItemId extends string = string> =
    ReactAriaListBoxItemProps<SingleListBoxItem<TItemId>> & {
        colorOverlay?: ColorOverlay;
        icon?: ReactNode;
    };

function ListBoxItem<TItemId extends string = string>({
    value,
    ...props
}: ListBoxItemProps<TItemId>) {
    return (
        <ReactAriaListBoxItem
            className={({
                allowsDragging,
                isDisabled,
                isDragging,
                isDropTarget,
                isFocused,
                isFocusVisible,
                isHovered,
                isPressed,
                isSelected,
                selectionBehavior,
                selectionMode,
            }) =>
                clsx(
                    props.className,
                    listBoxItemCSS({
                        allowsDragging: allowsDragging ? "true" : "false",
                        colorOverlay: props.colorOverlay,
                        hasIcon: props.icon ? "true" : "false",
                        isDisabled: isDisabled ? "true" : "false",
                        isDragging: isDragging ? "true" : "false",
                        isDropTarget: isDropTarget ? "true" : "false",
                        isFocused: isFocused ? "true" : "false",
                        isFocusVisible: isFocusVisible ? "true" : "false",
                        isHovered: isHovered ? "true" : "false",
                        isPressed: isPressed ? "true" : "false",
                        isSelected: isSelected ? "true" : "false",
                        selectionBehavior,
                        selectionMode,
                    }),
                )
            }
            href={value?.href}
            {...props}
        >
            {(renderProps) => {
                return (
                    <>
                        {props.icon}
                        <div>
                            <ReactAriaText
                                className={menuItemNameCSS}
                                slot="label"
                            >
                                {value?.name}
                            </ReactAriaText>
                            <ReactAriaText
                                className={menuItemDescriptionCSS}
                                slot="description"
                            >
                                {value?.description}
                            </ReactAriaText>
                        </div>
                        {renderProps.selectionMode === "multiple" ? (
                            <Checkbox
                                isIndeterminate
                                isSelected={renderProps.isSelected}
                            />
                        ) : null}
                    </>
                );
            }}
        </ReactAriaListBoxItem>
    );
}

export type ListBoxProps<TItemId extends string = string> =
    ReactAriaListBoxProps<IterableListBoxItem<TItemId>>;

function BaseListBox<TItemId extends string = string>(
    props: ListBoxProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <ReactAriaListBox<IterableListBoxItem<TItemId>>
            className={listBoxCSS}
            ref={ref}
            renderEmptyState={() => (
                <Box
                    className={typography.body_sm}
                    color="text_low_contrast"
                    display="flex"
                    placeItems="center"
                    whiteSpace="nowrap"
                >
                    {i18n.no_results}
                </Box>
            )}
            {...props}
        >
            {(item) => {
                return item.children ? (
                    <Section>
                        {item.name ? (
                            <ReactAriaHeader className={menuHeaderCSS}>
                                {item.name}
                            </ReactAriaHeader>
                        ) : null}

                        <ReactAriaCollection items={item.children}>
                            {(i) => (
                                <ListBoxItem
                                    colorOverlay={i.colorOverlay}
                                    icon={i.slotLeft}
                                    textValue={i.name}
                                    value={i}
                                />
                            )}
                        </ReactAriaCollection>
                    </Section>
                ) : (
                    <ListBoxItem
                        colorOverlay={item.colorOverlay}
                        icon={item.slotLeft}
                        textValue={item.name}
                        value={item}
                    />
                );
            }}
        </ReactAriaListBox>
    );
}

export const ListBox = forwardRef(BaseListBox);
