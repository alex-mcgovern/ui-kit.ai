'use client'

import {
  Card,
  CardBody,
  CardHeader,
  CodeBlock,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from '@ui-kit.ai/components'
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

export const ShowCodeContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | null
>(null)

export function Code({
  className,
  code,
  component,
}: {
  className?: string
  code: string
  component: ReactNode
}) {
  return (
    <Card className={className}>
      <Tabs>
        <CardHeader className='p-0'>
          <TabList className='w-full'>
            <Tab id='preview'>Preview</Tab>
            <Tab id='code'>Code</Tab>
          </TabList>
        </CardHeader>
        <CardBody>
          <TabPanel
            className='flex items-center justify-center min-h-24 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'
            id='preview'
          >
            {component}
          </TabPanel>
          <TabPanel id='code'>
            <CodeBlock language='tsx'>{code}</CodeBlock>
          </TabPanel>
        </CardBody>
      </Tabs>
    </Card>
  )
}
