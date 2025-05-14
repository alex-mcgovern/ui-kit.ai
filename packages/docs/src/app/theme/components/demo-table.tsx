import {
    Cell,
    Column,
    ResizableTableContainer,
    Row,
    Table,
    TableBody,
    TableHeader,
} from '@ui-kit.ai/components'

import { DemoContainer } from './demo-container'

export function DemoTable() {
    return (
        <DemoContainer>
            <ResizableTableContainer>
                <Table
                    aria-label='Stocks table'
                    selectionMode='single'
                >
                    <TableHeader>
                        <Column isRowHeader>Code</Column>
                        <Column>Name</Column>
                        <Column alignment='end'>High</Column>
                        <Column alignment='end'>Open</Column>
                        <Column alignment='end'>Close</Column>
                    </TableHeader>
                    <TableBody>
                        <Row>
                            <Cell>TSLA</Cell>
                            <Cell>Tesla Inc.</Cell>
                            <Cell alignment='end'>720.00</Cell>
                            <Cell alignment='end'>710.00</Cell>
                            <Cell alignment='end'>735.00</Cell>
                        </Row>
                        <Row>
                            <Cell>AMZN</Cell>
                            <Cell>Amazon.com Inc.</Cell>
                            <Cell alignment='end'>3450.00</Cell>
                            <Cell alignment='end'>3420.00</Cell>
                            <Cell alignment='end'>3475.00</Cell>
                        </Row>
                        <Row>
                            <Cell>GOOGL</Cell>
                            <Cell>Alphabet Inc.</Cell>
                            <Cell alignment='end'>2800.50</Cell>
                            <Cell alignment='end'>2780.00</Cell>
                            <Cell alignment='end'>2825.00</Cell>
                        </Row>
                    </TableBody>
                </Table>
            </ResizableTableContainer>
        </DemoContainer>
    )
}
