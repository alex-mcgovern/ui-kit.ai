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

function BorderTableRow({
    className,
    classNamePrefix,
    color,
}: {
    className: string
    classNamePrefix: string
    color: Color
}) {
    return (
        <Row>
            <Cell className='font-medium py-0 pl-0 pr-2 border-0'>
                <CodeInline language='plaintext'>{`${classNamePrefix}-${color}`}</CodeInline>
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
function ColorTableRow({
    className,
    classNamePrefix,
    color,
}: {
    className: string
    classNamePrefix: string
    color: Color
}) {
    return (
        <Row>
            <Cell className='font-medium py-0 pl-0 pr-2 border-0'>
                <CodeInline language='plaintext'>{`${classNamePrefix}-${color}`}</CodeInline>
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
        case 'accent':
            return (
                <ColorTableRow
                    className='bg-accent text-accent'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'accent-dark':
            return (
                <ColorTableRow
                    className='bg-accent-dark text-accent'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'accent-fg':
        case 'hi-contrast':
        case 'lo-contrast':
        case 'mid-contrast':
            return null

        case 'accent-light':
            return (
                <ColorTableRow
                    className='bg-accent-light text-accent'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'base':
            return (
                <ColorTableRow
                    className='bg-base text-dark'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'raised':
            return (
                <ColorTableRow
                    className='bg-raised text-dark'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'tint':
            return (
                <ColorTableRow
                    className='bg-tint text-dark'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'tint-dark':
            return (
                <ColorTableRow
                    className='bg-tint-dark text-dark'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        case 'tint-light':
            return (
                <ColorTableRow
                    className='bg-tint-light text-dark'
                    classNamePrefix='bg'
                    color={color}
                />
            )
        default:
            color satisfies never
    }
}
function RowRenderBorder(color: Color) {
    switch (color) {
        case 'accent':
        case 'accent-dark':
        case 'accent-fg':
        case 'accent-light':
        case 'base':
        case 'hi-contrast':
        case 'lo-contrast':
        case 'mid-contrast':
        case 'raised':
        case 'tint':
        case 'tint-dark':
        case 'tint-light':
            return null
        case 'border-dark':
            return (
                <BorderTableRow
                    className='text-[var(--theme-default-border-dark)]'
                    classNamePrefix=''
                    color={color}
                />
            )
        case 'border-light':
            return (
                <BorderTableRow
                    className='text-[var(--theme-default-border-light)]'
                    classNamePrefix=''
                    color={color}
                />
            )
        case 'border-mid':
            return (
                <BorderTableRow
                    className='text-[var(--theme-default-border-mid)]'
                    classNamePrefix=''
                    color={color}
                />
            )

        default:
            color satisfies never
    }
}
function RowRenderText(color: Color) {
    switch (color) {
        case 'accent':
        case 'accent-dark':
        case 'accent-light':
        case 'base':
        case 'raised':
        case 'tint':
        case 'tint-dark':
        case 'tint-light':
            return null
        case 'accent-fg':
            return (
                <ColorTableRow
                    className='bg-accent text-accent'
                    classNamePrefix='text'
                    color={color}
                />
            )
        case 'hi-contrast':
            return (
                <ColorTableRow
                    className='bg-transparent text-dark'
                    classNamePrefix='text'
                    color={color}
                />
            )
        case 'lo-contrast':
            return (
                <ColorTableRow
                    className='bg-transparent text-light'
                    classNamePrefix='text'
                    color={color}
                />
            )
        case 'mid-contrast':
            return (
                <ColorTableRow
                    className='bg-transparent text-mid'
                    classNamePrefix='text'
                    color={color}
                />
            )
        default:
            color satisfies never
    }
}
