import type { Meta, StoryObj } from "@storybook/react";
import type {
    TableCellRenderer,
    TableColumnSchema,
} from "@ui-kit.ai/components";
import type {
    GetStockWatchlistItemsData,
    ListStockWatchlistItemsResponse,
    StockWatchlistItem,
} from "@ui-kit.ai/mocks";
import type { ComponentProps } from "react";
import type { SortDirection } from "react-aria-components";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
    Button,
    Dialog,
    DialogCloseButton,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    EmptyState,
    FieldGroup,
    Input,
    Kbd,
    Menu,
    MenuTrigger,
    Popover,
    SearchField,
    SearchFieldClearButton,
    Table,
    useKbd,
} from "@ui-kit.ai/components";
import { getStocksHandler } from "@ui-kit.ai/mocks";
import {
    ArrowDownRight,
    ArrowUpRight,
    FilterIcon,
    PlusIcon,
    Search,
    SearchXIcon,
} from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const COLUMNS: TableColumnSchema<StockWatchlistItem>[] = [
    {
        allowsSorting: true,
        id: "id",
        isRowHeader: true,
        maxWidth: 100,
        minWidth: 80,
        textValue: "Code",
    },
    {
        allowsSorting: true,
        id: "name",
        textValue: "Name",
    },
    {
        alignment: "end",
        allowsSorting: true,
        className: "border-l border-l-muted-200 tabular-nums",
        id: "price_high",
        maxWidth: 100,
        minWidth: 100,
        textValue: "High",
    },
    {
        alignment: "end",
        allowsSorting: true,
        className: "tabular-nums",
        id: "price_open",
        maxWidth: 100,
        minWidth: 100,
        textValue: "Open",
    },
    {
        alignment: "end",
        allowsSorting: true,
        className: "border-r border-r-muted-200 tabular-nums",
        id: "price_close",
        maxWidth: 100,
        minWidth: 100,
        textValue: "Close",
    },
    {
        alignment: "end",
        allowsSorting: true,
        id: "percent_change",
        maxWidth: 100,
        minWidth: 80,
        textValue: "Change (%)",
    },
];

const CellRenderer: TableCellRenderer<StockWatchlistItem> = ({
    column,
    row,
}) => {
    switch (column.id) {
        case "id":
        case "name":
            return row[column.id];
        case "percent_change": {
            const formatted = new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                signDisplay: "always",
            }).format(row[column.id]);

            const isPositive = row[column.id] > 0;
            const Icon = isPositive ? ArrowUpRight : ArrowDownRight;

            return (
                <div
                    className={twMerge(
                        "flex items-center justify-end gap-1",
                        isPositive ? "text-green-600" : "text-red-600",
                    )}
                >
                    <Icon className="size-4" />
                    <span>{formatted}</span>
                </div>
            );
        }
        case "price_close":
        case "price_high":
        case "price_open":
            return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
            }).format(row[column.id]);
        default:
            return column.id satisfies never;
    }
};

const meta = {
    args: {
        "aria-label": "Watchlist",
        // @ts-expect-error - TODO: fix CellRenderer types
        cellRenderer: CellRenderer,
        columns: COLUMNS,
        disabledKeys: ["TWTR", "AMZN"],
        getRowOptions: ({ row }) => [
            {
                id: "buy-sell",
                items: [
                    {
                        id: "buy",
                        textValue: `Buy ${row.id}`,
                    },
                    {
                        id: "sell",
                        textValue: `Sell ${row.id}`,
                    },
                ],
                textValue: "Buy/Sell",
            },
            {
                id: "watchlist",
                items: [
                    {
                        id: "create-alert",
                        textValue: `Create alert for ${row.id}`,
                    },
                    {
                        id: "remove",
                        isDestructive: true,
                        textValue: `Remove ${row.id} from watchlist`,
                    },
                ],
                textValue: "Watchlist",
            },
        ],
        rows: [],
        selectionBehavior: "toggle",
        selectionMode: "multiple",
    },
    component: Table,
    parameters: {
        msw: {
            handlers: [getStocksHandler],
        },
    },
    title: "Components/Table",
} satisfies Meta<typeof Table<StockWatchlistItem>>;

export default meta;
type Story = StoryObj<typeof meta>;

const sortItems = (
    a: StockWatchlistItem,
    b: StockWatchlistItem,
    column: keyof StockWatchlistItem,
) => {
    if (typeof a[column] === "string" && typeof b[column] === "string") {
        return a[column].toString().localeCompare(b[column].toString());
    }
    if (typeof a[column] === "number" && typeof b[column] === "number") {
        return a[column] - b[column];
    }

    return 0;
};

const useGetStocklistWatchItems = (options: GetStockWatchlistItemsData) => {
    return useQuery({
        placeholderData: keepPreviousData,
        queryFn: async (): Promise<
            ListStockWatchlistItemsResponse | undefined
        > => {
            const searchParams = new URLSearchParams(options);

            const resp = await fetch(`/stocks?${searchParams.toString()}`);
            if (!resp.ok) {
                throw new Error("Failed to fetch stocks");
            }
            const data = await resp.json();
            if (!Array.isArray(data.items)) {
                throw new Error("Invalid response format");
            }
            return data as ListStockWatchlistItemsResponse;
        },
        queryKey: ["stocks", options],
    });
};

const useSortedItems = (rows: StockWatchlistItem[] = []) => {
    const [sortDescriptor, setSortDescriptor] = useState<{
        column: keyof StockWatchlistItem;
        direction: SortDirection;
    }>({
        column: "id",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        const sorted = rows
            .slice() // copy the array
            .sort((a, b) => sortItems(a, b, sortDescriptor.column));
        if (sortDescriptor.direction === "descending") {
            sorted.reverse();
        }
        return sorted;
    }, [rows, sortDescriptor.column, sortDescriptor.direction]);

    return {
        setSortDescriptor,
        sortDescriptor,
        sortedItems,
    };
};

function DialogAddToWatchList() {
    const ref = useRef<HTMLButtonElement>(null);

    useKbd([["c", () => ref.current?.click()]]);

    return (
        <DialogTrigger>
            <Button
                className="ml-auto"
                ref={ref}
                slotLeft={<PlusIcon />}
                slotRight={<Kbd>C</Kbd>}
                variant="primary"
            >
                Add to watchlist
            </Button>
            <Dialog>
                <DialogHeader>
                    <DialogTitle>Hello there</DialogTitle>
                    <DialogCloseButton />
                </DialogHeader>

                <DialogContent>Hello there</DialogContent>

                <DialogFooter>
                    <Button
                        className="ml-auto"
                        onPress={() => close()}
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                        type="submit"
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </DialogTrigger>
    );
}

function SearchFieldWatchlist({
    search,
    setSearch,
}: {
    search: string;
    setSearch: (v: string) => void;
}) {
    const ref = useRef<HTMLInputElement>(null);

    useKbd([["/", () => ref.current?.focus()]]);

    return (
        <SearchField className="max-w-64" onChange={setSearch} value={search}>
            <FieldGroup>
                <Input
                    icon={<Search />}
                    isBorderless
                    placeholder="Search..."
                    ref={ref}
                />
                <SearchFieldClearButton />
                <Kbd className="mr-2">/</Kbd>
            </FieldGroup>
        </SearchField>
    );
}

function Template({
    rows,
    ...args
}: ComponentProps<typeof Table<StockWatchlistItem>>) {
    const [page, setPage] = useState<number>(0);

    const [search, _setSearch] = useState<string>("");
    const setSearch = (v: string) => {
        _setSearch(v);
        setPage(0);
    };

    const { data, isLoading, isPlaceholderData } = useGetStocklistWatchItems({
        page: page.toString(),
        search,
    });

    const {
        setSortDescriptor,
        sortDescriptor,
        sortedItems,
        // @ts-expect-error - TODO: fix table stories types
    } = useSortedItems(data?.items ?? []);

    const renderEmptyState: ComponentProps<
        typeof Table<StockWatchlistItem>
    >["renderEmptyState"] = useCallback(() => {
        return (
            <EmptyState
                actions={[
                    <Button key="clear-search" onPress={() => setSearch("")}>
                        Clear search
                    </Button>,
                ]}
                body="Try another search term, or clearing the search."
                icon={SearchXIcon}
                title={`No search results for "${search}"`}
            />
        );
    }, [search]);

    return (
        <section className="w-full bg-base px-6 py-4">
            <div className="mb-4 flex items-center gap-2">
                <SearchFieldWatchlist search={search} setSearch={setSearch} />
                <MenuTrigger>
                    <Button isIcon variant="secondary">
                        <FilterIcon />
                    </Button>
                    <Popover>
                        <Menu
                            items={[
                                {
                                    id: "foo",
                                    textValue: "bar",
                                },
                            ]}
                        />
                    </Popover>
                </MenuTrigger>

                <DialogAddToWatchList />
            </div>
            <Table<StockWatchlistItem>
                {...args}
                // @ts-expect-error - TODO: Fix table stories types
                onSortChange={setSortDescriptor}
                renderEmptyState={renderEmptyState}
                rows={sortedItems}
                showLoadingOverlayUI={isPlaceholderData}
                showSkeleton={
                    isLoading ? [isLoading, { skeletonRowCount: 10 }] : false
                }
                sortDescriptor={sortDescriptor}
            />

            <div className="ml-auto mt-4 flex items-center justify-center gap-2">
                {Array.from({
                    length: Math.ceil(
                        (data?.meta.total ?? 0) / (data?.meta.perPage ?? 0),
                    ),
                }).map((_, i) => (
                    <Button
                        isIcon
                        onPress={() => setPage(i)}
                        variant={i === page ? "primary" : "secondary"}
                    >
                        {i + 1}
                    </Button>
                ))}
            </div>
        </section>
    );
}

export const Primary: Story = {
    // @ts-expect-error - TODO: fix table stories types
    args: {},
    name: "Table",
    // @ts-expect-error - TODO: fix table stories types
    render: Template,
};
