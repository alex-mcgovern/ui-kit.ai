'use client'

import { Alert, Button } from '@ui-kit.ai/components'

import { DemoContainer } from './demo-container'

export function DemoAlert() {
  return (
    <DemoContainer className='flex flex-col gap-4'>
      <Alert
        actions={[
          <Button variant='secondary'>Secondary</Button>,
          <Button variant='primary'>Primary</Button>,
        ]}
        description='Description'
        title='Title'
      />
      <Alert
        actions={[
          <Button variant='secondary'>Secondary</Button>,
          <Button variant='primary'>Primary</Button>,
        ]}
        description='Description'
        intent='error'
        title='Title'
      />
      <Alert
        actions={[
          <Button variant='secondary'>Secondary</Button>,
          <Button variant='primary'>Primary</Button>,
        ]}
        description='Description'
        intent='warning'
        title='Title'
      />
      <Alert
        actions={[
          <Button variant='secondary'>Secondary</Button>,
          <Button variant='primary'>Primary</Button>,
        ]}
        description='Description'
        intent='success'
        title='Title'
      />
    </DemoContainer>
  )
}
