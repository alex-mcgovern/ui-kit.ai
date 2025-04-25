'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import { Button } from '@ui-kit.ai/components'

import { DemoContainer } from './demo-container'

export function DemoButton() {
  return (
    <DemoContainer className='grid grid-cols-4 gap-2'>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <Button variant='primary'>Default</Button>
        <Button variant='secondary'>Default</Button>
        <Button variant='tertiary'>Default</Button>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <Button
          intent='error'
          variant='primary'
        >
          Default
        </Button>
        <Button
          intent='error'
          variant='secondary'
        >
          Default
        </Button>
        <Button
          intent='error'
          variant='tertiary'
        >
          Default
        </Button>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <Button
          intent='warning'
          variant='primary'
        >
          Default
        </Button>
        <Button
          intent='warning'
          variant='secondary'
        >
          Default
        </Button>
        <Button
          intent='warning'
          variant='tertiary'
        >
          Default
        </Button>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <Button
          intent='success'
          variant='primary'
        >
          Default
        </Button>
        <Button
          intent='success'
          variant='secondary'
        >
          Default
        </Button>
        <Button
          intent='success'
          variant='tertiary'
        >
          Default
        </Button>
      </div>
    </DemoContainer>
  )
}
