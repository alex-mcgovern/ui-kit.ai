import type {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from 'react-aria-components'

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
      horizontal:
        'flex-row after:grow after:border-b after:border-b-tint-dark after:content-[""]',
      vertical: 'flex-col items-start gap-2',
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
    'whitespace-nowrap text-sm text-mid-contrast',
    'font-medium',
    'flex items-center',
    'cursor-pointer',
    // "border-transparent",
    // pressed
    'pressed:text-mid-contrast',
    // hover
    `hover:text-hi-contrast`,
    // selected
    'selected:text-hi-contrast',
    `forced-color-adjust-none  
    disabled:selected:text-mid-contrast`,
    'disabled:text-disabled',
    // horizontal
    `group-orientation-horizontal/tabs:border-b`,
    `group-orientation-horizontal/tabs:border-tint-dark`,
    // horizontal selected
    `group-orientation-horizontal/tabs:selected:border-brand-light`,
    // vertical
    `group-orientation-vertical/tabs:w-full`,
    `group-orientation-vertical/tabs:border-r`,
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
          typeof props.className === 'function'
            ? props.className(rp)
            : props.className
        )
      }
    />
  )
}
TabPanel.displayName = 'TabPanel'
