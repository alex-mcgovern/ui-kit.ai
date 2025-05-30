import type { ColorSliderProps as RACColorSliderProps } from 'react-aria-components'

import { ColorThumb, ColorSlider as RACColorSlider, SliderTrack } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const sliderStyles = tv({
    base: ['w-full'],
})

const trackStyles = tv({
    base: ['relative', 'w-full', 'h-6', 'rounded'],
})

const thumbStyles = tv({
    base: ['size-6', 'inset-y-1/2', 'rounded-full', 'border-3 border-[#ffffff]', 'shadow-lg'],
})

/**
 * A component for selecting a color using a slider.
 * Provides interactive color selection with proper accessibility semantics.
 */
export function ColorSlider(props: RACColorSliderProps) {
    return (
        <RACColorSlider
            {...props}
            className={(renderProps) =>
                twMerge(
                    sliderStyles(),
                    typeof props.className === 'function'
                        ? props.className(renderProps)
                        : props.className
                )
            }
        >
            {(renderProps) => (
                <>
                    {typeof props.children === 'function'
                        ? props.children(renderProps)
                        : props.children}
                    <SliderTrack
                        className={trackStyles()}
                        style={({ defaultStyle }) => ({
                            background: `${defaultStyle.background},
      repeating-conic-gradient(var(--theme-default-bg-tint) 0% 25%, var(--theme-default-bg-base) 0% 50%) 50% / 16px 16px`,
                        })}
                    >
                        <ColorThumb className={thumbStyles()} />
                    </SliderTrack>
                </>
            )}
        </RACColorSlider>
    )
}
ColorSlider.displayName = 'ColorSlider'
