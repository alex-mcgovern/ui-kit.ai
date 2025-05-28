/* eslint-disable sonarjs/no-duplicate-string */
import type { ColorPalette } from '@ui-kit.ai/theme'

import {
    Cell,
    CodeInline,
    Column,
    Row,
    Table,
    TableBody,
    TableHeader,
    Tooltip,
    TooltipTrigger,
} from '@ui-kit.ai/components'
import { CircleSlash2 } from 'lucide-react'
// @ts-expect-error - it's a peer dependency
import { Button } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

type Color = keyof Palette
type Palette = ReturnType<ColorPalette['palette']>

const INTENTS = [null, 'info', 'success', 'warning', 'error'] as const
type Intent = (typeof INTENTS)[number]

export function ColorTableBg({ palette }: { palette: Palette }) {
    return (
        <Table
            aria-label='Background colors'
            className='my-8'
            isCompact
        >
            <ColorTableHeader />
            <TableBody>{Object.keys(palette).map((color) => RowBg(color as Color))}</TableBody>
        </Table>
    )
}
export function ColorTableBorder({ palette }: { palette: Palette }) {
    return (
        <Table
            aria-label='Border colors'
            className='my-8'
            isCompact
        >
            <ColorTableHeader />
            <TableBody>
                {Object.keys(palette).map((color) => RowRenderBorder(color as Color))}
            </TableBody>
        </Table>
    )
}
export function ColorTableText({ palette }: { palette: Palette }) {
    return (
        <Table
            aria-label='Text colors'
            className='my-8'
            isCompact
        >
            <ColorTableHeader />
            <TableBody>
                {Object.keys(palette).map((color) => RowRenderText(color as Color))}
            </TableBody>
        </Table>
    )
}

function CellBorder({
    className,
    colorName,
    intent,
}: {
    className?: string
    colorName: string
    intent: Intent
}) {
    return (
        <Cell className={twMerge(intent, 'border-0 p-1 size-12')}>
            <TooltipTrigger>
                <Button
                    className={twMerge(
                        'flex items-center justify-center size-10 border border-light rounded-sm',
                        className
                    )}
                >
                    <CircleSlash2 className='stroke-current [&>*]:stroke-1' />
                </Button>
                <Tooltip>
                    <p>
                        <strong className='text-[var(--theme-default-bg-base)]'>
                            Utility class
                        </strong>
                        : {colorName} <br />
                        <strong className='text-[var(--theme-default-bg-base)]'>
                            Intent
                        </strong>: <span className='capitalize'>{intent ?? 'default'}</span> <br />
                    </p>
                </Tooltip>
            </TooltipTrigger>
        </Cell>
    )
}

function CellColor({
    className,
    colorName,
    intent,
}: {
    className?: string
    colorName: string
    intent?: Intent
}) {
    return (
        <Cell className={twMerge(intent, 'border-0 p-1 size-12')}>
            <TooltipTrigger>
                <Button
                    className={twMerge(
                        'flex items-center justify-center size-10 border border-light rounded-sm',
                        className
                    )}
                >
                    Aa
                </Button>
                <Tooltip>
                    <p>
                        <strong className='text-[var(--theme-default-bg-base)]'>
                            Utility class
                        </strong>
                        : {colorName} <br />
                        <strong className='text-[var(--theme-default-bg-base)]'>
                            Intent
                        </strong>: <span className='capitalize'>{intent ?? 'default'}</span> <br />
                    </p>
                </Tooltip>
            </TooltipTrigger>
        </Cell>
    )
}

function ColorTableHeader() {
    return (
        <TableHeader className='hidden'>
            <Column isRowHeader>Utility class</Column>
            <Column>CSS variable</Column>
            <Column
                alignment='center'
                className='[writing-mode:vertical-lr] align-bottom'
            >
                Default
            </Column>
            <Column
                alignment='center'
                className='[writing-mode:vertical-lr] align-bottom'
            >
                Info
            </Column>
            <Column
                alignment='center'
                className='[writing-mode:vertical-lr] align-bottom'
            >
                Success
            </Column>
            <Column
                alignment='center'
                className='[writing-mode:vertical-lr] align-bottom'
            >
                Warning
            </Column>
            <Column
                alignment='center'
                className='[writing-mode:vertical-lr] align-bottom'
            >
                Error
            </Column>
        </TableHeader>
    )
}

function RowBg(color: Color) {
    switch (color) {
        case 'bg-accent-dark':
            return (
                <RowColor
                    className='bg-accent-dark text-accent'
                    color={color}
                />
            )
        case 'bg-accent-light':
            return (
                <RowColor
                    className='bg-accent-light text-accent'
                    color={color}
                />
            )
        case 'bg-accent-mid':
            return (
                <RowColor
                    className='bg-accent-mid text-accent'
                    color={color}
                />
            )
        case 'bg-base':
            return (
                <RowColor
                    className='bg-base text-dark'
                    color={color}
                />
            )
        case 'bg-raised':
            return (
                <RowColor
                    className='bg-raised text-dark'
                    color={color}
                />
            )
        case 'bg-tint':
            return (
                <RowColor
                    className='bg-tint text-dark'
                    color={color}
                />
            )

        case 'bg-tint-dark':
            return (
                <RowColor
                    className='bg-tint-dark text-dark'
                    color={color}
                />
            )
        case 'bg-tint-light':
            return (
                <RowColor
                    className='bg-tint-light text-dark'
                    color={color}
                />
            )
        case 'border-dark':
        case 'border-light':
        case 'border-mid':
        case 'text-accent':
        case 'text-dark':
        case 'text-light':
        case 'text-mid':
            return null
        default:
            color satisfies never
    }
}
function RowBorder({ className, color }: { className: string; color: Color }) {
    return (
        <Row>
            <Cell className='font-medium border-0'>
                <CodeInline language='plaintext'>{color}</CodeInline>
            </Cell>
            <Cell className='font-medium border-0 pl-0'>
                <CodeInline language='plaintext'>{`--theme-default-${color}`}</CodeInline>
            </Cell>
            {INTENTS.map((intent) => (
                <CellBorder
                    className={className}
                    colorName={color}
                    intent={intent}
                    key={color}
                />
            ))}
        </Row>
    )
}

function RowColor({ className, color }: { className: string; color: Color }) {
    return (
        <Row>
            <Cell className='font-medium border-0'>
                <CodeInline language='plaintext'>{color}</CodeInline>
            </Cell>
            <Cell className='font-medium border-0 pl-0'>
                <CodeInline language='plaintext'>{`--theme-default-${color}`}</CodeInline>
            </Cell>
            {INTENTS.map((intent) => (
                <CellColor
                    className={className}
                    colorName={color}
                    intent={intent}
                    key={color}
                />
            ))}
        </Row>
    )
}

function RowRenderBorder(color: Color) {
    switch (color) {
        case 'bg-accent-dark':
        case 'bg-accent-light':
        case 'bg-accent-mid':
        case 'bg-base':
        case 'bg-raised':
        case 'bg-tint':
        case 'bg-tint-dark':
        case 'bg-tint-light':
        case 'text-accent':
        case 'text-dark':
        case 'text-light':
        case 'text-mid':
            return null
        case 'border-dark':
            return (
                <RowBorder
                    className='text-[var(--theme-default-border-dark)]'
                    color={color}
                />
            )
        case 'border-light':
            return (
                <RowBorder
                    className='text-[var(--theme-default-border-light)]'
                    color={color}
                />
            )
        case 'border-mid':
            return (
                <RowBorder
                    className='text-[var(--theme-default-border-mid)]'
                    color={color}
                />
            )

        default:
            color satisfies never
    }
}

function RowRenderText(color: Color) {
    switch (color) {
        case 'bg-accent-dark':
        case 'bg-accent-light':
        case 'bg-accent-mid':
        case 'bg-base':
        case 'bg-raised':
        case 'bg-tint':
        case 'bg-tint-dark':
        case 'bg-tint-light':
        case 'border-dark':
        case 'border-light':
        case 'border-mid':
            return null
        case 'text-accent':
            return (
                <RowColor
                    className='bg-accent-mid text-accent'
                    color={color}
                />
            )
        case 'text-dark':
            return (
                <RowColor
                    className='bg-transparent text-dark'
                    color={color}
                />
            )
        case 'text-light':
            return (
                <RowColor
                    className='bg-transparent text-light'
                    color={color}
                />
            )
        case 'text-mid':
            return (
                <RowColor
                    className='bg-transparent text-mid'
                    color={color}
                />
            )
        default:
            color satisfies never
    }
}
