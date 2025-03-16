import type { LabelProps } from "react-aria-components";

import { Text as RACText } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * A Description is text with attributes that improve screen reader
 * announcements, usually used to provide more context on a field or control.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/packages/components/src/description)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/accessibility)
 *
 * ## Usage
 *
 * ```tsx
 * import { Description } from "ui-kit.ai"
 * ```
 * ```tsx
 * <Description>Your description here</Description>
 * ```
 */
export function Description(props: LabelProps) {
    return (
        <RACText
            {...props}
            className={twMerge(
                "mb-1 block w-fit cursor-default last:mt-2",
                "text-sm font-normal text-secondary",
                "group-invalid:text-invalid",
                "group-disabled:cursor-not-allowed group-disabled:opacity-disabled",
                props.className,
            )}
            slot="description"
        />
    );
}
