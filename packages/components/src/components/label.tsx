import type { LabelProps } from "react-aria-components";

import { Label as RACLabel } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * A Label is used when composing a form field, and handles associating the
 * label with the field via the `id` and `for` attributes on your behalf.
 *
 * [source code](https://github.com/alex-mcgovern/ui-kit.ai/tree/main/src/components/label)
 * [react-aria](https://react-spectrum.adobe.com/react-aria/forms.html#labels-and-help-text)
 *
 * ## Usage
 *
 * ```tsx
 * import { Label } from "ui-kit.ai"
 * ```
 * ```tsx
 * <Label>Your label here</Label>
 * ```
 */
export function Label(props: LabelProps) {
    return (
        <RACLabel
            {...props}
            className={twMerge(
                "mb-2 block w-fit cursor-default",
                "text-sm font-medium text-secondary",
                "group-invalid:text-invalid",
                "group-disabled:cursor-not-allowed group-disabled:opacity-disabled",
                props.className,
            )}
        />
    );
}
