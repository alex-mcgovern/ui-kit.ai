import type { RowData, Table } from "@tanstack/react-table";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";

import { i18n } from "../../../_i18n";
import { Box } from "../../../box";

export function TablePagination<TRowData extends RowData>({
    table,
}: {
    table: Table<TRowData>;
}) {
    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_2"
            marginY="space_3"
            paddingX="space_4"
        >
            <Box
                alignItems="center"
                as="span"
                className={typography.body_md}
                display="flex"
                gap="space_1"
                marginRight="auto"
                marginY="space_1"
            >
                <Box fontWeight="semibold">
                    {table.getPrePaginationRowModel().rows.length}
                </Box>
                <Box>{i18n.results}.</Box>

                {!!table.getPageCount() && (
                    <>
                        <Box>{i18n.page}</Box>
                        <Box
                            fontWeight="semibold"
                            whiteSpace="nowrap"
                        >
                            {table.getState().pagination.pageIndex + 1} of{" "}
                            {table.getPageCount()}
                        </Box>
                    </>
                )}
            </Box>

            <Box
                alignItems="center"
                display="flex"
                gap="space_2"
            >
                <Button
                    isDisabled={!table.getCanPreviousPage()}
                    name="button_previous_page"
                    onPress={() => table.previousPage()}
                    size={SizeVariant.SM}
                    variant={ButtonVariant.SECONDARY}
                >
                    {i18n.prev}
                </Button>
                <Button
                    isDisabled={!table.getCanNextPage()}
                    name="button_next_page"
                    onPress={() => table.nextPage()}
                    size={SizeVariant.SM}
                    variant={ButtonVariant.SECONDARY}
                >
                    {i18n.next}
                </Button>
            </Box>
        </Box>
    );
}
