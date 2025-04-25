import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { twMerge } from 'tailwind-merge'

export function CodeInline({
    children,
    className,
    language,
}: {
    children: string
    className?: string
    language: string
}) {
    if (!children) return null

    return (
        <SyntaxHighlighter
            codeTagProps={{
                className: twMerge(
                    'px-1 py-0.25 bg-background-raised rounded-sm border border-tint-dark',
                    className
                ),
                style: {
                    whiteSpace: 'unset',
                },
            }}
            data-testid='syntax-highlighter-inline'
            language={language}
            PreTag='span'
            useInlineStyles={false}
            wrapLines={false}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    )
}
CodeInline.displayName = 'CodeInline'
