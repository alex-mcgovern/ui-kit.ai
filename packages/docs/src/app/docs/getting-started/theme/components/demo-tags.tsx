'use client'
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable perfectionist/sort-objects */

import { TagButton } from '@ui-kit.ai/components'

import { DemoContainer } from './demo-container'

export function DemoTags() {
  return (
    <DemoContainer className='grid grid-cols-4 gap-2'>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton variant='default'>Default</TagButton>
        <TagButton variant='solid'>Default</TagButton>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton
          intent='error'
          variant='default'
        >
          Error
        </TagButton>
        <TagButton
          intent='error'
          variant='solid'
        >
          Error
        </TagButton>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton
          intent='warning'
          variant='default'
        >
          Warning
        </TagButton>
        <TagButton
          intent='warning'
          variant='solid'
        >
          Warning
        </TagButton>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton
          intent='success'
          variant='default'
        >
          Success
        </TagButton>
        <TagButton
          intent='success'
          variant='solid'
        >
          Success
        </TagButton>
      </div>
    </DemoContainer>
  )
}
