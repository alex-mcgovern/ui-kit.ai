import type { Element } from 'hast'
import type { JSX } from 'react'

import ReactMarkdown, {
    type Components as ReactMarkdownComponents,
    type Options as ReactMarkdownOptions,
} from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { twMerge } from 'tailwind-merge'

import { Card, CardBody } from './card'
import { CodeBlock } from './code-block'
import { CodeInline } from './code-inline'
import { Heading } from './heading'

function MarkdownCode({
    children,
    className = '',
    node,
}: JSX.IntrinsicElements['code'] & { node?: Element | undefined }) {
    if (node?.position == null || children == null || typeof children !== 'string') {
        console.error('Could not parse code node', node)
        return <>{children}</>
    }

    const language: string = /language-(\w+)/.exec(className)?.[1] ?? 'plaintext'

    if (node.position.start.line === node.position.end.line) {
        return <CodeInline language={language}>{children}</CodeInline>
    }

    return (
        <Card className='my-8'>
            <CardBody>
                <CodeBlock
                    className={className}
                    language={language}
                >
                    {children}
                </CodeBlock>
            </CardBody>
        </Card>
    )
}
MarkdownCode.displayName = 'MarkdownCode'

const COMPONENTS = {
    a({ children, ...props }) {
        return (
            <a
                className='text-hi-contrast hover:text-hi-contrast underline'
                target='_blank'
                {...props}
            >
                {children}
            </a>
        )
    },
    code: MarkdownCode,
    h1: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'my-2')}
            level={1}
        />
    ),
    h2: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'my-2')}
            level={2}
        />
    ),
    h3: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'my-2')}
            level={3}
        />
    ),
    h4: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'my-2')}
            level={4}
        />
    ),
    h5: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'my-2')}
            level={5}
        />
    ),
    h6: (props) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'my-2')}
            level={6}
        />
    ),
    img({ alt, src }) {
        return (
            <img
                alt={alt}
                className='h-auto max-w-full'
                src={src}
            />
        )
    },
} satisfies ReactMarkdownComponents

export function Markdown({
    children,
    className,
    options,
}: {
    children: string
    className?: string
    options?: ReactMarkdownOptions
}) {
    return (
        <div className={className}>
            <ReactMarkdown
                components={COMPONENTS}
                remarkPlugins={[remarkGfm]}
                {...options}
            >
                {children}
            </ReactMarkdown>
        </div>
    )
}
Markdown.displayName = 'Markdown'
