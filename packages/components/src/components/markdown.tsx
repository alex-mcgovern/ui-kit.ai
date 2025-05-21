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
import { Link } from './link'

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
                    showLineNumbers={false}
                >
                    {children}
                </CodeBlock>
            </CardBody>
        </Card>
    )
}
MarkdownCode.displayName = 'MarkdownCode'

const COMPONENTS = {
    a({ children, href }) {
        return (
            <Link
                className='text-dark hover:text-mid underline decoration-dotted'
                href={href}
            >
                {children}
            </Link>
        )
    },
    code: MarkdownCode,
    h1: ({ node: _node, ...props }) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'mb-4')}
            level={1}
        />
    ),
    h2: ({ node: _node, ...props }) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'mb-4')}
            level={2}
        />
    ),
    h3: ({ node: _node, ...props }) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'mb-4')}
            level={3}
        />
    ),
    h4: ({ node: _node, ...props }) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'mb-4')}
            level={4}
        />
    ),
    h5: ({ node: _node, ...props }) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'mb-4')}
            level={5}
        />
    ),
    h6: ({ node: _node, ...props }) => (
        <Heading
            {...props}
            className={twMerge(props.className, 'mb-4')}
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
    li: ({ node: _node, ...props }) => (
        <li
            {...props}
            className={twMerge('my-2', props.className)}
        />
    ),
    ol: ({ node: _node, ...props }) => (
        <ol
            {...props}
            className={twMerge('my-4 list-outside list-decimal pl-4', props.className)}
        />
    ),
    ul: ({ node: _node, ...props }) => (
        <ul
            {...props}
            className={twMerge('my-4 list-outside list-disc pl-4', props.className)}
        />
    ),
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
