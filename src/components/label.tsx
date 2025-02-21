import type { LabelProps } from "react-aria-components";

import { Label as RACLabel } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Label(props: LabelProps) {
    return (
        <RACLabel
            {...props}
            className={twMerge(
                "mb-2 block w-fit cursor-default",
                "text-sm font-medium text-secondary",
                "group-invalid:text-invalid",
                "group-disabled:opacity-disabled group-disabled:cursor-not-allowed",
                props.className,
            )}
        />
    );
}
