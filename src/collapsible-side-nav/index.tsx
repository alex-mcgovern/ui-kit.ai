"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";

import { Size } from "@boondoggle.design/css-types";
import { faSidebar } from "@fortawesome/pro-solid-svg-icons/faSidebar";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { useCallback } from "react";
import { createContext, useContext, useLayoutEffect } from "react";
import { useState } from "react";

import { Button } from "../button";
import { Icon } from "../icon";
import { MEDIA_QUERY_MOBILE } from "../index.css";
import {
    collapsibleNavButtonCSS,
    collapsibleNavInnerCSS,
    collapsibleNavOuterCSS,
} from "./styles.css";

function useMatchMedia(
    queries: string[],
    defaultValues: boolean[] = [],
): boolean[] {
    const initialValues = defaultValues.length
        ? defaultValues
        : Array(queries.length).fill(false);

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const getValue = useCallback(
        () => mediaQueryLists.map((mql) => mql.matches),
        [mediaQueryLists],
    );

    const [value, setValue] = useState(getValue);

    useLayoutEffect(() => {
        const handler = (): void => setValue(getValue);

        for (const mql of mediaQueryLists) {
            mql.addEventListener("change", handler);
        }
        return (): void => {
            for (const mql of mediaQueryLists) {
                mql.removeEventListener("change", handler);
            }
        };
    }, [mediaQueryLists, getValue]);

    if (typeof window === "undefined") return initialValues;

    return value;
}

/**
 * React context provider that allows toggling the open state of a collapsible UI element from anywhere in the app.
 */
export const CollapsibleSideNavContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

export const CollapsibleSideNavProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [isMobile] = useMatchMedia([MEDIA_QUERY_MOBILE], [true]);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useLayoutEffect(() => {
        if (isMobile) {
            return setIsOpen(false);
        }
        return setIsOpen(true);
    }, [isMobile, setIsOpen]);

    return (
        <CollapsibleSideNavContext.Provider value={[isOpen, setIsOpen]}>
            {children}
        </CollapsibleSideNavContext.Provider>
    );
};

/**
 * Hook for consuming the CollapsibleSideNavContext.
 */
export const useCollapsibleSideNav = () => {
    const context = useContext(CollapsibleSideNavContext);

    if (context == null) {
        throw new Error(
            "CollapsibleSideNavContext must be used within a CollapsibleSideNavProvider",
        );
    }

    return context;
};

/**
 * Button for toggling the side nav
 */
export const ButtonToggleCollapsibleNav = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setIsOpen] = useCollapsibleSideNav();

    return (
        <Button
            appearance="ghost"
            className={collapsibleNavButtonCSS}
            isSquare
            name="mobile_menu"
            onPress={() => setIsOpen((c) => !c)}
            size={Size.SM}
        >
            <Icon icon={faSidebar} />
        </Button>
    );
};

export function CollapsibleSideNav({
    children,
    isOpen: controlledIsOpen,
    onOpenChange: controlledOnOpenChange,
}: {
    children: Array<ReactNode> | ReactNode;
    isOpen?: boolean;
    onOpenChange?: (openState: boolean) => void;
}) {
    const [isMobile] = useMatchMedia([MEDIA_QUERY_MOBILE], [true]);

    const [isOpen, setIsOpen] = useCollapsibleSideNav();

    useLayoutEffect(() => {
        if (controlledIsOpen !== undefined) {
            return setIsOpen(controlledIsOpen);
        }

        if (isMobile) {
            return setIsOpen(false);
        }
        return setIsOpen(true);
    }, [isMobile, setIsOpen, controlledIsOpen]);

    return (
        <RadixCollapsible.Root
            onOpenChange={controlledOnOpenChange}
            open={isOpen}
        >
            <RadixCollapsible.Content
                asChild
                className={collapsibleNavOuterCSS}
            >
                <aside>
                    <nav className={collapsibleNavInnerCSS}>{children}</nav>
                </aside>
            </RadixCollapsible.Content>
        </RadixCollapsible.Root>
    );
}
