import { typography } from "@boondoggle/css-variants";
import { Faker, en } from "@faker-js/faker";
import { createColumnHelper } from "@tanstack/react-table";

import { Avatar } from "../../avatar";
import { Box } from "../../box";
import { Pill } from "../../pill";
const faker = new Faker({ locale: [en] });

faker.seed(42);

export type MockTableData = {
    balance: number;
    email_address: string;
    first_name: string;
    last_name: string;
    points: number;
    status: "active" | "inactive" | "invited";
};

/**
 * Generate a mock account column.
 */
export const mockColumn = (): MockTableData => {
    return {
        balance: faker.number.int(10000),
        email_address: faker.internet.email(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        points: faker.number.int(10),
        status: faker.helpers.arrayElement(["active", "inactive", "invited"]),
    };
};

const columnHelper = createColumnHelper<MockTableData>();

export const COLUMNS = [
    columnHelper.accessor(
        (row) => {
            return `${row.first_name} ${row.last_name} ${row.email_address}`;
        },
        {
            cell: ({ row }) => {
                return (
                    <Box
                        alignItems="center"
                        display="flex"
                        gap="space_2"
                    >
                        <Avatar
                            firstName={row.original.first_name}
                            lastName={row.original.last_name}
                            size={32}
                        />
                        <Box>
                            <Box
                                className={typography.body_sm}
                                fontWeight="medium"
                            >
                                {row.original.first_name}{" "}
                                {row.original.last_name}
                            </Box>
                            <Box
                                className={typography.body_sm}
                                color="text_low_contrast"
                            >
                                {row.original.email_address}
                            </Box>
                        </Box>
                    </Box>
                );
            },
            header: () => {
                return "Team member";
            },
            id: "member",
        },
    ),
    columnHelper.accessor("status", {
        cell: (info) => {
            return <Pill>{info.getValue()}</Pill>;
        },
        header: () => {
            return "Status";
        },
    }),
    columnHelper.accessor("balance", {
        cell: (info) => {
            return info.getValue() / 100;
        },
        header: "Balance",
    }),
    columnHelper.accessor("points", {
        cell: (info) => {
            return info.getValue();
        },
        header: "Points",
    }),
];
