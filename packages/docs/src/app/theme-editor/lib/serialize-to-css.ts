import type { getPalettes } from './get-palettes'

export function serializeToCss({
  palettes,
  selector,
}: {
  palettes: ReturnType<typeof getPalettes>
  selector: string
}) {
  return `
    ${selector} {
      ${Object.entries(palettes)
        .map(([colorName, [light, dark]]) => {
          return `--color-${colorName}: light-dark(${light}, ${dark});`
        })
        .join('\n')}
    }
  `
}
