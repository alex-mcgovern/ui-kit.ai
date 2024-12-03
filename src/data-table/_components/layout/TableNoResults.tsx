import type { RowData, Table } from "@tanstack/react-table";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { typography } from "@boondoggle.design/css-variants";
import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";

import { i18n } from "../../../_i18n";
import { arrayHasLength } from "../../../_lib/array-has-length";
import { Box } from "../../../box";
import { Icon } from "../../../icon";

export function TableNoResults<TRowData extends RowData>({
    table,
}: {
    table: Table<TRowData>;
}) {
    const isFiltered =
        table.getState().globalFilter ||
        arrayHasLength(table.getState().columnFilters);

    return (
        <Box
            alignItems="center"
            className={typography.body_md}
            color="text_low_contrast"
            display="flex"
            flexDirection="column"
            gap="space_4"
            justifyContent="center"
            paddingX="space_4"
            paddingY="space_12"
            textAlign="center"
        >
            <Icon
                icon={faCircleExclamation}
                size="3x"
            />

            <Box
                className={typography.body_lg}
                fontWeight="semibold"
            >
                {i18n.no_results_found}
            </Box>

            {isFiltered && (
                <Button
                    name="clear_filters"
                    onPress={() => {
                        table.setColumnFilters([]);
                        table.setGlobalFilter("");
                    }}
                    size={SizeVariant.SM}
                    variant={ButtonVariant.SECONDARY}
                >
                    {i18n.clear_all_filters}
                </Button>
            )}
        </Box>
    );
}
