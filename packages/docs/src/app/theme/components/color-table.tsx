'use client'

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
import { Color } from '@ui-kit.ai/theme'
import { CircleSlash2 } from 'lucide-react'
// @ts-expect-error - it's a peer dependency
import { Button } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

const INTENTS = [null, 'info', 'success', 'warning', 'error'] as const
type Intent = (typeof INTENTS)[number]

export function ColorTableBg() {
    return (
        <Table
            aria-label='Background colors'
            className='my-8'
            isCompact
        >
            <ColorTableHeader />
            <TableBody>{Object.values(Color).map((color) => RowBg(color as Color))}</TableBody>
        </Table>
    )
}
export function ColorTableBorder() {
    return (
        <Table
            aria-label='Border colors'
            className='my-8'
            isCompact
        >
            <ColorTableHeader />
            <TableBody>
                {Object.values(Color).map((color) => RowRenderBorder(color as Color))}
            </TableBody>
        </Table>
    )
}
export function ColorTableText() {
    return (
        <Table
            aria-label='Text colors'
            className='my-8'
            isCompact
        >
            <ColorTableHeader />
            <TableBody>
                {Object.values(Color).map((color) => RowRenderText(color as Color))}
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
                        'flex items-center justify-center size-10 border border-default rounded-sm',
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
                        'flex items-center justify-center size-10 border border-default rounded-sm',
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
        case Color.BG_BASE:
            return (
                <RowColor
                    className='bg-base text-hi-contrast'
                    color={color}
                />
            )
        case Color.BG_BASE_RAISED:
            return (
                <RowColor
                    className='bg-base-raised text-hi-contrast'
                    color={color}
                />
            )
        case Color.BG_PRIMARY:
            return (
                <RowColor
                    className='bg-primary text-accent'
                    color={color}
                />
            )
        case Color.BG_PRIMARY_HOVER:
            return (
                <RowColor
                    className='bg-primary-hover text-accent'
                    color={color}
                />
            )
        case Color.BG_TINT:
            return (
                <RowColor
                    className='bg-tint text-hi-contrast'
                    color={color}
                />
            )
        case Color.BORDER_DEFAULT:
        case Color.BORDER_FIELD:
        case Color.BORDER_FIELD_HOVER:
        case Color.TEXT_ACCENT:
        case Color.TEXT_HI_CONTRAST:
        case Color.TEXT_LO_CONTRAST:
        case Color.TEXT_PLACEHOLDER:
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
        case Color.BG_BASE:
        case Color.BG_BASE_RAISED:
        case Color.BG_PRIMARY:
        case Color.BG_PRIMARY_HOVER:
        case Color.BG_TINT:
        case Color.TEXT_ACCENT:
        case Color.TEXT_HI_CONTRAST:
        case Color.TEXT_LO_CONTRAST:
        case Color.TEXT_PLACEHOLDER:
            return null
        case Color.BORDER_DEFAULT:
            return (
                <RowBorder
                    className='text-[var(--theme-default-border-default)]'
                    color={color}
                />
            )
        case Color.BORDER_FIELD:
            return (
                <RowBorder
                    className='text-[var(--theme-default-border-field)]'
                    color={color}
                />
            )
        case Color.BORDER_FIELD_HOVER:
            return (
                <RowBorder
                    className='text-[var(--theme-default-border-field-hover)]'
                    color={color}
                />
            )

        default:
            color satisfies never
    }
}

function RowRenderText(color: Color) {
    switch (color) {
        case Color.BG_BASE:
        case Color.BG_BASE_RAISED:
        case Color.BG_PRIMARY:
        case Color.BG_PRIMARY_HOVER:
        case Color.BG_TINT:
        case Color.BORDER_DEFAULT:
        case Color.BORDER_FIELD:
        case Color.BORDER_FIELD_HOVER:
            return null
        case Color.TEXT_ACCENT:
            return (
                <RowColor
                    className='bg-primary text-accent'
                    color={color}
                />
            )
        case Color.TEXT_HI_CONTRAST:
            return (
                <RowColor
                    className='bg-transparent text-hi-contrast'
                    color={color}
                />
            )
        case Color.TEXT_LO_CONTRAST:
            return (
                <RowColor
                    className='bg-transparent text-lo-contrast'
                    color={color}
                />
            )
        case Color.TEXT_PLACEHOLDER:
            return (
                <RowColor
                    className='bg-transparent text-placeholder'
                    color={color}
                />
            )
        default:
            color satisfies never
    }
}
