import type { ListSchema } from "@boondoggle.design/types";
import type { CSSProperties, ForwardedRef } from "react";
import type { ComboBoxProps as RACComboBoxProps } from "react-aria-components";

import { FieldVariant } from "@boondoggle.design/css-types";
import { Options } from "@boondoggle.design/list-box";
import { Popover } from "@boondoggle.design/popover";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import clsx from "clsx";
import { forwardRef } from "react";
import { ComboBox as RACCombobox } from "react-aria-components";

import { Icon } from "../../../../../src/icon";
import { useSyncComboBoxWidth } from "../hooks/use-sync-combo-box-width";
import { comboBoxStyle } from "../styles/combo-box.css";
import { ComboBoxButton } from "./combo-box-button";
import { ComboBoxClearButton } from "./combo-box-clear-button";
import { ComboBoxGroup } from "./combo-box-group";
import { ComboBoxInput } from "./combo-box-input";
import { ComboBoxRefContext } from "./combo-box-ref-context";

export interface ComboBoxProps<
    TItemId extends string = string,
    TValue extends object = object,
> extends RACComboBoxProps<ListSchema<TItemId, TValue>> {}

function _ComboBox<
    TItemId extends string = string,
    TValue extends object = object,
>(
    {
        children = (
            <ComboBoxGroup>
                <ComboBoxInput
                    slotLeft={<Icon icon={faSearch} />}
                    variant={FieldVariant.BORDERLESS}
                />
                <ComboBoxClearButton />
                <ComboBoxButton />
            </ComboBoxGroup>
        ),
        ...props
    }: ComboBoxProps<TItemId, TValue>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const { groupRef, groupWidth } = useSyncComboBoxWidth();

    return (
        <ComboBoxRefContext.Provider value={groupRef}>
            <RACCombobox
                {...props}
                className={clsx(props.className, comboBoxStyle)}
                ref={ref}
            >
                {(renderProps) => (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        <Popover
                            style={
                                {
                                    "--trigger-width": `${groupWidth}px`,
                                } as CSSProperties
                            }
                        >
                            <Options<TItemId, TValue> />
                        </Popover>
                    </>
                )}
            </RACCombobox>
        </ComboBoxRefContext.Provider>
    );
}

export const ComboBox = forwardRef(_ComboBox);
