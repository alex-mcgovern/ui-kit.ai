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

export function TabList<T extends object>(
    props: TabListProps<T>,
) {
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
        `forced-color-adjust-none
        group-orientation-vertical/tabs:w-full
        group-orientation-vertical/tabs:border-r
        hover:text-secondary disabled:selected:text-muted-600`,
        "disabled:text-disabled",
        // horizontal - border bottom
        `group-orientation-horizontal/tabs:!border-b
        group-orientation-horizontal/tabs:border-muted-200`,
    ],
    extend: focusRing,
});

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
