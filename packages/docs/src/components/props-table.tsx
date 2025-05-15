import type { ComponentDoc } from 'react-docgen-typescript'

import {
    Card,
    Cell,
    CodeInline,
    Column,
    Markdown,
    ResizableTableContainer,
    Row,
    Table,
    TableBody,
    TableHeader,
    Tooltip,
    TooltipInfoButton,
    TooltipTrigger,
} from '@ui-kit.ai/components'
import { Fragment } from 'react'

export function PropsTable({ docs }: { docs: ComponentDoc }) {
    return (
        <Card>
            <ResizableTableContainer>
                <Table aria-label='Component Props'>
                    <TableHeader>
                        <Column
                            isRowHeader
                            minWidth={181}
                            width='1fr'
                        >
                            Name
                        </Column>
                        <Column
                            minWidth={373}
                            width='2fr'
                        >
                            Type
                        </Column>
                        <Column
                            minWidth={180}
                            width='1fr'
                        >
                            Default
                        </Column>
                    </TableHeader>
                    <TableBody items={Object.entries(docs.props)}>
                        {Object.entries(docs.props).map(([name, prop]) => (
                            <Row key={name}>
                                <Cell>
                                    <div className='flex items-center gap-0.5'>
                                        <CodeInline language='plaintext'>{name}</CodeInline>
                                        {prop.description !== '' ? (
                                            <TooltipTrigger>
                                                <TooltipInfoButton />
                                                <Tooltip
                                                    className='max-w-64 w-full'
                                                    placement='right'
                                                >
                                                    <Markdown>{prop.description}</Markdown>
                                                </Tooltip>
                                            </TooltipTrigger>
                                        ) : null}
                                    </div>
                                </Cell>
                                <Cell>
                                    <PropTypes>{prop.type.name}</PropTypes>
                                </Cell>
                                <Cell className='text-mid'>
                                    {prop.defaultValue?.value != null ? (
                                        <CodeInline language='plaintext'>
                                            {prop.defaultValue?.value}
                                        </CodeInline>
                                    ) : (
                                        '—'
                                    )}
                                </Cell>
                            </Row>
                        ))}
                    </TableBody>
                </Table>
            </ResizableTableContainer>
        </Card>
    )
}

function PropTypes({ children }: { children: string }) {
    const propTypes = children.split('|').map((type) => type.trim())

    return (
        <>
            {propTypes.map((type, index) => {
                const isLast: boolean = index === propTypes.length - 1
                return (
                    <Fragment key={type}>
                        <CodeInline language='plaintext'>{type}</CodeInline>

                        {isLast === false ? <span className='text-light'>{' | '}</span> : null}
                    </Fragment>
                )
            })}
        </>
    )
}
