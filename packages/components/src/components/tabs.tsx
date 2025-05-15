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

import { focusRing } from '../styles/focus-ring'

const tabsStyles = tv({
    base: 'group/tabs flex',
    variants: {
        orientation: {
            horizontal: 'flex-col',
            vertical: 'flex-row',
        },
    },
})

/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 */
export function Tabs(props: TabsProps) {
    return (
        <RACTabs
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                tabsStyles({
                    ...renderProps,
                    className,
                })
            )}
        />
    )
}
Tabs.displayName = 'Tabs'

const tabListStyles = tv({
    base: 'no-scrollbar relative flex max-w-full',
    variants: {
        orientation: {
            horizontal: 'after:border-mid flex-row after:grow after:border-b after:content-[""]',
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
        '-outline-offset-4',
        'text-mid text-sm whitespace-nowrap',
        'font-medium',
        'flex items-center',
        'cursor-pointer',
        // pressed
        'pressed:text-mid',
        // hover
        'hover:text-dark',
        // selected
        'selected:text-dark',
        'selected:border-[var(--theme-default-bg-accent-mid)]',
        // selected
        'disabled:text-light',
        'disabled:selected:text-mid forced-color-adjust-none',
        // horizontal
        'group-orientation-horizontal/tabs:border-b',
        'group-orientation-horizontal/tabs:border-mid',
        // vertical
        'group-orientation-vertical/tabs:w-full',
        'group-orientation-vertical/tabs:border-r',
        'group-orientation-vertical/tabs:border-mid',
    ],
    extend: focusRing,
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
