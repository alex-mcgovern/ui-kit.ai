import type { Hsl } from 'culori'

import { converter, formatHex, hsl } from 'culori'

const toHsl = converter('hsl')

export function getGrayFromBrand({ brandHex }: { brandHex: string }) {
  const primaryHsl = toHsl(brandHex)
  if (primaryHsl == null) {
    throw new Error(`Error while converting brand hex (${brandHex}) to HSL.`)
  }

  const grayHsl: Hsl = {
    ...primaryHsl,
    s: 0.15,
  }

  return formatHex(hsl(grayHsl))
}
