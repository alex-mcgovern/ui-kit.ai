import type { LabelProps } from "react-aria-components";

import { Text as RACText } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Description(props: LabelProps) {
    return (
        <RACText
            {...props}
            slot="description"
            className={twMerge(
                "mb-1 block w-fit cursor-default last:mt-2",
                "text-sm font-normal text-secondary",
                "group-invalid:text-invalid",
                "group-disabled:opacity-disabled group-disabled:cursor-not-allowed",
                props.className,
            )}
        />
    );
}
