import type { ListBoxItemSchema } from "@boondoggle.design/types";

import { Checkbox } from "@boondoggle.design/checkbox";
import { FieldIconContainer } from "@boondoggle.design/field-icon-container";
import clsx from "clsx";
import {
    ListBoxItem as RACListBoxItem,
    MenuItem as RACMenuItem,
    Text as RACText,
} from "react-aria-components";

import { optionsItemStyle } from "../styles/options-item.css";
import {
    optionItemGridLeftStyle,
    optionItemGridRightStyle,
    optionItemGridStyle,
} from "../styles/options-item-grid.css";
import {
    optionsItemDescriptionStyle,
    optionsItemTextValueStyle,
} from "../styles/options-item-text.css";

type OptionsItemProps<TType extends "listbox" | "menu"> = {
    type: TType;
} & ListBoxItemSchema;

export function OptionsItem<TType extends "listbox" | "menu">({
    description,
    slotLeft,
    slotRight,
    type,
    ...props
}: OptionsItemProps<TType>) {
    const Component = type === "listbox" ? RACListBoxItem : RACMenuItem;

    return (
        <Component
            {...props}
            className={clsx(
                optionsItemStyle,
                optionItemGridStyle,
                props.className,
            )}
        >
            {({ isSelected, selectionMode }) => {
                return (
                    <>
                        {/*
                         * NOTE: We always render the element containing the
                         * `slotLeft` prop, as if another item in the list has
                         * a `slotLeft`, we should still ensure that the text is
                         * aligned throughout the list. This is controlled via
                         * CSS */}
                        <FieldIconContainer className={optionItemGridLeftStyle}>
                            {slotLeft}
                        </FieldIconContainer>

                        <div>
                            <RACText
                                className={optionsItemTextValueStyle}
                                slot="label"
                            >
                                {props.textValue}
                            </RACText>

                            {description ? (
                                <RACText
                                    className={optionsItemDescriptionStyle}
                                    slot="description"
                                >
                                    {description}
                                </RACText>
                            ) : null}
                        </div>

                        {/*
                         * NOTE #1: We always render the element on the right
                         * hand side of the item. If another element has content
                         * in this part of the grid, this should be rendered
                         * as empty space to preserve alignment.
                         *
                         * NOTE #2: There is an order of importance for the
                         * content that gets rendered in here. A decorative slot
                         * can be overridden by a submenu trigger, or a selection
                         * indicator, though combining this should be disabled at
                         * the type level in any case.
                         *
                         * (The nested ternary, while ugly, is the most
                         * appropriate way to dictate this behavior)
                         * */}
                        <FieldIconContainer
                            className={optionItemGridRightStyle}
                        >
                            {selectionMode === "single" ? (
                                <Checkbox
                                    isReadOnly
                                    isSelected={isSelected}
                                    variant="borderless"
                                />
                            ) : selectionMode === "multiple" ? (
                                <Checkbox
                                    isReadOnly
                                    isSelected={isSelected}
                                    variant="borderlessUntilHovered"
                                />
                            ) : slotRight ? (
                                slotRight
                            ) : null}
                        </FieldIconContainer>
                    </>
                );
            }}
        </Component>
    );
}
