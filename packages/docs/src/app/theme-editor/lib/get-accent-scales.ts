import { generateRadixColors } from 'radix-theme-generator'

export function getAccentScales({
  colorHex,
  darkBgHex,
  grayHex,
  lightBgHex,
}: {
  colorHex: string
  darkBgHex: string
  grayHex: string
  lightBgHex: string
}) {
  const { accentScale: lightAccentScale, grayScale: lightGrayScale } =
    generateRadixColors({
      accent: colorHex,
      appearance: 'light',
      background: lightBgHex,
      gray: grayHex,
    })
  const { accentScale: darkAccentScale, grayScale: darkGrayScale } =
    generateRadixColors({
      accent: colorHex,
      appearance: 'dark',
      background: darkBgHex,
      gray: grayHex,
    })

  return {
    darkAccentScale,
    darkGrayScale,
    lightAccentScale,
    lightGrayScale,
  }
}
