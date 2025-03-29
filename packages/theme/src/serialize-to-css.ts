import type { getPalettes } from './gen-color-palette'

export function serializeToCss({
  palettes,
  selector,
}: {
  palettes: ReturnType<typeof getPalettes>
  selector: string
}) {
  return `
    ${selector} {
      /* Override/reset the Tailwind color palette variables. */
      --color-*: initial;

      ${Object.entries(palettes)
        .map(([colorName, [light, dark]]) => {
          return `--color-${colorName}: light-dark(${light}, ${dark});`
        })
        .join('\n')}
    }
  `
}
