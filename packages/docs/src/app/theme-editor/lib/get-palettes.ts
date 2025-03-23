import { getBgFromGray } from './get-bg-from-gray'
import { getGrayFromBrand } from './get-gray-from-primary'
import { getPalette } from './get-palette'
import { getScales } from './get-scales'

export function getPalettes({
  brandHex,
  errorHex,
  successHex,
  warningHex,
}: {
  brandHex: string
  errorHex: string
  successHex: string
  warningHex: string
}) {
  const grayHex = getGrayFromBrand({ brandHex: brandHex })
  const { darkBgHex, lightBgHex } = getBgFromGray({ grayHex })

  const {
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
  } = getScales({
    brandHex,
    darkBgHex,
    errorHex,
    grayHex,
    lightBgHex,
    successHex,
    warningHex,
  })

  const error = getPalette({
    dark: darkErrorScale,
    light: lightErrorScale,
    name: 'error',
  })
  const muted = getPalette({
    dark: darkGrayScale,
    light: lightGrayScale,
    name: 'gray',
  })
  const brand = getPalette({
    dark: darkBrandScale,
    light: lightBrandScale,
    name: 'primary',
  })
  const success = getPalette({
    dark: darkSuccessScale,
    light: lightSuccessScale,
    name: 'success',
  })
  const warning = getPalette({
    dark: darkWarningScale,
    light: lightWarningScale,
    name: 'warning',
  })

  return {
    brand: brand,
    error: error,
    muted: muted,
    success: success,
    warning: warning,
  } as const
}
