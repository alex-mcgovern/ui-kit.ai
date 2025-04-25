'use client'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { Card, CardBody, CardHeader, CodeBlock } from '@ui-kit.ai/components'
import { createContext } from 'react'
import { twMerge } from 'tailwind-merge'

export const ShowCodeContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(
    null
)

export function Code({
    className,
    code,
    component,
    language = 'tsx',
}: {
    className?: string
    code: string
    component: ReactNode
    language: string
}) {
    return (
        <Card className={twMerge(className, 'bg-background')}>
            <CardHeader className='border-b border-b-tint-light'>{component}</CardHeader>
            <CardBody className='bg-background-raised'>
                <CodeBlock
                    language={language}
                    showLineNumbers={false}
                >
                    {code}
                </CodeBlock>
            </CardBody>
        </Card>
    )
}
