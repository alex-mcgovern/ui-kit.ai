import type {
    ColumnProps as AriaColumnProps,
    RowProps as AriaRowProps,
    TableBodyProps as AriaTableBodyProps,
    TableHeaderProps as AriaTableHeaderProps,
    TableProps as AriaTableProps,
    CellProps,
    ResizableTableContainerProps,
    SortDirection,
} from 'react-aria-components'

import { ArrowUpDown as IconArrowsUpDown, ArrowUp as IconArrowUp } from 'lucide-react'
import {
    Button as AriaButton,
    Cell as AriaCell,
    Column as AriaColumn,
    Row as AriaRow,
    Table as AriaTable,
    ResizableTableContainer as AriaTableContainer,
    TableHeader as AriaTableHeader,
    Collection,
    ColumnResizer,
    Group,
    TableBody as RACTableBody,
    useTableOptions,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { focusRing } from '../styles/focus-ring'
import { Checkbox } from './checkbox'
import { Skeleton } from './skeleton'

const getRandomNumber = (min: number = 0, max: number = 100): number => {
    return Math.floor(min + Math.random() * (max - min + 1))
}

const columnWrapperStyles = tv({
    base: [
        'border-dark border-b',
        '[&:focus-within]:z-20 [&:hover]:z-20',
        'text-mid hover:text-dark',
        'cursor-default hover:cursor-pointer',
    ],
})

const columnStyles = tv({
    base: [
        'h-6 text-sm',
        'text-start',
        'px-2 py-1',
        'group-data-[compact]/table:first:pl-0 group-data-[compact]/table:last:pr-0',
        'font-semibold',
        'flex flex-1 items-center gap-1',
        '-outline-offset-2',
    ],
    extend: focusRing,
    variants: {
        alignment: {
            center: 'justify-center',
            end: 'justify-end',
            start: 'justify-start',
        },
    },
})

const cellStyles = tv({
    base: [
        'h-ui-element text-sm',
        'px-2',
        'transition-colors',
        '-outline-offset-2',
        'group-data-[compact]/table:first:pl-0 group-data-[compact]/table:last:pr-0',
        // border styles
        'border-light border-b',
    ],
    defaultVariants: {
        alignment: 'start',
    },
    extend: focusRing,
    variants: {
        alignment: {
            center: 'text-center',
            end: 'text-end',
            start: 'text-start',
        },
    },
})

const rowStyles = tv({
    base: [
        'group/row',
        'relative -outline-offset-2',
        'text-dark disabled:text-tint-dark',
        'transition-colors',
        // hover styles
        'hover:bg-tint-light hover:select-none',
        'hover:cursor-pointer hover:disabled:cursor-not-allowed',
        // pressed styles
        'pressed:bg-tint',
        // selected styles
        'selected:select-none',
        'selected:bg-tint-light',
    ],
    extend: focusRing,
})

const cellSkeletonStyles = tv({
    base: 'max-w-[50%]',
    defaultVariants: {
        alignment: 'start',
    },
    extend: focusRing,
    variants: {
        alignment: {
            center: 'mx-auto',
            end: 'ml-auto',
            start: '',
        },
    },
})

const resizerStyles = tv({
    base: `bg-mid-contrast resizing:w-[2px] resizing:bg-accent-light resizing:pl-[7px]
    forced-colors:resizing:bg-[Highlight] box-content h-5 w-px translate-x-[8px] cursor-col-resize
    rounded bg-clip-content px-[8px] py-1 -outline-offset-2 forced-colors:bg-[ButtonBorder]`,
    extend: focusRing,
})

export function Cell({
    alignment,
    children,
    className,
    showSkeleton,
    ...props
}: CellProps & {
    alignment?: 'center' | 'end' | 'start'
    showSkeleton?: boolean
}) {
    return (
        <AriaCell
            {...props}
            className={(rp) =>
                twMerge(
                    cellStyles({ alignment }),
                    typeof className === 'function' ? className(rp) : className
                )
            }
        >
            {showSkeleton === true ? (
                <Skeleton
                    className={cellSkeletonStyles({
                        alignment,
                    })}
                    style={{
                        width: `${getRandomNumber(20, 50)}%`,
                    }}
                />
            ) : (
                children
            )}
        </AriaCell>
    )
}
Cell.displayName = 'Cell'

export function Column({
    alignment,
    children,
    className,
    textValue,
    ...props
}: AriaColumnProps & {
    alignment?: 'center' | 'end' | 'start'
}) {
    return (
        <AriaColumn
            {...props}
            className={(rp) =>
                twMerge(
                    columnWrapperStyles(),
                    typeof className === 'function' ? className(rp) : className
                )
            }
            textValue={textValue}
        >
            {({ allowsSorting, sortDirection, ...renderProps }) => (
                <div className='flex items-center'>
                    <Group
                        className={() => columnStyles({ alignment })}
                        role='presentation'
                        tabIndex={-1}
                    >
                        <span className='inline-flex items-center truncate'>
                            {typeof children === 'function'
                                ? children({ allowsSorting, sortDirection, ...renderProps })
                                : (children ?? textValue)}
                        </span>

                        {allowsSorting ? <ColumnSortControl sortDirection={sortDirection} /> : null}
                    </Group>

                    {props.width != null && <ColumnResizer className={resizerStyles()} />}
                </div>
            )}
        </AriaColumn>
    )
}
Column.displayName = 'Column'

function ColumnSortControl({ sortDirection }: { sortDirection: SortDirection | undefined }) {
    return (
        <span
            className={twMerge(
                'flex items-center justify-center',
                'size-3',
                'transition-opacity',
                'forced-colors:text-[ButtonText]',
                sortDirection === 'descending' ? 'rotate-180' : null,
                !sortDirection ? 'opacity-50' : null
            )}
        >
            {sortDirection ? <IconArrowUp aria-hidden /> : <IconArrowsUpDown aria-hidden />}
        </span>
    )
}
ColumnSortControl.displayName = 'ColumnSortControl'

export function ResizableTableContainer(props: ResizableTableContainerProps) {
    return (
        <AriaTableContainer
            {...props}
            className={twMerge(
                'relative',
                'bg-base w-full',
                'scrollbar-thin overflow-auto',
                props.className
            )}
        ></AriaTableContainer>
    )
}
ResizableTableContainer.displayName = 'ResizableTableContainer'

export function Row<TColumn extends object>({
    children,
    className,
    columns,
    id,
    ...props
}: AriaRowProps<TColumn>) {
    const { allowsDragging, selectionBehavior } = useTableOptions()

    return (
        <AriaRow
            id={id}
            {...props}
            className={(rp) =>
                twMerge(rowStyles(), typeof className === 'function' ? className(rp) : className)
            }
        >
            {allowsDragging && (
                <Cell
                    alignment='center'
                    className='px-2'
                >
                    <AriaButton slot='drag'>≡</AriaButton>
                </Cell>
            )}

            {selectionBehavior === 'toggle' && (
                <Cell
                    alignment='center'
                    className='px-2'
                >
                    <Checkbox slot='selection' />
                </Cell>
            )}
            <Collection items={columns}>{children}</Collection>
        </AriaRow>
    )
}
Row.displayName = 'Row'

export function Table({
    className,
    isCompact,
    ...props
}: AriaTableProps & {
    isCompact?: boolean
}) {
    return (
        <AriaTable
            {...props}
            className={(rp) =>
                twMerge(
                    'group/table w-full border-separate border-spacing-0 focus:outline-0',
                    typeof className === 'function' ? className(rp) : className
                )
            }
            data-compact={isCompact}
        />
    )
}
Table.displayName = 'TableBase'

export function TableBody<T extends object>(props: AriaTableBodyProps<T>) {
    return <RACTableBody<T> {...props} />
}
TableBody.displayName = 'TableBody'

export function TableHeader<TColumn extends object>({ ...props }: AriaTableHeaderProps<TColumn>) {
    const { allowsDragging, selectionBehavior, selectionMode } = useTableOptions()

    return (
        <AriaTableHeader {...props}>
            {allowsDragging && (
                <Column
                    alignment='center'
                    className='px-2'
                    id='drag'
                    textValue=''
                    width={32}
                />
            )}

            {selectionBehavior === 'toggle' ? (
                <Column
                    alignment='center'
                    id='selection'
                    minWidth={32}
                    width={32}
                >
                    {selectionMode === 'multiple' ? <Checkbox slot='selection' /> : null}
                </Column>
            ) : null}

            <Collection items={props.columns}>{props.children}</Collection>
        </AriaTableHeader>
    )
}
TableHeader.displayName = 'TableHeader'
