import { FieldGroup } from "@boondoggle.design/field-group";
import { Input } from "@boondoggle.design/input";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    SearchField as RACSearchField,
    type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components";

import { Icon } from "../../../../../src/icon";
import { searchFieldStyle } from "../styles/search-field.css";
import { SearchFieldClearButton } from "./search-field-clear-button";

export interface SearchFieldProps extends RACSearchFieldProps {}

/**
 * A search field allows a user to enter and clear a search query.
 *
 * @see https://react-spectrum.adobe.com/react-aria/SearchField.html
 */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
    (
        {
            children = (
                <FieldGroup>
                    <Input
                        slotLeft={<Icon icon={faSearch} />}
                        variant="borderless"
                    />
                    <SearchFieldClearButton />
                </FieldGroup>
            ),
            ...props
        },
        ref,
    ) => {
        return (
            <RACSearchField
                {...props}
                className={clsx(searchFieldStyle, props.className)}
                ref={ref}
            >
                {children}
            </RACSearchField>
        );
    },
);
