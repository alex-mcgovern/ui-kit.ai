import type { ReactNode } from 'react'
import type { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormProps } from 'react-hook-form'

import { FormProvider, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

/**
 * A form is a group of inputs that allows users to submit data to a server,
 * with support for providing field validation errors.
 */
export function Form<TFieldValues extends FieldValues = FieldValues>({
    children,
    className,
    onError,
    onSubmit,
    options,
}: {
    /**
     * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
     */
    children: ReactNode

    /**
     * Class name for the form.
     */
    className?: string

    /**
     * Function that will be called when form validation errors occur.
     */
    onError?: SubmitErrorHandler<TFieldValues>

    /**
     * Function that will be called when the form is submitted.
     */
    onSubmit: SubmitHandler<TFieldValues>

    /**
     * Additional options passed to `react-hook-forms` `useForm` hook.
     */
    options?: UseFormProps<TFieldValues>
}) {
    const formMethods = useForm<TFieldValues>(options)

    return (
        <FormProvider {...formMethods}>
            <form
                className={twMerge(className, 'w-full')}
                onSubmit={(e) => void formMethods.handleSubmit(onSubmit, onError)(e)}
            >
                {children}
            </form>
        </FormProvider>
    )
}
Form.displayName = 'Form'
