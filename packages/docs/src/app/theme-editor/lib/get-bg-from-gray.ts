import type { Hsl } from 'culori'

import { converter, formatHex, hsl } from 'culori'

const toHsl = converter('hsl')

export function getBgFromGray({ grayHex }: { grayHex: string }) {
  const grayHsl = toHsl(grayHex)
  if (grayHsl == null) {
    throw new Error(`Error while converting gray (${grayHex}) to HSL.`)
  }

  const lightBgHsl: Hsl = {
    ...grayHsl,
    l: 5,
  }
  const darkBgHsl: Hsl = {
    ...grayHsl,
    l: 95,
  }

  const lightBgHex = formatHex(hsl(lightBgHsl))
  const darkBgHex = formatHex(hsl(darkBgHsl))

  return {
    darkBgHex,
    lightBgHex,
  }
}
