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

const PAGE_SIZE = 15;

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
    {
        id: "LYFT",
        name: "Lyft Inc.",
        percent_change: -0.8,
        price_close: 55.0,
        price_high: 56.0,
        price_open: 54.0,
    },
    {
        id: "SNAP",
        name: "Snap Inc.",
        percent_change: 1.3,
        price_close: 70.0,
        price_high: 72.0,
        price_open: 68.0,
    },
    {
        id: "TWTR",
        name: "Twitter Inc.",
        percent_change: -0.9,
        price_close: 65.0,
        price_high: 66.0,
        price_open: 64.0,
    },
    {
        id: "ZM",
        name: "Zoom Video Communications Inc.",
        percent_change: 2.1,
        price_close: 300.0,
        price_high: 305.0,
        price_open: 295.0,
    },
    {
        id: "SHOP",
        name: "Shopify Inc.",
        percent_change: 1.7,
        price_close: 1400.0,
        price_high: 1420.0,
        price_open: 1380.0,
    },
    {
        id: "SQ",
        name: "Square Inc.",
        percent_change: -1.5,
        price_close: 250.0,
        price_high: 255.0,
        price_open: 245.0,
    },
    {
        id: "SPOT",
        name: "Spotify Technology S.A.",
        percent_change: 0.4,
        price_close: 230.0,
        price_high: 232.0,
        price_open: 228.0,
    },

    {
        id: "BABA",
        name: "Alibaba Group Holding Ltd.",
        percent_change: 1.1,
        price_close: 210.0,
        price_high: 215.0,
        price_open: 208.0,
    },
    {
        id: "V",
        name: "Visa Inc.",
        percent_change: 0.5,
        price_close: 230.0,
        price_high: 232.0,
        price_open: 228.0,
    },
    {
        id: "MA",
        name: "Mastercard Inc.",
        percent_change: 0.8,
        price_close: 370.0,
        price_high: 375.0,
        price_open: 365.0,
    },
    {
        id: "JPM",
        name: "JPMorgan Chase & Co.",
        percent_change: -0.3,
        price_close: 160.0,
        price_high: 162.0,
        price_open: 158.0,
    },
    {
        id: "BAC",
        name: "Bank of America Corp.",
        percent_change: 0.2,
        price_close: 40.0,
        price_high: 41.0,
        price_open: 39.5,
    },
    {
        id: "WMT",
        name: "Walmart Inc.",
        percent_change: 0.6,
        price_close: 145.0,
        price_high: 147.0,
        price_open: 143.0,
    },
    {
        id: "DIS",
        name: "The Walt Disney Co.",
        percent_change: 1.3,
        price_close: 180.0,
        price_high: 182.0,
        price_open: 178.0,
    },
    {
        id: "PG",
        name: "Procter & Gamble Co.",
        percent_change: 0.4,
        price_close: 140.0,
        price_high: 142.0,
        price_open: 138.0,
    },
    {
        id: "KO",
        name: "The Coca-Cola Co.",
        percent_change: 0.7,
        price_close: 55.0,
        price_high: 56.0,
        price_open: 54.0,
    },
    {
        id: "PEP",
        name: "PepsiCo Inc.",
        percent_change: 0.9,
        price_close: 150.0,
        price_high: 152.0,
        price_open: 148.0,
    },
    {
        id: "NKE",
        name: "Nike Inc.",
        percent_change: 1.0,
        price_close: 130.0,
        price_high: 132.0,
        price_open: 128.0,
    },
    {
        id: "MCD",
        name: "McDonald's Corp.",
        percent_change: 0.5,
        price_close: 240.0,
        price_high: 242.0,
        price_open: 238.0,
    },
    {
        id: "SBUX",
        name: "Starbucks Corp.",
        percent_change: 1.2,
        price_close: 115.0,
        price_high: 117.0,
        price_open: 113.0,
    },
    {
        id: "BA",
        name: "The Boeing Co.",
        percent_change: -0.6,
        price_close: 220.0,
        price_high: 225.0,
        price_open: 218.0,
    },
    {
        id: "GE",
        name: "General Electric Co.",
        percent_change: 0.3,
        price_close: 105.0,
        price_high: 107.0,
        price_open: 104.0,
    },
    {
        id: "CAT",
        name: "Caterpillar Inc.",
        percent_change: 0.8,
        price_close: 210.0,
        price_high: 212.0,
        price_open: 208.0,
    },
    {
        id: "MMM",
        name: "3M Co.",
        percent_change: -0.4,
        price_close: 180.0,
        price_high: 182.0,
        price_open: 178.0,
    },
    {
        id: "HON",
        name: "Honeywell International Inc.",
        percent_change: 0.6,
        price_close: 230.0,
        price_high: 232.0,
        price_open: 228.0,
    },
    {
        id: "RTX",
        name: "Raytheon Technologies Corp.",
        percent_change: 0.7,
        price_close: 90.0,
        price_high: 92.0,
        price_open: 88.0,
    },
    {
        id: "LMT",
        name: "Lockheed Martin Corp.",
        percent_change: 1.1,
        price_close: 370.0,
        price_high: 375.0,
        price_open: 365.0,
    },
    {
        id: "GS",
        name: "The Goldman Sachs Group Inc.",
        percent_change: -0.5,
        price_close: 350.0,
        price_high: 355.0,
        price_open: 345.0,
    },
    {
        id: "MS",
        name: "Morgan Stanley",
        percent_change: 0.4,
        price_close: 95.0,
        price_high: 97.0,
        price_open: 94.0,
    },
    {
        id: "C",
        name: "Citigroup Inc.",
        percent_change: -0.2,
        price_close: 70.0,
        price_high: 72.0,
        price_open: 69.0,
    },
    {
        id: "T",
        name: "AT&T Inc.",
        percent_change: 0.3,
        price_close: 30.0,
        price_high: 31.0,
        price_open: 29.5,
    },
    {
        id: "VZ",
        name: "Verizon Communications Inc.",
        percent_change: 0.5,
        price_close: 55.0,
        price_high: 56.0,
        price_open: 54.0,
    },
    {
        id: "TM",
        name: "Toyota Motor Corp.",
        percent_change: 1.0,
        price_close: 180.0,
        price_high: 182.0,
        price_open: 178.0,
    },
    {
        id: "HMC",
        name: "Honda Motor Co. Ltd.",
        percent_change: 0.6,
        price_close: 30.0,
        price_high: 31.0,
        price_open: 29.5,
    },
    {
        id: "F",
        name: "Ford Motor Co.",
        percent_change: 0.8,
        price_close: 15.0,
        price_high: 15.5,
        price_open: 14.8,
    },
    {
        id: "GM",
        name: "General Motors Co.",
        percent_change: 0.7,
        price_close: 60.0,
        price_high: 61.0,
        price_open: 59.0,
    },
    {
        id: "TSM",
        name: "Taiwan Semiconductor Manufacturing Co. Ltd.",
        percent_change: 1.2,
        price_close: 120.0,
        price_high: 122.0,
        price_open: 118.0,
    },
    {
        id: "ASML",
        name: "ASML Holding N.V.",
        percent_change: 1.5,
        price_close: 700.0,
        price_high: 710.0,
        price_open: 690.0,
    },
    {
        id: "SAP",
        name: "SAP SE",
        percent_change: 0.9,
        price_close: 140.0,
        price_high: 142.0,
        price_open: 138.0,
    },
    {
        id: "ORAN",
        name: "Orange S.A.",
        percent_change: 0.4,
        price_close: 12.0,
        price_high: 12.2,
        price_open: 11.8,
    },
    {
        id: "SNY",
        name: "Sanofi",
        percent_change: 0.6,
        price_close: 50.0,
        price_high: 51.0,
        price_open: 49.5,
    },
    {
        id: "NVS",
        name: "Novartis AG",
        percent_change: 0.8,
        price_close: 90.0,
        price_high: 91.0,
        price_open: 89.0,
    },
    {
        id: "PFE",
        name: "Pfizer Inc.",
        percent_change: 0.5,
        price_close: 40.0,
        price_high: 41.0,
        price_open: 39.5,
    },
    {
        id: "MRK",
        name: "Merck & Co. Inc.",
        percent_change: 0.7,
        price_close: 80.0,
        price_high: 81.0,
        price_open: 79.0,
    },
    {
        id: "JNJ",
        name: "Johnson & Johnson",
        percent_change: 0.6,
        price_close: 160.0,
        price_high: 162.0,
        price_open: 158.0,
    },
    {
        id: "ABBV",
        name: "AbbVie Inc.",
        percent_change: 0.9,
        price_close: 120.0,
        price_high: 122.0,
        price_open: 118.0,
    },
    {
        id: "LLY",
        name: "Eli Lilly and Co.",
        percent_change: 1.1,
        price_close: 220.0,
        price_high: 225.0,
        price_open: 218.0,
    },
    {
        id: "BMY",
        name: "Bristol-Myers Squibb Co.",
        percent_change: 0.4,
        price_close: 65.0,
        price_high: 66.0,
        price_open: 64.0,
    },
    {
        id: "GILD",
        name: "Gilead Sciences Inc.",
        percent_change: 0.5,
        price_close: 70.0,
        price_high: 71.0,
        price_open: 69.0,
    },
    {
        id: "AMGN",
        name: "Amgen Inc.",
        percent_change: 0.8,
        price_close: 240.0,
        price_high: 242.0,
        price_open: 238.0,
    },
    {
        id: "REGN",
        name: "Regeneron Pharmaceuticals Inc.",
        percent_change: 1.2,
        price_close: 600.0,
        price_high: 610.0,
        price_open: 590.0,
    },
    {
        id: "BIIB",
        name: "Biogen Inc.",
        percent_change: 0.7,
        price_close: 300.0,
        price_high: 305.0,
        price_open: 295.0,
    },
    {
        id: "VRTX",
        name: "Vertex Pharmaceuticals Inc.",
        percent_change: 0.9,
        price_close: 220.0,
        price_high: 225.0,
        price_open: 218.0,
    },
    {
        id: "ILMN",
        name: "Illumina Inc.",
        percent_change: 1.0,
        price_close: 400.0,
        price_high: 410.0,
        price_open: 390.0,
    },
    {
        id: "ISRG",
        name: "Intuitive Surgical Inc.",
        percent_change: 1.3,
        price_close: 800.0,
        price_high: 810.0,
        price_open: 790.0,
    },
    {
        id: "RMD",
        name: "ResMed Inc.",
        percent_change: 0.6,
        price_close: 250.0,
        price_high: 255.0,
        price_open: 245.0,
    },
    {
        id: "EW",
        name: "Edwards Lifesciences Corp.",
        percent_change: 0.8,
        price_close: 120.0,
        price_high: 122.0,
        price_open: 118.0,
    },
] as const satisfies StockWatchlistItem[];

const searchParamsSchema = z.object({
    page: z
        .string()
        .pipe(z.coerce.number())
        .optional()
        .default(0),
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
