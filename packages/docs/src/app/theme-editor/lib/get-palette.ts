/* eslint-disable perfectionist/sort-objects */

export function getPalette({
  name,
  light,
  dark,
}: {
  dark: string[]
  light: string[]
  name: string
}) {
  return {
    [`${name}-solid`]: [get(light, 9), get(dark, 9)],
    [`${name}-solid-active`]: [get(light, 8), get(dark, 8)],
    [`${name}-solid-hover`]: [get(light, 10), get(dark, 10)],
    [`${name}-tint`]: [get(light, 2), get(dark, 2)],
    [`${name}-tint-active`]: [get(light, 3), get(dark, 3)],
    [`${name}-tint-hover`]: [get(light, 4), get(dark, 4)],
    [`${name}-text-lo-contrast`]: [get(light, 11), get(dark, 11)],
    [`${name}-text-hi-contrast`]: [get(light, 12), get(dark, 12)],
  } as const
}

function get(scale: string[], num: number) {
  return scale[num - 1]
}
