import { delay, http, HttpResponse } from "msw";
import { z } from "zod";

import { getRandomNumber } from "../../lib/get-random-number";

export type ListStockWatchlistItemsResponse = {
    items: {
        id: string;
        name: string;
        percent_change: number;
        price_close: number;
        price_high: number;
        price_open: number;
    };
    meta: {
        perPage: number;
        total: number;
    };
};

export type StockWatchlistItem = {
    id: string;
    name: string;
    percent_change: number;
    price_close: number;
    price_high: number;
    price_open: number;
};

const PAGE_SIZE = 6;

const DATA = [
    {
        id: "AAPL",
        name: "Apple Inc.",
        percent_change: 1.2,
        price_close: 150.75,
        price_high: 152.3,
        price_open: 149.5,
    },
    {
        id: "MSFT",
        name: "Microsoft Corp.",
        percent_change: -0.5,
        price_close: 299.1,
        price_high: 301.0,
        price_open: 298.0,
    },
    {
        id: "AMZN",
        name: "Amazon.com Inc.",
        percent_change: 0.8,
        price_close: 3450.0,
        price_high: 3475.0,
        price_open: 3420.0,
    },
    {
        id: "GOOGL",
        name: "Alphabet Inc.",
        percent_change: 1.5,
        price_close: 2800.5,
        price_high: 2825.0,
        price_open: 2780.0,
    },
    {
        id: "TSLA",
        name: "Tesla Inc.",
        percent_change: -2.1,
        price_close: 720.0,
        price_high: 735.0,
        price_open: 710.0,
    },
    {
        id: "FB",
        name: "Facebook Inc.",
        percent_change: 0.3,
        price_close: 355.0,
        price_high: 360.0,
        price_open: 350.0,
    },
    {
        id: "NVDA",
        name: "NVIDIA Corp.",
        percent_change: 2.0,
        price_close: 220.0,
        price_high: 225.0,
        price_open: 215.0,
    },
    {
        id: "PYPL",
        name: "PayPal Holdings Inc.",
        percent_change: -1.0,
        price_close: 275.0,
        price_high: 280.0,
        price_open: 270.0,
    },
    {
        id: "NFLX",
        name: "Netflix Inc.",
        percent_change: 1.8,
        price_close: 590.0,
        price_high: 600.0,
        price_open: 580.0,
    },
    {
        id: "ADBE",
        name: "Adobe Inc.",
        percent_change: 0.7,
        price_close: 650.0,
        price_high: 655.0,
        price_open: 640.0,
    },
    {
        id: "INTC",
        name: "Intel Corp.",
        percent_change: -0.4,
        price_close: 55.0,
        price_high: 56.0,
        price_open: 54.5,
    },
    {
        id: "CSCO",
        name: "Cisco Systems Inc.",
        percent_change: 1.1,
        price_close: 60.0,
        price_high: 61.0,
        price_open: 59.0,
    },
    {
        id: "ORCL",
        name: "Oracle Corp.",
        percent_change: 0.9,
        price_close: 90.0,
        price_high: 92.0,
        price_open: 88.0,
    },
    {
        id: "CRM",
        name: "Salesforce.com Inc.",
        percent_change: 1.4,
        price_close: 250.0,
        price_high: 255.0,
        price_open: 245.0,
    },
    {
        id: "QCOM",
        name: "Qualcomm Inc.",
        percent_change: -0.7,
        price_close: 140.0,
        price_high: 142.0,
        price_open: 138.0,
    },
    {
        id: "AMD",
        name: "Advanced Micro Devices Inc.",
        percent_change: 2.5,
        price_close: 110.0,
        price_high: 112.0,
        price_open: 108.0,
    },
    {
        id: "IBM",
        name: "International Business Machines Corp.",
        percent_change: -1.2,
        price_close: 145.0,
        price_high: 147.0,
        price_open: 143.0,
    },
    {
        id: "UBER",
        name: "Uber Technologies Inc.",
        percent_change: 0.6,
        price_close: 45.0,
        price_high: 46.0,
        price_open: 44.0,
    },
] as const satisfies StockWatchlistItem[];

const searchParamsSchema = z.object({
    page: z
        .string()
        .pipe(z.coerce.number())
        .optional()
        .default("0"),
    search: z.string().optional(),
});

export type GetStockWatchlistItemsData = z.input<
    typeof searchParamsSchema
>;

export const getStocksHandler = http.get(
    "/stocks",
    async ({ request }) => {
        await delay(getRandomNumber(300, 1200));

        const url = new URL(request.url);

        const { page, search } = await searchParamsSchema
            .parseAsync(
                Object.fromEntries(
                    url.searchParams.entries(),
                ),
            )
            .catch(() => {
                throw new Error("Invalid search params");
            });

        let items: StockWatchlistItem[] = [...DATA];

        if (search != null && search !== "") {
            items = items.filter((i) =>
                Object.values(i).some(
                    (e: number | string) =>
                        e
                            .toString()
                            .toLowerCase()
                            .includes(search.toLowerCase()),
                ),
            );
        }

        const itemsInPage = items.slice(
            page * PAGE_SIZE,
            (page + 1) * PAGE_SIZE,
        );

        return HttpResponse.json({
            items: itemsInPage,
            meta: {
                perPage: PAGE_SIZE,
                total: items.length,
            },
        });
    },
);
