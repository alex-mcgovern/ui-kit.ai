import type { LabelProps } from "react-aria-components";

import { Label as RACLabel } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Label(props: LabelProps) {
    return (
        <RACLabel
            {...props}
            className={twMerge(
                "mb-1 block w-fit cursor-default",
                "text-sm font-medium text-secondary",
                props.className,
            )}
        />
    );
}
