import type { RowData, Table } from "@tanstack/react-table";

import { i18n } from "../../../../_i18n";
import { FieldGroup } from "../../../../../packages/components/field-group/src/components/field-group";
import { Input } from "../../../../../packages/components/input/src/components/input";
import {
    SearchField,
    SearchFieldClearButton,
    SearchFieldIcon,
} from "../../../../../packages/components/search-field/src/components/search-field";
import { tableGlobalFilterCSS } from "./styles.css";

export function TableGlobalFilter<TRowData extends RowData>({
    table,
}: {
    table: Table<TRowData>;
}) {
    return (
        <SearchField
            aria-label="Filter"
            className={tableGlobalFilterCSS}
            onChange={table.setGlobalFilter}
            value={table.getState().globalFilter ?? ""}
        >
            <FieldGroup>
                <Input
                    slotLeft={<SearchFieldIcon />}
                    placeholder={i18n.filter_placeholder}
                    variant="unstyled"
                />
                <SearchFieldClearButton />
            </FieldGroup>
        </SearchField>
    );
}
