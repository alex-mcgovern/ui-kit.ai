import type { ComponentProps } from 'react'

import { useController, useFormContext } from 'react-hook-form'

import { FieldError } from './field-error'
import { Input } from './input'
import { TextField } from './text-field'

/**
 * A form text field connects a `<TextField />` to a `<Form />` component using `react-hook-form`.
 */
export function FormTextField({
  children = <Input />,
  ...props
}: Omit<ComponentProps<typeof TextField>, 'children'> & {
  children?: ComponentProps<typeof TextField>['children']
}) {
  if (props.name == null) throw new Error('Form.TextField requires a name prop')

  const { control } = useFormContext()

  const {
    field: { disabled: isDisabled, name, onBlur, onChange, ref, value = '' },
    fieldState: { error, invalid },
  } = useController({
    control,
    defaultValue: props.value ?? props.defaultValue,
    name: props.name,
  })

  return (
    <TextField
      {...props}
      defaultValue={value}
      isDisabled={isDisabled}
      isInvalid={invalid}
      name={name}
      onBlur={onBlur}
      onChange={(v) => {
        onChange(v)
        props.onChange?.(v)
      }}
      ref={ref}
      validationBehavior='aria' // Let React Hook Form handle validation instead of the browser.
      value={value}
    >
      {(renderProps) => {
        return (
          <>
            {typeof children === 'function' ? children(renderProps) : children}
            <FieldError>{error?.message}</FieldError>
          </>
        )
      }}
    </TextField>
  )
}
FormTextField.displayName = 'FormTextField'
