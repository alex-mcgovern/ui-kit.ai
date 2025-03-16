import type {
    TabListProps,
    TabPanelProps,
    TabProps,
    TabsProps,
} from "react-aria-components";

import {
    composeRenderProps,
    Tab as RACTab,
    TabList as RACTabList,
    TabPanel as RACTabPanel,
    Tabs as RACTabs,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { focusRing } from "../styles/focus-ring";

const tabsStyles = tv({
    base: "group/tabs flex",
    variants: {
        orientation: {
            horizontal: "flex-col",
            vertical: "flex-row",
        },
    },
});

/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/tabs)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tabs)
 */
export function Tabs(props: TabsProps) {
    return (
        <RACTabs
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tabsStyles({
                        ...renderProps,
                        className,
                    }),
            )}
        />
    );
}

const tabListStyles = tv({
    base: "no-scrollbar relative flex max-w-full",
    variants: {
        orientation: {
            horizontal: "flex-row after:grow",
            vertical: "flex-col items-start gap-2",
        },
    },
});

/**
 * A TabList renders a list of tabs that can be used to switch between panels.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/tabs)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tabs)
 */
export function TabList<T extends object>(props: TabListProps<T>) {
    return (
        <RACTabList
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tabListStyles({
                        ...renderProps,
                        className,
                    }),
            )}
        />
    );
}

const tabStyles = tv({
    base: [
        "px-4 py-1.5",
        "whitespace-nowrap text-sm text-secondary",
        "font-medium",
        "flex items-center",
        "cursor-pointer",
        // "border-transparent",
        // pressed
        "pressed:text-secondary",
        // selected
        "selected:!border-brand-600 selected:text-brand-600",
        `forced-color-adjust-none group-orientation-vertical/tabs:w-full
        group-orientation-vertical/tabs:border-r hover:text-secondary
        disabled:selected:text-muted-600`,
        "disabled:text-disabled",
        // horizontal - border bottom
        `group-orientation-horizontal/tabs:!border-b
        group-orientation-horizontal/tabs:border-muted-200`,
    ],
    extend: focusRing,
});

/**
 * A Tab can be clicked, tapped, or navigated to via arrow keys to switch between panels.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/tabs)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tabs)
 */
export function Tab(props: TabProps) {
    return (
        <RACTab
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tabStyles({
                        ...renderProps,
                        className,
                    }),
            )}
        />
    );
}

/**
 * A TabPanel contains the content for a single tab.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/tabs)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/Tabs)
 */
export function TabPanel(props: TabPanelProps) {
    return (
        <RACTabPanel
            {...props}
            className={(rp) =>
                twMerge(
                    "flex-1 outline-0",
                    typeof props.className === "function"
                        ? props.className(rp)
                        : props.className,
                )
            }
        />
    );
}
