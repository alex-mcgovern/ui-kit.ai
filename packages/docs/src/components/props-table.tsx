import type { ComponentDoc, Props } from "react-docgen-typescript";

import { Table, type TableColumnSchema } from "@ui-kit.ai/components";

const COLUMNS = [
    {
        id: "name",
        isRowHeader: true,
        textValue: "Name",
    },
    {
        id: "type",
        textValue: "Type",
    },
    {
        id: "defaultValue",
        textValue: "Default",
    },
    {
        id: "description",
        textValue: "Description",
    },
] as const satisfies TableColumnSchema<Props & { id: string }>[];

export function PropsTable({ docs }: { docs: ComponentDoc }) {
    console.debug("👉 docs:", Object.values(docs.props));
    return (
        <Table<Props & { id: string }>
            // @ts-expect-error - TODO: fix table types
            cellRenderer={CellRenderer}
            columns={COLUMNS}
            renderEmptyState={() => "No props"}
            // data={Object.values(docs.props)}
            rows={Object.entries(docs.props).map(([name, prop]) => ({
                ...prop,
                id: name,
            }))}
        />
    );
}

function CellRenderer({
    column,
    row,
}: {
    column: TableColumnSchema<Props & { id: string }>;
    row: Props;
}) {
    return row[column.id];
    console.debug("👉 row:", row);
    switch (column.id) {
        case "defaultValue":
            return row[column.id];
        case "description":
            return row[column.id];
        case "name":
            return row[column.id];
        case "type":
            return row[column.id]?.name;
    }
}
