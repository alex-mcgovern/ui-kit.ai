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

export function PropsTable({ docs }: { docs: ComponentDoc }) {
    return (
        <Card>
            <ResizableTableContainer>
                <Table aria-label='Component Props'>
                    <TableHeader>
                        <Column
                            className='py-2 px-3'
                            width='1fr'
                        >
                            Name
                        </Column>
                        <Column
                            className='py-2 px-3'
                            width='2fr'
                        >
                            Type
                        </Column>
                        <Column
                            className='py-2 px-3'
                            width='1fr'
                        >
                            Default
                        </Column>
                    </TableHeader>
                    <TableBody items={Object.entries(docs.props)}>
                        {Object.entries(docs.props).map(([name, prop]) => (
                            <Row key={name}>
                                <Cell className='py-2 px-5'>
                                    <div className='flex items-center gap-0.5'>
                                        <CodeInline
                                            className='accent'
                                            language='plaintext'
                                        >
                                            {name}
                                        </CodeInline>
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
                                <Cell className='py-2 px-5'>
                                    <PropTypes>{prop.type.name}</PropTypes>
                                </Cell>
                                <Cell className='py-2 px-5 text-mid'>
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
                    <>
                        <CodeInline
                            key={index}
                            language='plaintext'
                        >
                            {type}
                        </CodeInline>

                        {isLast === false ? <span className='text-light'>{' | '}</span> : null}
                    </>
                )
            })}
        </>
    )
}
