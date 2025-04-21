'use client'

import { ListBox } from '@ui-kit.ai/components'
import { AppleIcon, BananaIcon, CarrotIcon, LeafyGreenIcon } from 'lucide-react'

import { DemoContainer } from './demo-container'

export function DemoListBox() {
  return (
    <DemoContainer className='grid grid-cols-4 gap-4'>
      <ListBox
        items={[
          {
            icon: <AppleIcon />,
            id: 'apple',
            textValue: 'Apple',
          },
          {
            icon: <BananaIcon />,
            id: 'banana',
            textValue: 'Banana',
          },
          {
            icon: <CarrotIcon />,
            id: 'carrot',
            textValue: 'Carrot',
          },
          {
            icon: <LeafyGreenIcon />,
            id: 'spinach',
            textValue: 'Spinach',
          },
        ]}
        selectedKeys={['apple']}
        selectionMode='single'
      />
      <ListBox
        items={[
          {
            icon: <AppleIcon />,
            id: 'apple',
            intent: 'error',
            textValue: 'Apple',
          },
          {
            icon: <BananaIcon />,
            id: 'banana',
            intent: 'error',
            textValue: 'Banana',
          },
          {
            icon: <CarrotIcon />,
            id: 'carrot',
            intent: 'error',
            textValue: 'Carrot',
          },
          {
            icon: <LeafyGreenIcon />,
            id: 'spinach',
            intent: 'error',
            textValue: 'Spinach',
          },
        ]}
        selectedKeys={['apple']}
        selectionMode='single'
      />
      <ListBox
        items={[
          {
            icon: <AppleIcon />,
            id: 'apple',
            intent: 'warning',
            textValue: 'Apple',
          },
          {
            icon: <BananaIcon />,
            id: 'banana',
            intent: 'warning',
            textValue: 'Banana',
          },
          {
            icon: <CarrotIcon />,
            id: 'carrot',
            intent: 'warning',
            textValue: 'Carrot',
          },
          {
            icon: <LeafyGreenIcon />,
            id: 'spinach',
            intent: 'warning',
            textValue: 'Spinach',
          },
        ]}
        selectedKeys={['apple']}
        selectionMode='single'
      />
      <ListBox
        items={[
          {
            icon: <AppleIcon />,
            id: 'apple',
            intent: 'success',
            textValue: 'Apple',
          },
          {
            icon: <BananaIcon />,
            id: 'banana',
            intent: 'success',
            textValue: 'Banana',
          },
          {
            icon: <CarrotIcon />,
            id: 'carrot',
            intent: 'success',
            textValue: 'Carrot',
          },
          {
            icon: <LeafyGreenIcon />,
            id: 'spinach',
            intent: 'success',
            textValue: 'Spinach',
          },
        ]}
        selectedKeys={['apple']}
        selectionMode='single'
      />
    </DemoContainer>
  )
}
