import type { ListBoxItemSchema } from "@boondoggle.design/types";

import { faCheck } from "@fortawesome/pro-duotone-svg-icons/faCheck";
import clsx from "clsx";
import {
    ListBoxItem as RACListBoxItem,
    Text as RACText,
} from "react-aria-components";

import { Checkbox } from "../../../../../src/checkbox";
import { Icon } from "../../../../../src/icon";
import { FieldIconContainer } from "../../../field-icon-container/src";
import {
    listBoxGridLeftStyle,
    listBoxGridRightStyle,
    listBoxGridStyle,
} from "../styles/list-box-grid.css";
import {
    descriptionStyle,
    textValueStyle,
} from "../styles/list-box-item-text.css";
import { listBoxItemStyle } from "../styles/menu-item.base.css";

export function ListBoxItem({
    description,
    slotLeft,
    slotRight,
    ...props
}: ListBoxItemSchema) {
    return (
        <RACListBoxItem
            {...props}
            className={clsx(
                listBoxItemStyle,
                listBoxGridStyle,
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
                        <FieldIconContainer className={listBoxGridLeftStyle}>
                            {slotLeft}
                        </FieldIconContainer>

                        <div>
                            <RACText
                                className={textValueStyle}
                                slot="label"
                            >
                                {props.textValue}
                            </RACText>

                            {description ? (
                                <RACText
                                    className={descriptionStyle}
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
                        <FieldIconContainer className={listBoxGridRightStyle}>
                            {selectionMode === "single" && isSelected ? (
                                <Icon icon={faCheck} />
                            ) : selectionMode === "multiple" ? (
                                <Checkbox
                                    isReadOnly
                                    isSelected={isSelected}
                                />
                            ) : slotRight ? (
                                slotRight
                            ) : null}
                        </FieldIconContainer>
                    </>
                );
            }}
        </RACListBoxItem>
    );
}
