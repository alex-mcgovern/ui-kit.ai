import type { TabListProps, TabPanelProps, TabProps, TabsProps } from 'react-aria-components'

import {
    composeRenderProps,
    Tab as RACTab,
    TabList as RACTabList,
    TabPanel as RACTabPanel,
    Tabs as RACTabs,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 */
export function Tabs(props: TabsProps) {
    return (
        <RACTabs
            {...props}
            className={(renderProps) =>
                twMerge(
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className,
                    'group/tabs orientation-horizontal:flex-col orientation vertical:flex-row flex'
                )
            }
        />
    )
}
Tabs.displayName = 'Tabs'

const tabListStyles = tv({
    base: 'no-scrollbar relative flex max-w-full',
    variants: {
        orientation: {
            horizontal:
                'after:border-default flex-row after:grow after:border-b after:content-[""]',
            vertical: 'flex-col items-start',
        },
    },
})

/**
 
 *
 
 
 */
export function TabList<T extends object>(props: TabListProps<T>) {
    return (
        <RACTabList
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                tabListStyles({
                    ...renderProps,
                    className,
                })
            )}
        />
    )
}
TabList.displayName = 'TabList'

const tabStyles = tv({
    base: [
        'px-4 py-1.5',
        '!-outline-offset-4',
        'text-lo-contrast text-sm whitespace-nowrap',
        'font-medium',
        'flex items-center',
        'cursor-pointer',
        // pressed
        'pressed:text-lo-contrast',
        // hover
        'hover:text-hi-contrast',
        // selected
        'selected:text-hi-contrast',
        'selected:border-[var(--theme-default-bg-primary)]',
        // selected
        'disabled:text-placeholder',
        'disabled:selected:text-lo-contrast forced-color-adjust-none',
        // horizontal
        'group-orientation-horizontal/tabs:border-b',
        'group-orientation-horizontal/tabs:border-default',
        // vertical
        'group-orientation-vertical/tabs:w-full',
        'group-orientation-vertical/tabs:border-r',
        'group-orientation-vertical/tabs:border-default',
    ],
})

/**
 * A Tab can be clicked, tapped, or navigated to via arrow keys to switch between panels.
 *
 
 
 */
export function Tab(props: TabProps) {
    return (
        <RACTab
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                tabStyles({
                    ...renderProps,
                    className,
                })
            )}
        />
    )
}
Tab.displayName = 'Tab'

/**
 * A TabPanel contains the content for a single tab.
 *
 
 
 */
export function TabPanel(props: TabPanelProps) {
    return (
        <RACTabPanel
            {...props}
            className={(rp) =>
                twMerge(
                    'flex-1 outline-0',
                    typeof props.className === 'function' ? props.className(rp) : props.className
                )
            }
        />
    )
}
TabPanel.displayName = 'TabPanel'
