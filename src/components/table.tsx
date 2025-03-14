import type {
    ColumnProps as AriaColumnProps,
    RowProps as AriaRowProps,
    TableBodyProps as AriaTableBodyProps,
    TableHeaderProps as AriaTableHeaderProps,
    TableProps as AriaTableProps,
    CellProps,
    ResizableTableContainerProps,
    SortDirection,
} from "react-aria-components";

import {
    EllipsisVertical,
    ArrowUpDown as IconArrowsUpDown,
    ArrowUp as IconArrowUp,
} from "lucide-react";
import React, {
    type ComponentProps,
    type ReactNode,
    useMemo,
} from "react";
import {
    Button as AriaButton,
    Cell as AriaCell,
    Column as AriaColumn,
    Row as AriaRow,
    Table as AriaTable,
    ResizableTableContainer as AriaTableContainer,
    TableHeader as AriaTableHeader,
    Collection,
    ColumnResizer,
    Group,
    TableBody as RACTableBody,
    useTableOptions,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import type { BoolOptsTuple } from "../types/boolean-prop-options";
import type { OptionsSchema } from "../types/options";

import { getRandomNumber } from "../lib/get-random-number";
import { focusRing } from "../styles/focus-ring";
import { evalBoolOptsTuple } from "../types/boolean-prop-options";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Loader } from "./loader";
import { Menu, MenuTrigger } from "./menu";
import { Popover } from "./popover";
import { Skeleton } from "./skeleton";

type BaseRow = {
    [id: string]: unknown;
    id: string;
};

type ColumnProps = Omit<TableColumnSchema, "textValue"> &
    (
        | {
              children: ReactNode;
              textValue?: never;
          }
        | {
              children?: never;
              textValue: string;
          }
    );

type RowProps<
    T extends BaseRow,
    TColumn extends TableColumnSchema<T>,
> = AriaRowProps<TColumn> & {
    rowOptions: OptionsSchema<"menu">[] | undefined;
};

type TableBodyProps<T> = AriaTableBodyProps<T>;

type TableHeaderProps<
    TColumn extends object,
    TRow extends BaseRow,
> = AriaTableHeaderProps<TColumn> & {
    getRowOptions: GetRowOptionsFn<TRow> | undefined;
};

type TableProps = AriaTableProps & {
    isCompact?: boolean;
};

export type GetRowOptionsFn<T extends BaseRow = BaseRow> =
    (props: {
        columns: TableColumnSchema<T>[];
        row: T;
    }) => OptionsSchema<"menu">[];

export type TableCellRenderer<
    TRow extends BaseRow = BaseRow,
> = (props: {
    column: TableColumnSchema<TRow>;
    row: TRow;
}) => ReactNode;

export type TableColumnSchema<T extends BaseRow = BaseRow> =
    Omit<
        AriaColumnProps,
        "children" | "id" | "textValue"
    > & {
        alignment?: "center" | "end" | "start";
        id: keyof T;
        textValue: string;
    };

export type TableRendererProps<
    TRow extends BaseRow = BaseRow,
> = Omit<
    TableProps,
    "aria-label" | "children" | "className" | "items"
> & {
    "aria-label": string;
    cellRenderer: TableCellRenderer;
    className?: string;
    columns: TableColumnSchema<TRow>[];
    getRowOptions?: GetRowOptionsFn<TRow>;
    /**
     * Provides content to display when there are no rows in the table.
     *
     * @note This behavior interacts with the `showSkeleton` prop.
     */
    renderEmptyState: ComponentProps<
        typeof TableBody
    >["renderEmptyState"];
    rows: TRow[];
    /**
     * If set to true, will render an overlay containing a loading "spinner" and
     * apply a blur effect over the table.
     *
     * **Recommendation**: Use this when data has already been loaded into the
     * table, and is in the process of being refreshed.
     */
    showLoadingOverlayUI?: boolean;

    /**
     * If set to true, will render a fallback "skeleton" element into each cell,
     * respecting each columns width, alignment and styling.
     *
     * **Recommendation**: Use this when data is being fetched, and there is no
     * content to render in the table yet.
     *
     * Accepts a {@link BoolOptsTuple} which is either a boolean, or a tuple
     * containing options in the second slot.
     */
    showSkeleton?: BoolOptsTuple<{
        skeletonRowCount?: number;
    }>;
};

const columnWrapperStyles = tv({
    base: [
        "border-b border-muted-200",
        "[&:focus-within]:z-20 [&:hover]:z-20",
        "text-secondary hover:text-primary",
        "cursor-default hover:cursor-pointer",
    ],
});

const columnStyles = tv({
    base: [
        "h-6 text-sm",
        "text-start",
        "px-2 py-1",
        `group-data-[compact]/table:first:pl-0
        group-data-[compact]/table:last:pr-0`,
        "font-semibold",
        "flex flex-1 items-center gap-1",
        "-outline-offset-2",
    ],
    extend: focusRing,
    variants: {
        alignment: {
            center: "justify-center",
            end: "justify-end",
            start: "justify-start",
        },
    },
});

const cellStyles = tv({
    base: [
        "h-ui-element text-sm",
        "px-2",
        "transition-colors",
        "-outline-offset-2",
        `group-data-[compact]/table:first:pl-0
        group-data-[compact]/table:last:pr-0`,
        // border styles
        "border-b border-muted-200",
    ],
    defaultVariants: {
        alignment: "start",
    },
    extend: focusRing,
    variants: {
        alignment: {
            center: "text-center",
            end: "text-end",
            start: "text-start",
        },
    },
});

const rowStyles = tv({
    base: [
        "group/row",
        "relative -outline-offset-2",
        "text-primary disabled:text-muted-300",
        "transition-colors",
        // hover styles
        "hover:select-none hover:bg-muted-50",
        "hover:cursor-pointer hover:disabled:cursor-not-allowed",
        // pressed styles
        "pressed:bg-muted-100",
        // selected styles
        "selected:select-none",
        "selected:bg-muted-100",
    ],
    extend: focusRing,
});

const cellSkeletonStyles = tv({
    base: "max-w-[50%]",
    defaultVariants: {
        alignment: "start",
    },
    extend: focusRing,
    variants: {
        alignment: {
            center: "mx-auto",
            end: "ml-auto",
            start: "",
        },
    },
});

const resizerStyles = tv({
    base: `box-content h-5 w-px translate-x-[8px] cursor-col-resize
    rounded bg-muted-400 bg-clip-content px-[8px] py-1
    -outline-offset-2 resizing:w-[2px] resizing:bg-brand-600
    resizing:pl-[7px] forced-colors:bg-[ButtonBorder]
    forced-colors:resizing:bg-[Highlight]`,
    extend: focusRing,
});

function Cell({
    alignment,
    children,
    className,
    showSkeleton,
    ...props
}: CellProps & {
    alignment?: "center" | "end" | "start";
    showSkeleton?: boolean;
}) {
    return (
        <AriaCell
            {...props}
            className={(rp) =>
                twMerge(
                    cellStyles({ alignment }),
                    typeof className === "function"
                        ? className(rp)
                        : className,
                )
            }
        >
            {showSkeleton === true ? (
                <Skeleton
                    className={cellSkeletonStyles({
                        alignment,
                    })}
                    style={{
                        width: `${getRandomNumber(20, 50)}%`,
                    }}
                />
            ) : (
                children
            )}
        </AriaCell>
    );
}

function Column({
    alignment,
    children,
    className,
    textValue,
    ...props
}: ColumnProps) {
    return (
        <AriaColumn
            {...props}
            className={(rp) =>
                twMerge(
                    columnWrapperStyles(),
                    typeof className === "function"
                        ? className(rp)
                        : className,
                )
            }
            textValue={textValue}
        >
            {({ allowsSorting, sortDirection }) => (
                <div className="flex items-center">
                    <Group
                        className={() =>
                            columnStyles({ alignment })
                        }
                        role="presentation"
                        tabIndex={-1}
                    >
                        <span className="inline-flex items-center truncate">
                            {children ?? textValue}
                        </span>

                        {allowsSorting ? (
                            <ColumnSortControl
                                sortDirection={
                                    sortDirection
                                }
                            />
                        ) : null}
                    </Group>

                    {props.width != null && (
                        <ColumnResizer
                            className={resizerStyles()}
                        />
                    )}
                </div>
            )}
        </AriaColumn>
    );
}

function ColumnSortControl({
    sortDirection,
}: {
    sortDirection: SortDirection | undefined;
}) {
    return (
        <span
            className={twMerge(
                "flex items-center justify-center",
                "size-3",
                "transition-opacity",
                "forced-colors:text-[ButtonText]",
                sortDirection === "descending"
                    ? "rotate-180"
                    : null,
                !sortDirection ? "opacity-disabled" : null,
            )}
        >
            {sortDirection ? (
                <IconArrowUp aria-hidden />
            ) : (
                <IconArrowsUpDown aria-hidden />
            )}
        </span>
    );
}

function DefaultCellRenderer<TRow extends BaseRow>({
    column,
    row,
}: {
    column: TableColumnSchema<TRow>;
    row: TRow;
}) {
    return row[column.id] as ReactNode;
}

function getSkeletonRows(count: number = 15) {
    return Array.from({ length: count }).map((_, i) => ({
        id: i.toString(),
    }));
}
function ResizableTableContainer(
    props: ResizableTableContainerProps,
) {
    return (
        <AriaTableContainer
            {...props}
            className={twMerge(
                "relative",
                "w-full bg-base",
                "scrollbar-thin overflow-auto",
                props.className,
            )}
        ></AriaTableContainer>
    );
}

function Row<
    T extends BaseRow,
    TColumn extends TableColumnSchema<T>,
>({
    children,
    className,
    columns,
    id,
    rowOptions = [],
    ...props
}: RowProps<T, TColumn>) {
    const { allowsDragging, selectionBehavior } =
        useTableOptions();

    return (
        <AriaRow
            id={id}
            {...props}
            className={(rp) =>
                twMerge(
                    rowStyles(),
                    typeof className === "function"
                        ? className(rp)
                        : className,
                )
            }
        >
            {allowsDragging && (
                <Cell alignment="center" className="px-2">
                    <AriaButton slot="drag">≡</AriaButton>
                </Cell>
            )}

            {selectionBehavior === "toggle" && (
                <Cell alignment="center" className="px-2">
                    <Checkbox slot="selection" />
                </Cell>
            )}
            <Collection items={columns}>
                {children}
            </Collection>

            {rowOptions.length > 0 && (
                <Cell alignment="center" className="px-0">
                    <MenuTrigger>
                        <Button
                            className="rounded-none -outline-offset-2"
                            isIcon
                            variant="tertiary"
                        >
                            <EllipsisVertical />
                        </Button>
                        <Popover placement="bottom end">
                            <Menu items={rowOptions} />
                        </Popover>
                    </MenuTrigger>
                </Cell>
            )}
        </AriaRow>
    );
}

function TableBase({
    className,
    isCompact,
    ...props
}: TableProps) {
    return (
        <AriaTable
            {...props}
            className={(rp) =>
                twMerge(
                    `group/table w-full border-separate border-spacing-0
                    focus:outline-0`,
                    typeof className === "function"
                        ? className(rp)
                        : className,
                )
            }
            data-compact={isCompact}
        />
    );
}

function TableBody<T extends object>(
    props: TableBodyProps<T>,
) {
    return <RACTableBody<T> {...props} />;
}

function TableHeader<
    TColumn extends object,
    TRow extends BaseRow,
>({
    getRowOptions,
    ...props
}: TableHeaderProps<TColumn, TRow>) {
    const {
        allowsDragging,
        selectionBehavior,
        selectionMode,
    } = useTableOptions();

    return (
        <AriaTableHeader {...props}>
            {allowsDragging && (
                <Column
                    alignment="center"
                    className="px-2"
                    id="drag"
                    // minWidth={32}
                    textValue=""
                    width={32}
                />
            )}

            {selectionBehavior === "toggle" ? (
                <Column
                    alignment="center"
                    id="selection"
                    minWidth={32}
                    width={32}
                >
                    {selectionMode === "multiple" ? (
                        <Checkbox slot="selection" />
                    ) : null}
                </Column>
            ) : null}

            <Collection items={props.columns}>
                {props.children}
            </Collection>

            {getRowOptions != null ? (
                <Column
                    alignment="center"
                    className="px-0"
                    id="options"
                    minWidth={40}
                    width={40}
                >
                    {null}
                </Column>
            ) : null}
        </AriaTableHeader>
    );
}

function TableLoadingOverlay({
    showOverlay,
}: {
    showOverlay: boolean;
}) {
    return (
        <div
            className={twMerge(
                "pointer-events-none",
                "bg-base/50",
                "absolute inset-0 z-10",
                "transition-opacity",
                "flex items-center justify-center",
                showOverlay === true
                    ? "opacity-100"
                    : "opacity-0",
            )}
        >
            <Loader className="size-[theme(height.ui-element)] stroke-1" />
        </div>
    );
}

function useSkeleton(
    _showSkeleton:
        | BoolOptsTuple<{ skeletonRowCount?: number }>
        | undefined,
): [boolean, BaseRow[]] {
    const [showSkeleton, { skeletonRowCount }] =
        evalBoolOptsTuple(_showSkeleton);

    const skeletonRows = useMemo(
        () =>
            showSkeleton === true
                ? getSkeletonRows(skeletonRowCount)
                : [],
        [showSkeleton, skeletonRowCount],
    );

    return [showSkeleton, skeletonRows];
}

/**
 * A table displays data in rows and columns and enables a user to navigate its
 * contents via directional navigation keys, and optionally supports row
 * selection and sorting.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/table)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Table.html#tooltip)
 */
export function Table<TRow extends BaseRow = BaseRow>({
    "aria-label": ariaLabel,
    // @ts-expect-error - TODO: Fix CellRenderer types
    cellRenderer: CellRenderer = DefaultCellRenderer<TRow>,
    className,
    columns,
    getRowOptions,
    renderEmptyState,
    rows,
    showLoadingOverlayUI,
    showSkeleton: _showSkeleton,
    ...rest
}: TableRendererProps<TRow>) {
    const [showSkeleton, skeletonRows] =
        useSkeleton(_showSkeleton);

    const rowsToRender = useMemo(() => {
        return showSkeleton === true ? skeletonRows : rows;
    }, [rows, showSkeleton, skeletonRows]);

    return (
        <ResizableTableContainer className={className}>
            <TableLoadingOverlay
                showOverlay={showLoadingOverlayUI === true}
            />
            <TableBase aria-label={ariaLabel} {...rest}>
                <TableHeader<(typeof columns)[number], TRow>
                    columns={columns}
                    getRowOptions={getRowOptions}
                >
                    {(column) => (
                        <Column
                            {...column}
                            // @ts-expect-error - TODO: Fix table
                            // column types
                            id={column.id}
                        />
                    )}
                </TableHeader>
                <TableBody
                    items={rowsToRender}
                    {...(showSkeleton !== true &&
                    renderEmptyState != null
                        ? { renderEmptyState }
                        : {})}
                >
                    {(row) => {
                        const rowOptions: OptionsSchema<"menu">[] =
                            getRowOptions != null
                                ? getRowOptions({
                                      columns,
                                      // @ts-expect-error - TODO: Fix table
                                      // row types
                                      row,
                                  })
                                : [];

                        return (
                            <Row<
                                TRow,
                                (typeof columns)[number]
                            >
                                className={twMerge(
                                    showSkeleton === true ||
                                        showLoadingOverlayUI ===
                                            true
                                        ? "cursor-progress"
                                        : "",
                                )}
                                columns={columns}
                                id={row.id}
                                isDisabled={showSkeleton}
                                rowOptions={rowOptions}
                            >
                                {(column) => (
                                    <Cell
                                        alignment={
                                            column.alignment
                                        }
                                        className={
                                            typeof column.className ===
                                            "string"
                                                ? column.className
                                                : undefined
                                        }
                                        // @ts-expect-error - TODO: Fix table
                                        // column ID types
                                        id={column.id}
                                        showSkeleton={
                                            showSkeleton
                                        }
                                    >
                                        <CellRenderer
                                            // @ts-expect-error - TODO: Fix table
                                            // column types
                                            column={column}
                                            row={row}
                                        />
                                    </Cell>
                                )}
                            </Row>
                        );
                    }}
                </TableBody>
            </TableBase>
        </ResizableTableContainer>
    );
}
Table.displayName = "Table";
