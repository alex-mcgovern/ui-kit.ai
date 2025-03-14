import type { HTMLAttributes, ReactNode } from "react";

import { cloneElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export type ActionNodes = [ReactNode, ReactNode?];

const actionsStyle = tv({
    base: "",
    variants: {
        actions: {
            1: "",
            2: "flex gap-2",
        },
    },
});

export function renderActionNodes({
    actions,
    className,
    props,
}: {
    actions: ActionNodes | undefined;
    className?: string;
    props: HTMLAttributes<HTMLElement>;
}) {
    if (!Array.isArray(actions)) return null;

    return (
        <div
            className={twMerge(
                actionsStyle({
                    actions: actions.length,
                }),
                "shrink-0",
                className,
            )}
        >
            {actions.map((action) => {
                if (isValidElement(action)) {
                    return cloneElement(action, {
                        // @ts-expect-error
                        ...action.props,
                        ...props,
                        className: twMerge(
                            // @ts-expect-error
                            action.props.className,
                            props.className,
                        ),
                    });
                }
                return action;
            })}
        </div>
    );
}
