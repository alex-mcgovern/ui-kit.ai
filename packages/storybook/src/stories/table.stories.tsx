import type { Meta, StoryObj } from '@storybook/react'
import type { TableColumnSchema } from '@ui-kit.ai/components'
import type { StockWatchlistItem } from '@ui-kit.ai/mocks'
import type { ComponentProps } from 'react'

import { Table } from '@ui-kit.ai/components'
import { getStocksHandler } from '@ui-kit.ai/mocks'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const COLUMNS: TableColumnSchema<StockWatchlistItem>[] = [
    {
        allowsSorting: true,
        id: 'id',
        isRowHeader: true,
        maxWidth: 100,
        minWidth: 80,
        textValue: 'Code',
    },
    {
        allowsSorting: true,
        id: 'name',
        textValue: 'Name',
    },
    {
        alignment: 'end',
        allowsSorting: true,
        className: 'border-l border-l-muted-200 tabular-nums',
        id: 'price_high',
        maxWidth: 100,
        minWidth: 100,
        textValue: 'High',
    },
    {
        alignment: 'end',
        allowsSorting: true,
        className: 'tabular-nums',
        id: 'price_open',
        maxWidth: 100,
        minWidth: 100,
        textValue: 'Open',
    },
    {
        alignment: 'end',
        allowsSorting: true,
        className: 'border-r border-r-muted-200 tabular-nums',
        id: 'price_close',
        maxWidth: 100,
        minWidth: 100,
        textValue: 'Close',
    },
    {
        alignment: 'end',
        allowsSorting: true,
        id: 'percent_change',
        maxWidth: 100,
        minWidth: 80,
        textValue: 'Change (%)',
    },
]

function CellRenderer({
    column,
    row,
}: {
    column: TableColumnSchema<StockWatchlistItem>
    row: StockWatchlistItem
}) {
    switch (column.id) {
        case 'id':
        case 'name':
            return row[column.id]
        case 'percent_change': {
            const formatted = new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                signDisplay: 'always',
            }).format(row[column.id])

            const isPositive = row[column.id] > 0
            const Icon = isPositive ? ArrowUpRight : ArrowDownRight

            return (
                <div
                    className={twMerge(
                        'text-mid-contrast flex items-center justify-end gap-1',
                        isPositive ? 'success' : 'error'
                    )}
                >
                    <Icon className='size-4' />
                    <span>{formatted}</span>
                </div>
            )
        }
        case 'price_close':
        case 'price_high':
        case 'price_open':
            return new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
            }).format(row[column.id])
        default:
            return column.id satisfies never
    }
}

const meta = {
    args: {
        'aria-label': 'Watchlist',
        // @ts-expect-error - TODO: fix CellRenderer types
        cellRenderer: CellRenderer,
        columns: COLUMNS,
        disabledKeys: ['TWTR', 'AMZN'],
        getRowOptions: ({ row }) => [
            {
                id: 'buy-sell',
                items: [
                    {
                        id: 'buy',
                        textValue: `Buy ${row.id}`,
                    },
                    {
                        id: 'sell',
                        textValue: `Sell ${row.id}`,
                    },
                ],
                textValue: 'Buy/Sell',
            },
            {
                id: 'watchlist',
                items: [
                    {
                        id: 'create-alert',
                        textValue: `Create alert for ${row.id}`,
                    },
                    {
                        id: 'remove',
                        intent: 'error',
                        textValue: `Remove ${row.id} from watchlist`,
                    },
                ],
                textValue: 'Watchlist',
            },
        ],
        rows: [],
        selectionBehavior: 'toggle',
        selectionMode: 'multiple',
    },
    component: Table,
    parameters: {
        msw: {
            handlers: [getStocksHandler],
        },
        parameters: {
            displayName: 'Default',
        },
    },
    title: 'Components/Table',
} satisfies Meta<typeof Table<StockWatchlistItem>>

export default meta
type Story = StoryObj<typeof meta>

function Template({ rows, ...args }: ComponentProps<typeof Table<StockWatchlistItem>>) {
    return (
        <Table<StockWatchlistItem>
            {...args}
            rows={[
                {
                    id: 'AAPL',
                    name: 'Apple Inc.',
                    percent_change: 1.2,
                    price_close: 150.75,
                    price_high: 152.3,
                    price_open: 149.5,
                },
                {
                    id: 'MSFT',
                    name: 'Microsoft Corp.',
                    percent_change: -0.5,
                    price_close: 299.1,
                    price_high: 301.0,
                    price_open: 298.0,
                },
                {
                    id: 'AMZN',
                    name: 'Amazon.com Inc.',
                    percent_change: 0.8,
                    price_close: 3450.0,
                    price_high: 3475.0,
                    price_open: 3420.0,
                },
                {
                    id: 'GOOGL',
                    name: 'Alphabet Inc.',
                    percent_change: 1.5,
                    price_close: 2800.5,
                    price_high: 2825.0,
                    price_open: 2780.0,
                },
                {
                    id: 'TSLA',
                    name: 'Tesla Inc.',
                    percent_change: -2.1,
                    price_close: 720.0,
                    price_high: 735.0,
                    price_open: 710.0,
                },
            ]}
        />
    )
}

export const Default: Story = {
    // @ts-expect-error - TODO: fix table stories types
    args: {},
    parameters: {
        displayName: 'Default',
    },
    // @ts-expect-error - TODO: fix table stories types
    render: Template,
}
