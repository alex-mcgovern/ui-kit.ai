import { getAccentScales } from './get-accent-scales'

export const getScales = ({
  brandHex,
  darkBgHex,
  errorHex,
  grayHex,
  lightBgHex,
  successHex,
  warningHex,
}: {
  brandHex: string
  darkBgHex: string
  errorHex: string
  grayHex: string
  lightBgHex: string
  successHex: string
  warningHex: string
}) => {
  const {
    darkAccentScale: darkBrandScale,
    darkGrayScale,
    lightAccentScale: lightBrandScale,
    lightGrayScale,
  } = getAccentScales({
    colorHex: brandHex,
    darkBgHex,
    grayHex,
    lightBgHex,
  })
  const { darkAccentScale: darkErrorScale, lightAccentScale: lightErrorScale } =
    getAccentScales({
      colorHex: errorHex,
      darkBgHex,
      grayHex,
      lightBgHex,
    })
  const {
    darkAccentScale: darkSuccessScale,
    lightAccentScale: lightSuccessScale,
  } = getAccentScales({
    colorHex: successHex,
    darkBgHex,
    grayHex,
    lightBgHex,
  })
  const {
    darkAccentScale: darkWarningScale,
    lightAccentScale: lightWarningScale,
  } = getAccentScales({
    colorHex: warningHex,
    darkBgHex,
    grayHex,
    lightBgHex,
  })

  return {
    darkBrandScale,
    darkErrorScale,
    darkGrayScale,
    darkSuccessScale,
    darkWarningScale,
    lightBrandScale,
    lightErrorScale,
    lightGrayScale,
    lightSuccessScale,
    lightWarningScale,
  }
}
