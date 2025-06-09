'use client'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

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
import { createContext } from 'react'
import { twMerge } from 'tailwind-merge'

export const ShowCodeContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(
    null
)

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
                <CardHeader className='p-0 m-0'>
                    <TabList className='w-full'>
                        <Tab id='preview'>Preview</Tab>
                        <Tab id='code'>Code</Tab>
                    </TabList>
                </CardHeader>
                <CardBody>
                    <TabPanel
                        className={twMerge(
                            'flex items-center justify-center',
                            'bg-[radial-gradient(var(--theme-default-bg-tint-hover)_1px,transparent_1px)] [background-size:16px_16px]'
                        )}
                        id='preview'
                    >
                        {component}
                    </TabPanel>
                    <TabPanel id='code'>
                        <CodeBlock
                            language='tsx'
                            showLineNumbers={false}
                        >
                            {code}
                        </CodeBlock>
                    </TabPanel>
                </CardBody>
            </Tabs>
        </Card>
    )
}
