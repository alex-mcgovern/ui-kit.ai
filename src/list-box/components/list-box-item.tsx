import type { Color } from "@boondoggle.design/css-types";
import type { ReactNode } from "react";
import type {
    ListBoxItemProps as AriaListBoxItemProps,
    ListBoxItemRenderProps as AriaListBoxItemRenderProps,
} from "react-aria-components";

import { faCheck } from "@fortawesome/pro-duotone-svg-icons";
import clsx from "clsx";
import {
    ListBoxItem as AriaListBoxItem,
    Text as ReactAriaText,
} from "react-aria-components";

import type { SingleListBoxItem } from "..";

import { Checkbox } from "../../checkbox";
import { Icon } from "../../icon";
import { menuItem } from "../styles/menu-item.base.css";
import * as layoutStyles from "../styles/menu-item-layout.css";
import * as textStyles from "../styles/menu-item-text.css";

export type ListBoxItemProps<TItemId extends string = string> =
    AriaListBoxItemProps<SingleListBoxItem<TItemId>> & {
        colorOverlay?: Color;
        icon?: ReactNode;
    };

type MenuItemProps = AriaListBoxItemProps & {
    colorOverlay?: Color;
    description?: string;
    icon?: ReactNode;
};

function MenuItemChildren({
    props,
    renderProps,
}: {
    props: MenuItemProps;
    renderProps: AriaListBoxItemRenderProps;
}) {
    if (!props.children) {
        return (
            <div className={textStyles.container}>
                <ReactAriaText
                    className={textStyles.label}
                    slot="label"
                >
                    {props.textValue}
                </ReactAriaText>

                {props.description ? (
                    <ReactAriaText
                        className={textStyles.description}
                        slot="description"
                    >
                        {props.description}
                    </ReactAriaText>
                ) : null}
            </div>
        );
    } else if (typeof props.children === "function") {
        return props.children(renderProps);
    } else return props.children;
}

function MenuItemRight({
    renderProps,
}: {
    renderProps: AriaListBoxItemRenderProps;
}) {
    if (renderProps.selectionMode === "single" && renderProps.isSelected) {
        return <Icon icon={faCheck} />;
    }

    if (renderProps.selectionMode === "multiple") {
        return (
            <Checkbox
                isReadOnly
                isSelected={renderProps.isSelected}
            />
        );
    }

    return null;
}

export function ListBoxItem(props: MenuItemProps) {
    return (
        <AriaListBoxItem
            className={clsx(props.className, menuItem, layoutStyles.container)}
            data-icon={!!props.icon}
            {...props}
        >
            {(renderProps) => {
                return (
                    <>
                        <div className={layoutStyles.left}>{props.icon}</div>
                        <MenuItemChildren
                            props={props}
                            renderProps={renderProps}
                        />

                        <div className={layoutStyles.right}>
                            <MenuItemRight renderProps={renderProps} />
                        </div>
                    </>
                );
            }}
        </AriaListBoxItem>
    );
}
