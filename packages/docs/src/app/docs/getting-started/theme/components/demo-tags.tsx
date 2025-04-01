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
        <TagButton variant='default'>Default</TagButton>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton variant='error'>Error</TagButton>
        <TagButton variant='errorTint'>Error</TagButton>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton variant='warning'>Warning</TagButton>
        <TagButton variant='warningTint'>Warning</TagButton>
      </div>
      <div className='flex gap-2 flex-col items-center justify-center'>
        <TagButton variant='success'>Success</TagButton>
        <TagButton variant='successTint'>Success</TagButton>
      </div>
    </DemoContainer>
  )
}
