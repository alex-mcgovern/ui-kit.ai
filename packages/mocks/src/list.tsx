import type { ListSchema } from "@boondoggle.design/types";

import { FlagAe } from "../../../src/icon-flag/ae";
import { FlagDe } from "../../../src/icon-flag/de";
import { FlagEs } from "../../../src/icon-flag/es";
import { FlagFr } from "../../../src/icon-flag/fr";
import { FlagOm } from "../../../src/icon-flag/om";
import { FlagSa } from "../../../src/icon-flag/sa";

export const LIST_SCHEMA_MOCK: ListSchema = [
    {
        children: [
            {
                id: "france",
                label: "France",
                slotLeft: (
                    <FlagFr
                        height="space_4"
                        width="space_4"
                    />
                ),
            },
            {
                id: "germany",
                label: "Germany",
                slotLeft: (
                    <FlagDe
                        height="space_4"
                        width="space_4"
                    />
                ),
            },
            {
                id: "spain",
                label: "Spain",
                slotLeft: (
                    <FlagEs
                        height="space_4"
                        width="space_4"
                    />
                ),
            },
        ],
        id: "europe",
        label: "Europe",
    },
    {
        children: [
            {
                id: "uae",
                label: "United Arab Emirates",
                slotLeft: (
                    <FlagAe
                        height="space_4"
                        width="space_4"
                    />
                ),
            },
            {
                id: "saudi_arabia",
                label: "Saudi Arabia",
                slotLeft: (
                    <FlagSa
                        height="space_4"
                        width="space_4"
                    />
                ),
            },
            {
                id: "oman",
                label: "Oman",
                slotLeft: (
                    <FlagOm
                        height="space_4"
                        width="space_4"
                    />
                ),
            },
        ],
        id: "mena",
        label: "MENA",
    },
];
