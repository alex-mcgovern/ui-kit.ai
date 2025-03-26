/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */
import { converter, formatHex, hsl, type Hsl } from 'culori'

const toHsl = converter('hsl')

export function getPalettes({
  brandHex,
  errorHex,
  successHex,
  warningHex,
  grayHex: overrideGrayHex,
}: {
  brandHex: string
  errorHex: string
  grayHex?: string
  successHex: string
  warningHex: string
}) {
  const grayHex = overrideGrayHex ?? getGrayHexFromBrand(brandHex)

  return {
    background: [getBg(grayHex, 'light'), getBg(grayHex, 'dark')],
    'background-raised': [
      getBgRaised(grayHex, 'light'),
      getBgRaised(grayHex, 'dark'),
    ],
    'background-inverse': [
      getBgInverse(grayHex, 'light'),
      getBgInverse(grayHex, 'dark'),
    ],

    'hi-contrast': [
      getHiContrast(grayHex, 'light'),
      getHiContrast(grayHex, 'dark'),
    ],
    'mid-contrast': [
      getMidContrast(grayHex, 'light'),
      getMidContrast(grayHex, 'dark'),
    ],
    'lo-contrast': [
      getLoContrast(grayHex, 'light'),
      getLoContrast(grayHex, 'dark'),
    ],
    inverse: [getInverse(grayHex, 'light'), getInverse(grayHex, 'dark')],

    tint: [getTint(grayHex, 'light'), getTint(grayHex, 'dark')],
    'tint-dark': [getTintDark(grayHex, 'light'), getTintDark(grayHex, 'dark')],
    'tint-light': [
      getTintLight(grayHex, 'light'),
      getTintLight(grayHex, 'dark'),
    ],

    [`brand`]: [brandHex, brandHex],
    [`brand-dark`]: [getVariantDark(brandHex), getVariantDark(brandHex)],
    [`brand-light`]: [getVariantLight(brandHex), getVariantLight(brandHex)],
    [`brand-fg`]: [getForeground(brandHex), getForeground(brandHex)],
    'brand-tint': [getTint(brandHex, 'light'), getTint(brandHex, 'dark')],
    'brand-tint-dark': [
      getTintDark(brandHex, 'light'),
      getTintDark(brandHex, 'dark'),
    ],
    'brand-tint-light': [
      getTintLight(brandHex, 'light'),
      getTintLight(brandHex, 'dark'),
    ],
    'brand-tint-fg': [
      getForeground(getTint(brandHex, 'light')),
      getForeground(getTint(brandHex, 'dark')),
    ],

    [`error`]: [errorHex, errorHex],
    [`error-dark`]: [getVariantDark(errorHex), getVariantDark(errorHex)],
    [`error-light`]: [getVariantLight(errorHex), getVariantLight(errorHex)],
    [`error-fg`]: [getForeground(errorHex), getForeground(errorHex)],
    'error-tint': [getTint(errorHex, 'light'), getTint(errorHex, 'dark')],
    'error-tint-dark': [
      getTintDark(errorHex, 'light'),
      getTintDark(errorHex, 'dark'),
    ],
    'error-tint-light': [
      getTintLight(errorHex, 'light'),
      getTintLight(errorHex, 'dark'),
    ],
    'error-tint-fg': [
      getForeground(getTint(errorHex, 'light')),
      getForeground(getTint(errorHex, 'dark')),
    ],

    [`warning`]: [warningHex, warningHex],
    [`warning-dark`]: [getVariantDark(warningHex), getVariantDark(warningHex)],
    [`warning-light`]: [
      getVariantLight(warningHex),
      getVariantLight(warningHex),
    ],
    [`warning-fg`]: [getForeground(warningHex), getForeground(warningHex)],
    'warning-tint': [getTint(warningHex, 'light'), getTint(warningHex, 'dark')],
    'warning-tint-dark': [
      getTintDark(warningHex, 'light'),
      getTintDark(warningHex, 'dark'),
    ],
    'warning-tint-light': [
      getTintLight(warningHex, 'light'),
      getTintLight(warningHex, 'dark'),
    ],
    'warning-tint-fg': [
      getForeground(getTint(warningHex, 'light')),
      getForeground(getTint(warningHex, 'dark')),
    ],

    [`success`]: [successHex, successHex],
    [`success-dark`]: [getVariantDark(successHex), getVariantDark(successHex)],
    [`success-light`]: [
      getVariantLight(successHex),
      getVariantLight(successHex),
    ],
    [`success-fg`]: [getForeground(successHex), getForeground(successHex)],
    'success-tint': [getTint(successHex, 'light'), getTint(successHex, 'dark')],
    'success-tint-dark': [
      getTintDark(successHex, 'light'),
      getTintDark(successHex, 'dark'),
    ],
    'success-tint-light': [
      getTintLight(successHex, 'light'),
      getTintLight(successHex, 'dark'),
    ],
    'success-tint-fg': [
      getForeground(getTint(successHex, 'light')),
      getForeground(getTint(successHex, 'dark')),
    ],
  } as const
}

function clamp(
  num: number,
  options: { max: number; min: number } = { min: 0, max: 1 }
) {
  return Math.min(options.max, Math.max(options.min, num))
}

function getBg(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.05,
    l: mode === 'light' ? 0.95 : 0.05,
  }

  return hslToHex(grayHsl)
}
function getBgInverse(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.05,
    l: mode === 'light' ? 0.3 : 0.98,
  }

  return hslToHex(grayHsl)
}

function getBgRaised(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.05,
    l: mode === 'light' ? 1 : 0.1,
  }

  return hslToHex(grayHsl)
}

function getForeground(hex: string) {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const lightness: number = hslRepr.l > 0.6 ? 0.05 : 0.95

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.5,
    l: lightness,
  }

  return hslToHex(grayHsl)
}
function getGrayHexFromBrand(hex: string) {
  const primaryHsl = toHsl(hex)
  if (primaryHsl == null) {
    throw new Error(`Error while converting brand hex (${hex}) to HSL.`)
  }

  const grayHsl: Hsl = {
    ...primaryHsl,
    s: 0.2,
  }

  return hslToHex(grayHsl)
}

function getHiContrast(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.1,
    l: mode === 'light' ? 0.2 : 0.975,
  }

  return hslToHex(grayHsl)
}
function getInverse(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.1,
    l: mode === 'light' ? 0.975 : 0.2,
  }

  return hslToHex(grayHsl)
}

function getLoContrast(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.1,
    l: mode === 'light' ? 0.7 : 0.2,
  }

  return hslToHex(grayHsl)
}
function getMidContrast(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: 0.1,
    l: mode === 'light' ? 0.5 : 0.8,
  }

  return hslToHex(grayHsl)
}

function getTint(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    // s: hslRepr.s * 0.75,
    l: mode === 'light' ? 0.95 : 0.2,
  }

  return hslToHex(grayHsl)
}

function getTintDark(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    s: hslRepr.s * 0.85,
    l: mode === 'light' ? 0.925 : 0.225,
  }

  return hslToHex(grayHsl)
}

function getTintLight(hex: string, mode: 'dark' | 'light') {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const grayHsl: Hsl = {
    ...hslRepr,
    // s: hslRepr.s * 0.65,
    l: mode === 'light' ? 0.975 : 0.175,
  }

  return hslToHex(grayHsl)
}

function getVariantDark(hex: string) {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const lightness: number = hslRepr.l * 0.9

  const grayHsl: Hsl = {
    ...hslRepr,
    l: clamp(lightness, { min: 0.05, max: 0.95 }),
  }

  return hslToHex(grayHsl)
}

function getVariantLight(hex: string) {
  const hslRepr = toHsl(hex)
  if (hslRepr == null) throw Error('Error converting hex to hsl')

  const lightness: number = hslRepr.l * 1.1

  const grayHsl: Hsl = {
    ...hslRepr,
    l: clamp(lightness, { min: 0.05, max: 0.95 }),
  }

  return hslToHex(grayHsl)
}

function hslToHex(hslVal: Hsl) {
  return formatHex(hsl(hslVal))
}
