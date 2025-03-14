import type { ComponentProps } from "react";
import { useFormState } from "react-hook-form";

import { Button } from "./button";

/**
 * A FormSubmitButton handles form submission, and listen's to
 * `react-hook-form`'s state to handle disabled * pending states appropriately.
 *
 * [source code](https://github.com/alex-mcgovern/boondoggle/tree/main/src/components/form)
 * [react-hook-form](https://react-hook-form.com/)
 *
 * ## Usage
 *
 * ```tsx
 * import { FormSubmitButton } from "boondoggle"
 * ```
 * ```tsx
 * <FormSubmitButton>Submit</FormSubmitButton>
 * ```
 */
export function FormSubmitButton({
    children = "Submit",
    variant = "primary",
    ...props
}: ComponentProps<typeof Button>) {
    const { isSubmitting, isValidating, isDirty } =
        useFormState();

    return (
        <Button
            {...props}
            variant={variant}
            type="submit"
            isDisabled={isDirty === false}
            isPending={
                props.isPending === true ||
                isSubmitting === true ||
                isValidating === true
            }
        >
            {children}
        </Button>
    );
}
