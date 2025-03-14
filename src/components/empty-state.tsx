"use client";
import type { LucideProps } from "lucide-react";
import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { Heading } from "./heading";

const actionsStyle = tv({
    base: "mx-auto",
    variants: {
        actions: {
            1: "",
            2: "grid grid-cols-2 gap-2",
        },
    },
});

/**
 * A EmptyState is a fallback UI shown in the absence of data, e.g. for a search
 * with no results, or before any records have been created. It accepts a list
 * of up to 2 actions, which are React nodes.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/empty-state)
 *
 * ## Usage
 * 
 * ```tsx
 * import { EmptyState } from "boondoggle"
 * import { SearchXIcon } from "lucide-react";
 * ```
 * ```tsx
 * <EmptyState
 *     title={'No search results for "foo-bar"'}
 *     body="Try another search term, or clearing the search."
 *     icon={SearchXIcon}a
 *     actions={[
 *         <Button key="clear-search">
                Clear search
            </Button>
 *     ]}
 * />
 * ```
 */
export function EmptyState({
    actions,
    body,
    className,
    icon: Icon,
    title,
}: {
    actions?: [ReactNode, ReactNode?];
    body: ReactNode;
    className?: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> &
            React.RefAttributes<SVGSVGElement>
    >;
    title: string;
}) {
    return (
        <div
            className={twMerge(
                "text-balance text-center",
                "w-full",
                "px-6 py-32",
                "flex flex-col items-center justify-center",
                className,
            )}
        >
            <Icon
                className="mb-2 block text-secondary"
                size={48}
            />

            <Heading
                className="mb-1 text-xl text-primary"
                level={2}
            >
                {title}
            </Heading>
            <p className="mb-4 max-w-lg text-balance">
                {body}
            </p>

            {actions && actions.length > 0 ? (
                <div
                    className={actionsStyle({
                        actions: actions.length,
                    })}
                >
                    {actions}
                </div>
            ) : null}
        </div>
    );
}
