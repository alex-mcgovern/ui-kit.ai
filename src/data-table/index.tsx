import type {
    ColumnDef,
    RowData,
    SortingState,
    VisibilityState,
} from "@tanstack/react-table";
import type { JSXElementConstructor, ReactNode } from "react";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Fragment } from "react";

import type { MenuButtonProps } from "../menu-button";

import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { Icon } from "../icon";
import { MenuButton } from "../menu-button";
import {
    TableActionsContainer,
    TableHeader,
    TableSearchContainer,
} from "../table-header";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableSortButton } from "./_components/controls/TableSortButton";
import { TableGlobalFilter } from "./_components/controls/table-global-filter";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { dataTableFuzzyFilter } from "./_lib/dataTableFuzzyFilter";
import { tableCellCSS, tableHeaderCellCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * TableRowMenuButton
 * ------------------------------------------------------------------------------- */

export type TV2DataTableRowActions<TData extends RowData> =
    JSXElementConstructor<{
        /**
         * The raw data for the DataTable row.
         */
        row_data: TData;
    }>;

export function TableRowMenuButton<TActionId extends string>(
    props: MenuButtonProps<TActionId>,
) {
    return (
        <MenuButton
            {...props}
            placement="bottom end"
        >
            <Button
                isSquare
                name="row_actions"
                size={SizeVariant.SM}
                variant={ButtonVariant.SECONDARY}
            >
                <Icon icon={faEllipsis} />
            </Button>
        </MenuButton>
    );
}

/** -----------------------------------------------------------------------------
 * DataTable
 * ------------------------------------------------------------------------------- */

export type DataTableProps<TRowData extends RowData> = {
    /**
     * React component to render a list of actions on each row
     */
    RowActions?: TV2DataTableRowActions<TRowData>;

    /**
     * @deprecated
     * Up to 2 react nodes to render as actions for the table
     */

    actions?: [ReactNode?, ReactNode?] | ReactNode;

    /**
     * Column definitions for the tabular data
     */
    /**
     * Options related to column visibility.
     */
    columnVisibility?: VisibilityState;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: Array<ColumnDef<TRowData, any>>;

    /**
     * An array of objects describing each row in the table
     */
    data: Array<TRowData> | undefined;

    /**
     * Grid template columns
     */
    gridTemplateColumns: string;

    /**
     * The initial sorting state of the table
     */
    initialSorting?: SortingState;

    /**
     * @deprecated
     * Whether to enable fuzzy searching
     */
    isFuzzySearchable?: boolean;

    /**
     * A string to fuzzy search rows in the table
     */
    strFuzzyFilter?: string;
};

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TRowData extends RowData>({
    actions,
    columns,
    columnVisibility,
    data,
    gridTemplateColumns,
    initialSorting,
    isFuzzySearchable,
    RowActions,
    strFuzzyFilter,
}: DataTableProps<TRowData>) {
    const [globalFilter, setGlobalFilter] = useState<string | undefined>(
        strFuzzyFilter,
    );

    useEffect(() => {
        if (strFuzzyFilter && strFuzzyFilter !== globalFilter) {
            setGlobalFilter(strFuzzyFilter);
        }
    }, [globalFilter, strFuzzyFilter]);

    const table = useReactTable<TRowData>({
        columns,
        data: data || [],
        filterFromLeafRows: false,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        globalFilterFn: dataTableFuzzyFilter,
        initialState: {
            columnVisibility,
            globalFilter,
            pagination: {
                pageSize: 25,
            },
            sorting: initialSorting,
        },
        onGlobalFilterChange: setGlobalFilter,
        state: {
            globalFilter,
        },
    });

    const hasData = arrayHasLength(table.getFilteredRowModel().rows);

    return (
        <Box>
            {actions || isFuzzySearchable ? (
                <TableHeader>
                    <TableSearchContainer>
                        <TableGlobalFilter<TRowData> table={table} />
                    </TableSearchContainer>

                    {actions && (
                        <TableActionsContainer>{actions}</TableActionsContainer>
                    )}
                </TableHeader>
            ) : null}

            {hasData && (
                <Box
                    __gridTemplateColumns={
                        RowActions
                            ? `${gridTemplateColumns} max-content`
                            : gridTemplateColumns
                    }
                    borderTop="border_rule"
                    display="grid"
                >
                    {table.getHeaderGroups().map((hg) =>
                        hg.headers.map((h) => {
                            return (
                                <div
                                    className={tableHeaderCellCSS}
                                    key={h.id}
                                >
                                    <TableSortButton header={h}>
                                        {h.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  h.column.columnDef.header,
                                                  h.getContext(),
                                              )}
                                    </TableSortButton>
                                </div>
                            );
                        }),
                    )}
                    {RowActions ? <div className={tableHeaderCellCSS} /> : null}

                    {table.getRowModel().rows.map((row) => (
                        <Fragment key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <div
                                    className={tableCellCSS}
                                    key={cell.id}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </div>
                            ))}
                            {RowActions ? (
                                <div className={tableCellCSS}>
                                    <RowActions row_data={row.original} />
                                </div>
                            ) : null}
                        </Fragment>
                    ))}
                </Box>
            )}

            {!hasData && <TableNoResults table={table} />}

            {table.getFilteredRowModel().rows.length > 25 && (
                <TablePagination table={table} />
            )}
        </Box>
    );
}
