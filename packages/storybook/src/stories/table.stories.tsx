import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
    Button,
    Card,
    Cell,
    Column,
    Label,
    Row,
    Select,
    SelectButton,
    Table,
    TableBody,
    TableHeader,
} from '@ui-kit.ai/components'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
} from 'lucide-react'

const meta = {
    component: Table,
    parameters: {
        parameters: {
            displayName: 'Default',
        },
    },
    title: 'Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

function Template(args: ComponentProps<typeof Table>) {
    return (
        <Table
            {...args}
            aria-label='Table'
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
    )
}

function TemplateCard(args: ComponentProps<typeof Table>) {
    return (
        <Card>
            <Table
                {...args}
                aria-label='Table'
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
        </Card>
    )
}
function TemplatePagination(args: ComponentProps<typeof Table>) {
    return (
        <div>
            <Table
                {...args}
                aria-label='Table'
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
            <div className='w-full flex justify-between items-center mt-4'>
                <span className='block whitespace-nowrap shrink-0 text-mid text-sm font-medium'>
                    1-10 of 100
                </span>
                <div className='flex gap-1 items-center justify-center'>
                    <Button
                        aria-label='First page'
                        isIcon
                        variant='tertiary'
                    >
                        <ChevronsLeftIcon />
                    </Button>
                    <Button
                        aria-label='Previous page'
                        isIcon
                        variant='tertiary'
                    >
                        <ChevronLeftIcon />
                    </Button>
                    <Button
                        aria-label='Page 2'
                        isIcon
                        variant='tertiary'
                    >
                        2
                    </Button>
                    <Button
                        aria-label='Page 3'
                        data-current={true}
                        isIcon
                        variant='primary'
                    >
                        3
                    </Button>
                    <Button
                        aria-label='Page 4'
                        isIcon
                        variant='tertiary'
                    >
                        4
                    </Button>
                    <Button
                        aria-label='Next page'
                        isIcon
                        variant='tertiary'
                    >
                        <ChevronRightIcon />
                    </Button>
                    <Button
                        aria-label='Last page'
                        isIcon
                        variant='tertiary'
                    >
                        <ChevronsRightIcon />
                    </Button>
                </div>
                <Select
                    className='flex gap-2 items-center w-auto'
                    defaultSelectedKey={'10'}
                    items={[
                        { id: '10', textValue: '10' },
                        { id: '20', textValue: '20' },
                        { id: '50', textValue: '50' },
                    ]}
                >
                    <Label className='mb-0'>Rows</Label>
                    <SelectButton
                        className='w-auto'
                        isBorderless
                    />
                </Select>
            </div>
        </div>
    )
}

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
    render: Template,
}

export const WithCard: Story = {
    parameters: {
        displayName: 'With card',
    },
    render: TemplateCard,
}

export const Pagination: Story = {
    parameters: {
        displayName: 'Pagination',
    },
    render: TemplatePagination,
}
