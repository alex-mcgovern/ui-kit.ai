/* eslint-disable sonarjs/no-duplicate-string */
import type { ColorPalette } from '@ui-kit.ai/theme'

import { Cell, CodeInline, Column, Row, Table, TableBody, TableHeader } from '@ui-kit.ai/components'
import { CircleSlash2 } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type Color = keyof Palette
type Palette = ReturnType<ColorPalette['palette']>

const INTENTS = ['', 'info', 'success', 'warning', 'error'] as const
type Intent = (typeof INTENTS)[number]

export function ColorTableBg({ palette }: { palette: Palette }) {
    return (
        <Table
            aria-label='Background colors'
            className='w-full'
        >
            <TableHeader className='hidden'>
                <Column>Default</Column>
                <Column>Info</Column>
                <Column>Success</Column>
                <Column>Warning</Column>
                <Column>Error</Column>
                <Column>Name</Column>
            </TableHeader>
            <TableBody>
                {Object.keys(palette).map((color) => RowRenderBg(color as Color))}
            </TableBody>
        </Table>
    )
}
export function ColorTableBorder({ palette }: { palette: Palette }) {
    return (
        <Table
            aria-label='Text colors'
            className='w-full'
        >
            <TableHeader className='hidden'>
                <Column>Default</Column>
                <Column>Info</Column>
                <Column>Success</Column>
                <Column>Warning</Column>
                <Column>Error</Column>
                <Column>Name</Column>
            </TableHeader>
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
            className='w-full'
        >
            <TableHeader className='hidden'>
                <Column>Default</Column>
                <Column>Info</Column>
                <Column>Success</Column>
                <Column>Warning</Column>
                <Column>Error</Column>
                <Column>Name</Column>
            </TableHeader>
            <TableBody>
                {Object.keys(palette).map((color) => RowRenderText(color as Color))}
            </TableBody>
        </Table>
    )
}

function BorderCell({
    className,
    intent,
}: {
    className?: string
    colorName: string
    intent: Intent
}) {
    return (
        <Cell className={twMerge(intent, 'border-0 p-0 w-8')}>
            <div className={twMerge('flex items-center justify-center size-8', className)}>
                <CircleSlash2 className='stroke-current [&>*]:stroke-1' />
            </div>
        </Cell>
    )
}

function BorderTableRow({ className, color }: { className: string; color: Color }) {
    return (
        <Row>
            <Cell className='font-medium py-0 pl-0 pr-2 border-0'>
                <CodeInline language='plaintext'>{color}</CodeInline>
            </Cell>
            {INTENTS.map((intent) => (
                <BorderCell
                    className={className}
                    colorName={color}
                    intent={intent}
                    key={color}
                />
            ))}
        </Row>
    )
}

function ColorCell({
    className,
    intent,
}: {
    className?: string
    colorName: string
    intent: Intent
}) {
    return (
        <Cell className={twMerge(intent, 'border-0 p-0 w-8')}>
            <div className={twMerge('flex items-center justify-center size-8', className)}>Aa</div>
        </Cell>
    )
}
function ColorTableRow({ className, color }: { className: string; color: Color }) {
    return (
        <Row>
            <Cell className='font-medium py-0 pl-0 pr-2 border-0'>
                <CodeInline language='plaintext'>{color}</CodeInline>
            </Cell>
            {INTENTS.map((intent) => (
                <ColorCell
                    className={className}
                    colorName={color}
                    intent={intent}
                    key={color}
                />
            ))}
        </Row>
    )
}

function RowRenderBg(color: Color) {
    switch (color) {
        case 'bg-accent':
            return (
                <ColorTableRow
                    className='bg-accent text-accent'
                    color={color}
                />
            )
        case 'bg-accent-dark':
            return (
                <ColorTableRow
                    className='bg-accent-dark text-accent'
                    color={color}
                />
            )
        case 'bg-accent-light':
            return (
                <ColorTableRow
                    className='bg-accent-light text-accent'
                    color={color}
                />
            )
        case 'bg-base':
            return (
                <ColorTableRow
                    className='bg-base text-dark'
                    color={color}
                />
            )
        case 'bg-raised':
            return (
                <ColorTableRow
                    className='bg-raised text-dark'
                    color={color}
                />
            )
        case 'bg-tint':
            return (
                <ColorTableRow
                    className='bg-tint text-dark'
                    color={color}
                />
            )

        case 'bg-tint-dark':
            return (
                <ColorTableRow
                    className='bg-tint-dark text-dark'
                    color={color}
                />
            )
        case 'bg-tint-light':
            return (
                <ColorTableRow
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
function RowRenderBorder(color: Color) {
    switch (color) {
        case 'bg-accent':
        case 'bg-accent-dark':
        case 'bg-accent-light':
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
                <BorderTableRow
                    className='text-[var(--theme-default-border-dark)]'
                    color={color}
                />
            )
        case 'border-light':
            return (
                <BorderTableRow
                    className='text-[var(--theme-default-border-light)]'
                    color={color}
                />
            )
        case 'border-mid':
            return (
                <BorderTableRow
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
        case 'bg-accent':
        case 'bg-accent-dark':
        case 'bg-accent-light':
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
                <ColorTableRow
                    className='bg-accent text-accent'
                    color={color}
                />
            )
        case 'text-dark':
            return (
                <ColorTableRow
                    className='bg-transparent text-dark'
                    color={color}
                />
            )
        case 'text-light':
            return (
                <ColorTableRow
                    className='bg-transparent text-light'
                    color={color}
                />
            )
        case 'text-mid':
            return (
                <ColorTableRow
                    className='bg-transparent text-mid'
                    color={color}
                />
            )
        default:
            color satisfies never
    }
}
