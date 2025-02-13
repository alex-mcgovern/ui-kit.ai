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
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
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
            <Icon className="mb-2 block text-secondary" size={48} />

            <Heading className="mb-1 text-xl text-primary" level={2}>
                {title}
            </Heading>
            <p className="mb-4 max-w-lg text-balance">{body}</p>

            {actions && actions.length > 0 ? (
                <div className={actionsStyle({ actions: actions.length })}>
                    {actions}
                </div>
            ) : null}
        </div>
    );
}
