import { Canvas as StorybookCanvas } from "@storybook/blocks";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Canvas(
    props: ComponentProps<typeof StorybookCanvas>,
) {
    return (
        <StorybookCanvas
            {...props}
            className={twMerge(
                props.className,
                "!my-4 !rounded-xl !border !border-gray-200 !shadow-sm",
            )}
        />
    );
}
