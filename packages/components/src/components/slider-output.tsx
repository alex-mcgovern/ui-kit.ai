import type { SliderOutputProps } from 'react-aria-components'

import { SliderOutput as RACSliderOutput } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

/**
 * A <SliderOutput> renders the current value of the color slider as text.
 */
export function SliderOutput(props: SliderOutputProps) {
  return (
    <RACSliderOutput
      {...props}
      className={(renderProps) =>
        twMerge(
          'mb-1 block w-fit cursor-default',
          'text-sm font-medium text-hi-contrast',
          'group-invalid:text-error',
          'group-disabled:cursor-not-allowed group-disabled:opacity-50',
          typeof props.className === 'function'
            ? props.className(renderProps)
            : props.className
        )
      }
    />
  )
}
SliderOutput.displayName = 'SliderOutput'
