import type { OptionsSchema } from '@ui-kit.ai/components'

import { AppleIcon, BananaIcon, CarrotIcon, LeafyGreenIcon } from 'lucide-react'

type Options = {
  withIcon?: boolean
  withSections?: boolean
}

const getItems = ({ withIcon }: Options) => ({
  apple: {
    icon: withIcon === true ? <AppleIcon /> : undefined,
    id: 'apple',
    textValue: 'Apple',
  },
  banana: {
    icon: withIcon === true ? <BananaIcon /> : undefined,
    id: 'banana',
    textValue: 'Banana',
  },
  carrot: {
    icon: withIcon === true ? <CarrotIcon /> : undefined,
    id: 'carrot',
    textValue: 'Carrot',
  },
  spinach: {
    icon: withIcon === true ? <LeafyGreenIcon /> : undefined,
    id: 'spinach',
    textValue: 'Spinach',
  },
})

export function getMockOptions<TType extends 'listbox' | 'menu'>(
  options: Options = {}
): OptionsSchema<TType>[] {
  const { apple, banana, carrot, spinach } = getItems(options)

  return options.withSections === true
    ? [
        {
          id: 'fruits',
          items: [banana, apple],
          textValue: 'Fruits',
        },
        {
          id: 'vegetables',
          items: [carrot, spinach],
          textValue: 'Vegetables',
        },
      ]
    : [apple, banana, carrot, spinach]
}
