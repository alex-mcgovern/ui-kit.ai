import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Cell, Column, Row, Table, TableBody, TableHeader } from '@ui-kit.ai/components'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const meta = {
    args: {
        'aria-label': 'Stocks table',
    },
    component: Table,
    parameters: {
        parameters: {
            displayName: 'Default',
        },
    },
    title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

function Template(args: ComponentProps<typeof Table>) {
    return (
        <Table {...args}>
            <TableHeader>
                <Column>Code</Column>
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
    )
}

export const Default: Story = {
    args: {},
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}
